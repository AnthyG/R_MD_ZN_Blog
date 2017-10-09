function d2h(d) {
    return d.toString(16)
}

function h2d(h) {
    return parseInt(h, 16)
}

function stringToHex(tmp) {
    var str = '',
        i = 0,
        tmp_len = tmp.length,
        c

    for (; i < tmp_len; i += 1) {
        c = tmp.charCodeAt(i)
        str += d2h(c) + ' '
    }
    return str
}

function hexToString(tmp) {
    var arr = tmp.split(' '),
        str = '',
        i = 0,
        arr_len = arr.length,
        c

    for (; i < arr_len; i += 1) {
        c = String.fromCharCode(h2d(arr[i]))
        str += c
    }

    return str
}



marked.setOptions({
    "gfm": true,
    "breaks": true,
    "sanitize": true,
    "smartLists": true,
    "smartypants": true,
    "highlight": function(code) {

        // console.log("Highlighting >> ", code)
        return hljs.highlightAuto(code).value
    }
})

var markedR = new marked.Renderer()
markedR.link = function(href, title, text) {
    var href = href || '',
        title = title || '',
        text = text || ''

    if (this.options.sanitize) {
        try {
            var prot = decodeURIComponent(unescape(href))
                .replace(/[^\w:]/g, '')
                .toLowerCase()
        } catch (e) {
            return ''
        }
        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
            return ''
        }
    }

    return '<a href="' + href + '" onclick="return openNewTab(\'' + href + '\');" ' + (title ? ('title="' + title + '"') : '') + '>' + text + '</a>'
}
var markedR2 = new marked.Renderer()
markedR2.link = function(href, title, text) {
    var href = href || '',
        title = title || '',
        text = text || ''

    if (this.options.sanitize) {
        try {
            var prot = decodeURIComponent(unescape(href))
                .replace(/[^\w:]/g, '')
                .toLowerCase()
        } catch (e) {
            return ''
        }
        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
            return ''
        }
    }

    return '<a href="?S:' + href + '" onclick="return app.loadBlog(\'' + href + '\', 1);" ' + (title ? ('title="' + title + '"') : '') + '>' + text + '</a>'
}



function openNewTab(url) {
    page.cmd("wrapperOpenWindow", [url, "_blank", ""])
    return false
}

function ownLink(q) {
    app.curPage = q
    page.cmd('wrapperPushState', [null, '', q])
    $(window).scrollTop(0)
    app.hide_app = false

    return false
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(:([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



Vue.use(Buefy)

var app = new Vue({
    el: '#app',
    data: {
        quote: '',
        quoteBy: '',
        date: '',
        collapse_header: true,
        hide_app: true,
        hide_date: true,
        hide_quote: true,
        hide_postlist: true,

        hide_page: true,
        cur_page: '',
        pages: {
            '': {
                md: false,
                body: ''
            }
        },

        isOwner: false,

        hide_editor: true,
        editor_title: '',
        editor_quote: '',
        editor_quoteBy: '',
        editor_newtag: '',
        editor_tags: [],
        editor_body: '',

        defaults: {
            author: '',
            copyright: '',
            created: 0,
            description: '',
            modified: 0,
            next_post_id: 0,
            title: ''

            // author: "AnthyG",
            // copyright: "AnthyG _aka_ Glightstar",
            // created: 1500760800000,
            // description: "My very own Blog, to blog bloggy stuff",
            // modified: 0,
            // next_post_id: 3,
            // title: "Glightstar’s Blog"
        },
        singlePost: false,
        footer: [],
        postList: [],
        tagList: [],
        pPostList: []
    },
    methods: {
        markDefault: function(d) {
            var e = eval('marked(this.defaults[d])')
            var e2 = e.substr(3, e.length - 8)
            return e2
        },
        markFooter: function(fPart) {
            var links = fPart.links.split(',').join('\n- ')
            var opts = {
                renderer: markedR2
            }
            if (fPart.new_tab)
                opts = {
                    renderer: markedR
                }
            return marked('- ### ' + fPart.title + '\n' + links, opts)
                .replace(/<ul>|<\/ul>/gmi, '')
        },
        markPost: function(body, iniWOah) {
            var iniWOah = iniWOah || false
            return '<section class="asection"><div class="container">' + (marked(body)
                    .replace(
                        /<blockquote>\n<p>([^.]*?)?(?=<\/p>\n<\/blockquote>)(?:<\/p>\n<\/blockquote>)?/gmi,
                        function(m, c) {
                            var str = '</div></section><section class="quote"><blockquote>' + c + '</blockquote></section><section class="asection"><div class="container">'

                            return str
                        }
                    )
                    .replace(
                        /(<section> <\/section>|<section class="quote"><blockquote><\/blockquote><\/section>)/gmi,
                        ''
                    )
                )
                .replace(
                    /<p>/gmi,
                    '<p class="' + (iniWOah ? '' : 'hide ah') + '">'
                )
        },
        printTags: function(post_id) {
            return this.tagList.filter(function(tag_item) {
                return tag_item.post_id === post_id
            })
        },
        loadDefaults: function() {
            console.log("Loading defaults..")
            page.cmd("dbQuery", [
                "SELECT key, value FROM json LEFT JOIN keyvalue USING (json_id) WHERE directory = '' AND file_name = 'data.json'"
            ], (defaults) => {
                console.log("Defaults", defaults)

                for (var x = 0; x < defaults.length; x++) {
                    var y = defaults[x]

                    app.defaults[y.key] = y.value
                }
            })
        },
        loadFooter: function() {
            console.log("Loading footer..")

            page.cmd("dbQuery", [
                "SELECT * FROM footer"
            ], (footer) => {
                app.footer = footer
            })
        },
        loadBlog: function(qs, loadType, reload) {
            var reload = reload || false
            var loadType = (loadType > -1 ? loadType : -1)

            this.hide_editor = true
            this.hide_page = true
            this.hide_postlist = true
            this.hide_app = true

            this.collapse_header = true
            this.hide_quote = true
            this.quote = ''
            this.quoteBy = ''
            this.hide_date = true
            this.date = ''

            setTimeout(function() {
                console.log("Loading blog..", qs, loadType, reload)

                var tL = -1
                if (loadType === 1 && typeof qs === "string" && qs !== "") {
                    tL = 1
                } else if (loadType === 0 && typeof qs === "number" && qs >= -1) {
                    tL = 0
                } else if (loadType === 2 && typeof qs === "string" && qs !== "") {
                    tL = 2
                }

                var genIt = function() {
                    if (tL === 1) { // Page
                        app.collapse_header = true
                        app.hide_quote = true
                        app.quote = ''
                        app.quoteBy = ''
                        app.hide_date = true
                        app.date = ''

                        app.cur_page = qs

                        app.hide_page = false
                    } else if (tL === 0) { // Single post
                        app.hide_postlist = false

                        app.singlePost = true

                        var post = app.postList[app.postList.length - 1 - qs]
                        app.pPostList = [post]

                        app.quote = post.quote
                        app.quoteBy = post.quoteBy
                        app.hide_quote = false
                            // app.date = moment(post.date_published, "x").format("MMMM Do, YYYY")
                        app.hide_date = false
                        app.collapse_header = false
                    } else if (tL === 2) { // Posts with tag
                        app.hide_postlist = false

                        app.singlePost = false

                        var filter_tagList = app.tagList.filter(function(tag_item) {
                            return tag_item.value === qs
                        })

                        app.pPostList = []
                        for (var x = 0; x < filter_tagList.length; x++) {
                            var y = filter_tagList[x]
                            app.pPostList.unshift(app.postList[app.postList.length - 1 - y.post_id])
                        }

                        app.quote = qs
                        app.quoteBy = 'A Tag'
                        app.hide_quote = false
                        app.hide_date = true
                        app.date = ''
                        app.collapse_header = false
                    } else { // All posts
                        app.hide_postlist = false

                        app.singlePost = false

                        qs = ""
                        app.pPostList = app.postList

                        app.quote = app.defaults.description
                        app.quoteBy = app.defaults.author
                        app.hide_quote = false
                            // app.date = "Created " + moment(app.defaults.created, "x").format("MMMM Do, YYYY")
                        app.hide_date = false
                        app.collapse_header = false
                    }

                    ownLink(typeof qs !== "undefined" ? ('?' + (loadType === 0 ? 'P' : (loadType === 1 ? 'S' : (loadType === 2 ? 'T' : ''))) + ':' + qs) : '?')
                }

                var get_tagList = function(cb) {
                    console.log("getting tagList", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM tag"
                    ], (tagList) => {
                        app.tagList = tagList

                        typeof cb === "function" ? cb(tagList) : genIt()
                    })
                }
                var get_postList = function(cb) {
                    console.log("getting postList", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM post ORDER BY date_published DESC"
                    ], (postList) => {
                        app.postList = postList

                        typeof cb === "function" ? cb(postList) : genIt()
                    })
                }
                var get_post = function(cb) {
                    console.log("getting post", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM post WHERE post_id = " + qs
                    ], (post) => {
                        if (typeof post[0] !== "undefined") {
                            app.postList[app.postList.length - 1 - qs] = post[0]

                            typeof cb === "function" ? cb(post[0]) : genIt()
                        } else
                            showError('**This _post_ does _not_ exist**')
                    })
                }

                var get_page = function(cb) {
                    console.log("getting page", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM page WHERE title = '" + qs + "'"
                    ], (qpage) => {
                        if (typeof qpage[0] !== "undefined") {
                            app.pages[qpage[0].title] = {
                                md: (qpage[0].md ? true : false),
                                body: qpage[0].body
                            }

                            typeof cb === "function" ? cb(qpage[0]) : genIt()
                        } else
                            showError('**This _page_ does _not_ exist**')
                    })
                }

                function getStuff() {
                    if (tL === 1) {
                        // Get sub-page
                        if (app.pages.length > 0 && typeof app.pages[qs] !== "undefined" && !reload)
                            genIt()
                        else
                            get_page()
                    } else if (tL === 0) {
                        // Get post
                        if (app.postList.length > 0 && typeof app.postList[app.postList.length - 1 - qs] !== "undefined" && !reload)
                            genIt()
                        else
                            get_post()

                        // } else if (tL === 2) {
                        //     // Get postList
                        //     if (app.postList.length > 0 && !reload)
                        //         genIt()
                        //     else
                        //         get_postList()
                    } else {
                        // Get postList
                        if (app.postList.length > 0 && !reload)
                            genIt()
                        else
                            get_postList()
                    }
                }

                if (!app.tagList.length > 0)
                    get_tagList(function() {
                        getStuff()
                    })
                else
                    getStuff()
            }, 0)

            return false
        },
        loadEditor: function(ep) {
            if (!app.isOwner) {
                // app.loadBlog(undefined, -1)
                // return false
            }

            if ((typeof ep === "string" && parseInt(ep) >= 0) || ep >= 0) {
                ep = parseInt(ep)
            } else {
                ep = null
            }

            this.hide_app = true
            this.collapse_header = true
            this.hide_quote = true
            this.quote = ''
            this.quoteBy = ''
            this.hide_date = true
            this.date = ''
            this.hide_postlist = true

            setTimeout(function() {
                console.log("Loading editor..", ep)

                var get_tags = function(cb) {
                    console.log("getting tags", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM tag WHERE post_id = " + ep
                    ], (tagList) => {
                        if (typeof tagList[0] === "undefined") {
                            showError('This _post_ has _no tags_ yet!')
                        }
                        typeof cb === "function" && cb(tagList)
                    })
                }

                var get_post = function(cb) {
                    console.log("getting post", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM post WHERE post_id = " + ep
                    ], (post) => {
                        if (typeof post[0] === "undefined") {
                            showError('**This _post_ does _not_ exist**\n Creating a new')
                        }
                        typeof cb === "function" && cb(post[0])
                    })
                }

                var fin = function() {
                    app.hide_editor = false
                    ownLink(parseInt(ep) >= 0 ? ('?E:' + parseInt(ep)) : '?E:New')
                }

                if (parseInt(ep) >= 0) {
                    get_post(function(post) {
                        console.log(post)
                        if (!post) {
                            ep = null

                            app.editor_title = ''
                            app.editor_quote = ''
                            app.editor_quoteBy = ''
                            app.editor_newtag = ''
                            app.editor_tags = []
                            app.editor_body = ''

                            fin()

                            return false
                        }

                        get_tags(function(tags) {
                            app.editor_title = post.title
                            app.editor_quote = post.quote
                            app.editor_quoteBy = post.quoteBy
                            app.editor_body = post.body
                            app.editor_newtag = ''

                            console.log(tags)

                            app.editor_tags = []
                            for (var ti in tags) {
                                app.editor_tags.push(tags[ti].value)
                            }

                            fin()
                        })
                    })
                } else {
                    app.editor_title = ''
                    app.editor_quote = ''
                    app.editor_quoteBy = ''
                    app.editor_newtag = ''
                    app.editor_tags = []
                    app.editor_body = ''

                    fin()
                }
            }, 0)

            return false
        },
        editor: function() {
            return {
                save: function() {
                    console.log("Saving editor content")

                    var data_inner_path = "data/data.json"
                    var content_inner_path = "content.json"

                    page.cmd("fileGet", {
                        "inner_path": data_inner_path,
                        "required": false
                    }, (data) => {
                        if (data)
                            var data = JSON.parse(data)
                        else
                            var data = {}

                        if (!data.hasOwnProperty("author"))
                            data.author = "Author"
                        if (!data.hasOwnProperty("title"))
                            data.title = "A Blog"
                        if (!data.hasOwnProperty("description"))
                            data.description = "A nice-looking blog"
                        if (!data.hasOwnProperty("copyright"))
                            data.copyright = "The Author"
                        if (!data.hasOwnProperty("next_post_id"))
                            data.next_post_id = 1
                        if (!data.hasOwnProperty("modified"))
                            data.modified = 0
                        if (!data.hasOwnProperty("created"))
                            data.created = 0
                        if (!data.hasOwnProperty("footer"))
                            data.footer = [{
                                "title": "Content",
                                "new_tab": false,
                                "links": "[About](About),[Contact](Contact),[Projects](Projects)"
                            }, {
                                "title": "Follow me :)",
                                "new_tab": true,
                                "links": "[ZeroMe](/Me.ZeroNetwork.bit/?Profile/1oranGeS2xsKZ4jVsu9SVttzgkYXu4k9v/14K7EydgyeP84L1NKaAHBZTPQCev8BbqCy/),[GitHub](https://github.com/AnthyG)"
                            }]
                        if (!data.hasOwnProperty("page"))
                            data.page = [{
                                "title": "About",
                                "md": true,
                                "body": "This is my very own Blog!\n I don't quite know, what I can write about, but we will see, what will come x)"
                            }, {
                                "title": "Contact",
                                "md": true,
                                "body": "A list of ways, to get in touch with me:\n- [ZeroMe](/Me.ZeroNetwork.bit/?Profile/1oranGeS2xsKZ4jVsu9SVttzgkYXu4k9v/14K7EydgyeP84L1NKaAHBZTPQCev8BbqCy/)\n- [ZeroMail](/Mail.ZeroNetwork.bit/?to=glightstar@zeroid.bit)"
                            }, {
                                "title": "Projects",
                                "md": true,
                                "body": "Here are all the Projects I'm working on, each with a link to the Zite, and a link to the GitHub-Repository.\n- [ThunderWave](/thunderwave.bit) ([_GitHub_](https://github.com/AnthyG/ThunderWave))\n- [ThunderNote](/1PkvY7bXkmpns9h9b9spkjYpWu3eV6actD/) ([_GitHub_](https://github.com/AnthyG/ThunderNote))\n- [This Blog](/1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu) ([_GitHub_](https://github.com/AnthyG/R_MD_ZN_Blog))\n"
                            }]
                        if (!data.hasOwnProperty("post"))
                            data.post = [{
                                "post_id": 0,
                                "title": "Markdown-Guide",
                                "quote": "Words are string",
                                "quoteBy": "A guy",
                                "date_published": 0,
                                "body": "See the guide on \n> [Markdown-Here's Wiki-Page](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)"
                            }]
                        if (!data.hasOwnProperty("tag"))
                            data.tag = [{
                                "value": "Hello :)",
                                "post_id": 0
                            }]

                        var tpid = data.next_post_id

                        data.post.push({
                            "post_id": tpid,
                            "title": app.editor_title,
                            "quote": app.editor_quote,
                            "quoteBy": app.editor_quoteBy,
                            "date_published": parseInt(moment().utc().format('x')),
                            "body": app.editor_body
                        })

                        data.next_post_id = data.post.length

                        for (var tx = 0; tx < app.editor_tags.length; tx++) {
                            var ty = app.editor_tags[tx]
                            data.tag.push({
                                "value": ty,
                                "post_id": tpid
                            })
                        }

                        app.editor_title = 'Title'
                        app.editor_quote = ''
                        app.editor_quoteBy = ''
                        app.editor_newtag = ''
                        app.editor_tags = []
                        app.editor_body = ''

                        // Encode data array to utf8 json text
                        var json_raw = unescape(encodeURIComponent(JSON.stringify(data, undefined, '\t')))
                        var json_rawA = btoa(json_raw)

                        // Write file to disk
                        page.cmd("fileWrite", [
                            data_inner_path,
                            json_rawA
                        ], (res) => {
                            if (res == "ok") {
                                page.cmd("siteSign", {
                                    "inner_path": content_inner_path
                                }, (res) => {
                                    page.cmd("sitePublish", {
                                        "inner_path": content_inner_path,
                                        "sign": false
                                    }, function() {
                                        page.cmd("wrapperNotification", [
                                            "done", "Your post has been successfully published! :)"
                                        ])
                                    })
                                })
                            } else {
                                page.cmd("wrapperNotification", [
                                    "error", "File write error: " + JSON.stringify(res)
                                ])
                            }
                        })
                    })

                    return false
                },
                close: function() {
                    console.log("Closing editor")

                    // Go back, not load the post-list!!!!!!!
                    app.loadBlog(-1)

                    return false
                },
                empty: function() {
                    console.log("Emptying editor contents")

                    app.editor_title = 'Title'
                    app.editor_quote = ''
                    app.editor_quoteBy = ''
                    app.editor_newtag = ''
                    app.editor_tags = []
                    app.editor_body = ''

                    return false
                }
            }
        }
    }
})



var follow
class Page extends ZeroFrame {
    onRequest(cmd, message) {
        if (cmd == "setSiteInfo") {
            this.site_info = message.params
            this.setSiteInfo(message.params)
        } else
            this.log("Unknown incoming message:", cmd)
    }

    setSiteInfo(site_info) {
        // var dis = this
        // $("#out").html(
        //     "Page address: " + site_info.address +
        //     "<br>- Peers: " + site_info.peers +
        //     "<br>- Size: " + site_info.settings.size +
        //     "<br>- Modified: " + (new Date(site_info.content.modified * 1000))
        // )
    }

    onOpenWebsocket() {
        this.cmd("siteInfo", [], function(site_info) {
            page.site_info = site_info

            page.setSiteInfo(site_info)

            app.isOwner = page.site_info.settings.own

            page.cmd("serverInfo", [], (res) => {
                page.server_info = res
            })

            page.initFollowButton()
        })

        var qs,
            qs0 = getParameterByName('P'),
            qs1 = getParameterByName('S'),
            qs2 = getParameterByName('T'),
            qs3 = getParameterByName('E')
        var loadType = -1

        if ( /*app.isOwner && */ typeof qs3 === "string" && qs3 !== "") {
            loadType = 3
        } else if (parseInt(qs0) >= 0) {
            qs = parseInt(qs0)
            loadType = 0
        } else if (typeof qs1 === "string" && qs1 !== "") {
            qs = qs1
            loadType = 1
        } else if (typeof qs2 === "string" && qs2 !== "") {
            qs = qs2
            loadType = 2
        }

        console.log(qs, qs0, qs1, qs2, qs3, loadType)

        app.loadDefaults()

        if (loadType < 3) {
            app.loadBlog(qs, loadType)
        } else if (loadType === 3) {
            app.loadEditor(qs3)
        }

        app.loadFooter()
    }

    initFollowButton() {
        follow = new Follow($("#subscribe_btn"))
        follow.addFeed("Posts",
            "SELECT post_id AS event_uri, 'post' AS type, date_published AS date_added, title AS title, body AS body, '?P:' || post_id AS url FROM post",
            false
        )
        if (page.site_info.cert_user_id) {
            var username = page.site_info.cert_user_id.replace(/@.*/, "")
            follow.addFeed("Username mentions",
                "SELECT 'mention' AS type, date_added, post.title AS title, keyvalue.value || ': ' || comment.body AS body, " +
                "'?P:' || comment.post_id || '#Comments' AS url FROM comment LEFT JOIN json USING (json_id)" +
                "LEFT JOIN json AS json_content ON (json_content.directory = json.directory AND json_content.file_name='content.json')" +
                "LEFT JOIN keyvalue ON (keyvalue.json_id = json_content.json_id AND key = 'cert_user_id')" +
                "LEFT JOIN post ON (comment.post_id = post.post_id) WHERE" +
                "comment.body LIKE '%[" + username + "%' OR comment.body LIKE '%@" + username + "%'",
                false
            )
        }
        follow.addFeed("Comments",
            "SELECT 'comment' AS type, date_added, post.title AS title, keyvalue.value || ': ' || comment.body AS body," +
            "'?P:' || comment.post_id || '#Comments' AS url FROM comment LEFT JOIN json USING (json_id)" +
            "LEFT JOIN json AS json_content ON (json_content.directory = json.directory AND json_content.file_name='content.json')" +
            "LEFT JOIN keyvalue ON (keyvalue.json_id = json_content.json_id AND key = 'cert_user_id')" +
            "LEFT JOIN post ON (comment.post_id = post.post_id)",
            false
        )
        follow.init()
    }

    nMenu(el) {
        return new Menu(el)
    }
}
page = new Page()

function showError(msg) {
    page.cmd("wrapperNotification", [
        "error", msg
    ])
}



$(document).ready(function() {
    app.hide_app = false
    app.pPostList = app.postList

    $(window).scroll(function() {
        $('.hide.ah').each(function(i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()
            var bottom_of_window = $(window).scrollTop() + $(window).height()
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 500)
            }
        })
    })
})