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
        markPost: function(body) {
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
                    '<p class="hide ah">'
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
                    if (tL === 1) {
                        app.collapse_header = true
                        app.hide_quote = true
                        app.quote = ''
                        app.quoteBy = ''
                        app.hide_date = true
                        app.date = ''
                    } else if (tL === 0) {
                        app.singlePost = true

                        var post = app.postList[app.postList.length - 1 - qs]
                        app.pPostList = [post]

                        app.quote = post.quote
                        app.quoteBy = post.quoteBy
                        app.hide_quote = false
                            // app.date = moment(post.date_published, "x").format("MMMM Do, YYYY")
                        app.hide_date = false
                        app.collapse_header = false
                    } else if (tL === 2) {
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
                    } else {
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

                    ownLink(qs ? ('?' + (loadType === 0 ? 'P' : (loadType === 1 ? 'S' : (loadType === 2 ? 'T' : ''))) + ':' + qs) : '?')
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

                function getStuff() {
                    if (tL === 1) {
                        // Get sub-page
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

            page.cmd("serverInfo", [], (res) => {
                page.server_info = res
            })

            page.initFollowButton()
        })

        var qs,
            qs0 = getParameterByName('P'),
            qs1 = getParameterByName('S'),
            qs2 = getParameterByName('T')
        var loadType = 0

        if (parseInt(qs0) >= 0)
            qs = parseInt(qs0)
        else if (typeof qs1 === "string" && qs1 !== "") {
            qs = qs1
            loadType = 1
        } else if (typeof qs2 === "string" && qs2 !== "") {
            qs = qs2
            loadType = 2
        } else {
            loadType = -1
        }

        console.log(qs, qs0, qs1, qs2, loadType)

        app.loadDefaults()
        app.loadBlog(qs, loadType)
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