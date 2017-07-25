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

    return '<a href="?S:' + href + '" onclick="return loadBlog(\'' + href + '\', 1);" ' + (title ? ('title="' + title + '"') : '') + '>' + text + '</a>'
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



var default_date = 'Created July 23, 2017'
var default_main1 = '<section class="preview"><div class="scroll"><i class="material-icons">arrow_downward</i></div>',
    default_main2 = '</section>'

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
        main: '',
        footer: '',
        postList: [],
        tagList: [],
        tagPostList: {},
        pageList: [],
        footerList: [],
        defaults: {
            copyright: ''
        }
    }
})



var pages = {
    "About": function() {
        console.log("Loading About-page")
    }
}



function checkEditor() {
    if (page.site_info.settings.own)
        loadOwner()
    return page.site_info.settings.own
}

function loadOwner() {

}



function showError(msg) {
    ownLink("")
    app.quote = "You can't get everything"
    app.quoteBy = "somebody"
    app.hide_quote = false
    app.hide_date = true
    app.date = ""
    app.collapse_header = false
    app.main = default_main1 + '<div class="container hide ah">' +
        marked("# _ERROR_ \n " + msg) +
        '</div>' + default_main2
}

function loadDefaults(reload) {
    var reload = reload || false
    console.log("Loading defaults..", reload)

    var genIt = function(defaults) {
        console.log(defaults)

        for (var x in defaults) {
            var y = defaults[x]

            eval("app.defaults." + x + " = \"" + y + "\"")
        }
        // app.defaults.copyright = marked(defaults.copyright).replace(/<p>|<\/p>/gm, '')
    }

    if (app.defaults && JSON.stringify(app.defaults).length > '{"copyright":""}'.length && !reload)
        genIt(app.defaults)
    else
        page.cmd("dbQuery", [
            "SELECT key, value FROM json LEFT JOIN keyvalue USING (json_id) WHERE directory = '' AND file_name = 'data.json'"
        ], (defaults) => {
            var defaultsO = {}
            for (var x in defaults) {
                var y = defaults[x]
                eval("defaultsO['" + y.key + "'] = marked(\"" + y.value + "\").replace(/<p>|<\\\/p>|\\n/gm, '')")
            }
            app.defaults = defaultsO
            genIt(defaultsO)
        })
}

function loadFooter(reload) {
    var reload = reload || false
    console.log("Loading footer..", reload)

    var genIt = function(footerList) {
        var fLHTML = ''
        for (var i = 0; i < footerList.length; i++) {
            var fPart = footerList[i]

            var links = fPart.links.split(',').join('\n- ')

            var opts = {
                renderer: markedR2
            }
            if (fPart.new_tab)
                opts = {
                    renderer: markedR
                }
            fLHTML += marked('- ### ' + fPart.title + '\n' + links, opts)
        }
        app.footer = fLHTML
    }

    if (app.footerList.length > 0 && !reload)
        genIt(app.footerList)
    else
        page.cmd("dbQuery", [
            "SELECT * FROM footer"
        ], (footerList) => {
            app.footerList = footerList
            genIt(footerList)
        })
}

var loadPostTags = function(i, uh, reload) {
    console.log("Loading tags for post", i, uh, !reload,
        app.tagList.length > 0, typeof app.tagList[i] !== "undefined",
        app.tagList[i], JSON.parse(JSON.stringify(app.tagList)))

    var genIt = function(tagList, CF) {
        console.log("gen", tagList, CF)

        var tLHTML = '<ul class="tags"><li class="tag">Tags</li>'
        for (var x = 0; x < tagList.length; x++) {
            var y = tagList[x]
            tLHTML += '<li><a href="?T:' + y.value + '" onclick="return loadBlog(\'' + y.value + '\', 2);">' + y.value + '</a></li>'
        }
        tLHTML += '</ul>'

        var n_el = $(tLHTML)

        $tr = $('#TAGREPLACE_' + uh)
        console.log($tr, n_el)
        $tr.replaceWith(n_el)
    }

    if (app.tagList.length > 0 && typeof app.tagList[i] !== "undefined" && !reload)
        genIt(app.tagList[i], 0)
    else
        page.cmd("dbQuery", [
            "SELECT * FROM tag WHERE post_id = " + i
        ], (tagList) => {
            app.tagList[i] = tagList
            genIt(tagList, 1)
        })
}

function loadBlog(qs, loadType, reload) {
    var reload = reload || false
    console.log("LOADTYPE", loadType)
    var loadType = (loadType >= 0 ? loadType : -1)

    app.hide_app = true
    app.collapse_header = true
    app.hide_quote = true
    app.quote = ''
    app.quoteBy = ''
    app.hide_date = true
    app.date = ''
    app.main = ''

    setTimeout(function() {
        console.log("Loading blog.. ", loadType, typeof qs, qs, !reload)

        if (loadType === 1 && typeof qs === "string" && qs !== "") {
            var genIt = function(page) {
                // console.log(page)

                var body = marked(page.body, {
                    renderer: markedR
                })

                ownLink("?S:" + qs)
                app.collapse_header = true
                app.hide_quote = true
                app.quote = ''
                app.quoteBy = ''
                app.hide_date = true
                app.date = ''
                app.main = default_main1 + '<div class="container"><h1 class="title">' +
                    page.title + '</h1>' + body + '</div>' + default_main2
            }

            if (app.pageList.length > 0 && typeof app.pageList[qs] !== "undefined" && !reload)
                genIt(app.pageList[qs])
            else
                page.cmd("dbQuery", [
                    "SELECT * FROM page WHERE title = '" + qs + "'"
                ], (page) => {
                    // console.log(page)
                    if (page && typeof page[0] !== "undefined") {
                        page = page[0]
                        app.pageList[qs] = page
                        genIt(page)
                    } else {
                        showError('**This _page_ does _not_ exist**')
                    }
                })
        } else if (loadType === 0 && typeof qs === "number" && qs >= 0) {
            var genIt = function(post) {
                // console.log(post)

                var bodyMD = post.body
                var body = ''

                bodyMD = (marked(bodyMD)
                        .replace(
                            /<blockquote>\n<p>([^.]*?)?(?=<\/p>\n<\/blockquote>)(?:<\/p>\n<\/blockquote>)?/gmi,
                            function(m, c) {
                                var str = '</div></section><section class="quote"><blockquote>' + c + '</blockquote></section><section><div class="container">'

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

                var uh = Math.random().toString(36).substring(7);

                body = '<div class="container"><h1 class="title">' + post.title + '</h1>' +
                    '<div class="byline"><div class="avatar"></div>by <span>AnthyG</span></div>' +
                    '<div id="TAGREPLACE_' + uh + '"></div>' + bodyMD

                // body = body.substr('</section><section><div class="container">'.length, body.length)
                body = body /*.substr(0, body.length - '<section>'.length)*/ + '</div>'

                ownLink("?P:" + qs)

                app.quote = post.quote
                app.quoteBy = post.quoteBy
                app.hide_quote = false
                app.date = moment(post.date_published, "x").format("MMMM Do, YYYY")
                app.hide_date = false
                app.collapse_header = false
                app.main = default_main1 + body + default_main2

                console.log(post.post_id, uh)
                loadPostTags(post.post_id, uh, reload)
            }

            // console.log(typeof app.postList[qs])
            if (app.postList.length > 0 && typeof app.postList[app.postList.length - 1 - qs] !== "undefined" && !reload)
                genIt(app.postList[app.postList.length - 1 - qs])
            else
                page.cmd("dbQuery", [
                    "SELECT * FROM post WHERE post_id = " + qs
                ], (post) => {
                    // console.log("fetched post", post)
                    if (post && typeof post[0] !== "undefined") {
                        post = post[0]
                        app.postList[qs] = post
                        genIt(post)
                    } else {
                        showError('**This _post_ does _not_ exist**')
                    }
                })
        } else if (loadType === 2 && typeof qs === "string" && qs !== "") {
            var genIt = function(tagPostList) {
                console.log(tagPostList)

                var pLHTML = ''
                var loadPostTagsList = {}
                for (var i = 0; i < tagPostList.length; i++) {
                    var post = tagPostList[i]

                    var body = post.body

                    body = (marked(body)
                            .replace(
                                /<blockquote>\n<p>([^.]*?)?(?=<\/p>\n<\/blockquote>)(?:<\/p>\n<\/blockquote>)?/gmi,
                                function(m, c) {
                                    var str = '</div></section><section class="quote"><blockquote>' + c + '</blockquote></section><section><div class="container">'

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

                    var uh = Math.random().toString(36).substring(7)
                    loadPostTagsList[post.post_id] = uh
                    console.log(post.post_id, loadPostTagsList[post.post_id], uh)

                    pLHTML += (i > 0 ? '<hr><section>' : '') + // class="preview"
                        '<div class="container"><h2><a class="first after" href="?P:' + post.post_id + '" onclick="return loadBlog(' + post.post_id + ', 0);">' + post.title + '</a></h2><h5>' +
                        moment(post.date_published, "x").format("MMMM Do, YYYY") + '</h5>' +
                        '<div id="TAGREPLACE_' + uh + '"></div>' +
                        body +
                        // '<a class="first before after" href="?P:' + post.post_id + '" onclick="return loadBlog(' + post.post_id + ', 0);"><b>Read more</b></a>' +
                        '</div>' + (i >= 0 ? '</section>' : '')
                }

                ownLink("?T:" + qs)

                app.quote = qs
                app.quoteBy = 'A Tag'
                app.hide_quote = false
                app.hide_date = true
                app.date = ''
                app.collapse_header = false
                app.main = default_main1 + pLHTML + default_main2

                console.log(loadPostTagsList)
                for (var i in loadPostTagsList) {
                    loadPostTags(i, loadPostTagsList[i], reload)
                }
            }

            if (app.tagPostList.hasOwnProperty(qs) && !reload)
                genIt(app.tagPostList[qs])
            else
                page.cmd("dbQuery", [
                    "SELECT * FROM post LEFT JOIN tag USING (post_id) WHERE value = '" + qs + "' ORDER BY date_published DESC"
                ], (tagPostList) => {
                    app.tagPostList[qs] = tagPostList
                    genIt(tagPostList)
                })
        } else {
            var genIt = function(postList) {
                console.log(postList)

                var pLHTML = ''
                var loadPostTagsList = {}
                for (var i = 0; i < postList.length; i++) {
                    var post = postList[i]

                    var body = post.body

                    body = (marked(body
                                // .match(/<SEC>([^.]*?)?(?=<\/SEC>)(?:<\/SEC>)?/gmi)[0]
                                // .replace(/<SEC>|<\/SEC>|#/gmi, '') + ' **[...]**'
                            )
                            .replace(
                                /<blockquote>\n<p>([^.]*?)?(?=<\/p>\n<\/blockquote>)(?:<\/p>\n<\/blockquote>)?/gmi,
                                function(m, c) {
                                    var str = '</div></section><section class="quote"><blockquote>' + c + '</blockquote></section><section><div class="container">'

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

                    var uh = Math.random().toString(36).substring(7);
                    loadPostTagsList[post.post_id] = uh
                    console.log(post.post_id, loadPostTagsList[post.post_id], uh)

                    pLHTML += (i > 0 ? '<hr><section>' : '') + // class="preview"
                        '<div class="container"><h2><a class="first after" href="?P:' + post.post_id + '" onclick="return loadBlog(' + post.post_id + ', 0);">' + post.title + '</a></h2><h5>' +
                        moment(post.date_published, "x").format("MMMM Do, YYYY") + '</h5>' +
                        '<div id="TAGREPLACE_' + uh + '"></div>' +
                        body +
                        // '<a class="first before after" href="?P:' + post.post_id + '" onclick="return loadBlog(' + post.post_id + ', 0);"><b>Read more</b></a>' +
                        '</div>' + (i >= 0 ? '</section>' : '')

                    // pLHTML += '<section>' + marked(body, {
                    //     renderer: markedR
                    // }) + '</section>'
                }

                ownLink("")

                app.quote = app.defaults.description
                app.quoteBy = app.defaults.author
                app.hide_quote = false
                app.date = default_date
                app.hide_date = false
                app.collapse_header = false
                app.main = default_main1 + pLHTML + default_main2

                console.log(loadPostTagsList)
                for (var i in loadPostTagsList) {
                    loadPostTags(i, loadPostTagsList[i], reload)
                }
            }

            // console.log(app.postList.length > 0, !reload)
            if (app.postList.length > 0 && !reload)
                genIt(app.postList)
            else
                page.cmd("dbQuery", [
                    "SELECT * FROM post ORDER BY date_published DESC"
                ], (postList) => {
                    app.postList = postList
                    genIt(postList)
                })
        }
    }, 1)

    return false
}



var follow;
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

        loadDefaults()

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

        loadBlog(qs, loadType)
        loadFooter()
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
}
page = new Page()



$(document).ready(function() {
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