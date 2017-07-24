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

    return '<a href="?S:' + href + '" onclick="return loadBlog(\'' + href + '\', true);" ' + (title ? ('title="' + title + '"') : '') + '>' + text + '</a>'
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
        pageList: [],
        footerList: [],
        defaults: {
            copyright: ''
        }
    }
})



var pages = {
    "About": function() {

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

function loadBlog(qs, is_subpage, reload) {
    var reload = reload || false
    var is_subpage = is_subpage || false

    app.hide_app = true
    app.collapse_header = true
    app.hide_quote = true
    app.quote = ''
    app.quoteBy = ''
    app.hide_date = true
    app.date = ''
    app.main = ''

    setTimeout(function() {
        console.log("Loading blog.. ", qs, is_subpage)

        if (typeof qs === "string" && qs !== "" && is_subpage) {
            var genIt = function(page) {
                console.log(page)

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
        } else if (typeof qs === "number" && qs >= 0) {
            var genIt = function(post) {
                // console.log(post)

                var body = post.body

                body = '<div class="container"><h1 class="title">' + post.title + '</h1>' +
                    '<div class="byline"><div class="avatar"></div>by <span>AnthyG</span></div>' +
                    body

                var firstreplace = true
                body = body
                    .replace(
                        /<SEC>([^.]*?)?(?=<\/SEC>)(?:<\/SEC>)?/gmi,
                        function(m, c) {
                            var str = marked(c) + '</div></section><section>'
                            if (firstreplace) {
                                firstreplace = false
                            } else {
                                str = '</section><section><div class="container">' + str
                            }

                            return str
                        }
                    )
                    .replace(
                        /<QUOTE>([^.]*?)?(?=<\/QUOTE>)(?:<\/QUOTE>)?/gmi,
                        function(m, c) {
                            var str = '</section><section class="quote"><blockquote>' + c + '</blockquote></section><section>'

                            return str
                        }
                    )
                    .replace(
                        /<P>([^.]*?)?(?=<\/P>)(?:<\/P>)?/gmi,
                        '<p class="hide ah">$1</p>'
                    )
                    .replace(
                        /(<section> <\/section>|<section class="quote"><blockquote><\/blockquote><\/section>)/gmi,
                        ''
                    )

                // body = body.substr('</section><section><div class="container">'.length, body.length)
                body = body.substr(0, body.length - '<section>'.length)

                ownLink("?P:" + qs)
                app.quote = post.quote
                app.quoteBy = post.quoteBy
                app.hide_quote = false
                app.date = moment(post.date_published, "x").format("MMMM Do, YYYY")
                app.hide_date = false
                app.collapse_header = false
                app.main = default_main1 + body + default_main2
            }

            // console.log(typeof app.postList[qs])
            if (app.postList.length > 0 && typeof app.postList[qs] !== "undefined" && !reload)
                genIt(app.postList[qs])
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
        } else {
            var genIt = function(postList) {
                // console.log(postList)

                var pLHTML = ''
                for (var i = 0; i < postList.length; i++) {
                    var post = postList[i]

                    var body = post.body

                    body = marked(body
                        .match(/<SEC>([^.]*?)?(?=<\/SEC>)(?:<\/SEC>)?/gmi)[0]
                        .replace(/<SEC>|<\/SEC>|#/gmi, '') + ' **[...]**'
                    )

                    console.log(body)

                    pLHTML += (i !== 0 ? '<section class="preview">' : '') +
                        '<div class="container"><h2><a class="first after" href="?P:' + post.post_id + '" onclick="return loadBlog(' + post.post_id + ');">' + post.title + '</a></h2><h5>' +
                        moment(post.date_published, "x").format("MMMM Do, YYYY") + '</h5>' +
                        body + '<a class="first before after" href="?P:' + post.post_id + '" onclick="return loadBlog(' + post.post_id + ');"><b>Read more</b></a></div>' + (i !== 0 ? '</section>' : '')

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
            }

            if (app.postList.length > 0 && !reload)
                genIt(app.postList)
            else
                page.cmd("dbQuery", [
                    "SELECT * FROM post"
                ], (postList) => {
                    app.postList = postList
                    genIt(postList)
                })
        }
    }, 1)

    return false
}



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
            this.site_info = site_info
            page.setSiteInfo(site_info)
        })

        loadDefaults()

        var qs = getParameterByName('P') || getParameterByName('S')
        var is_subpage = false

        if (parseInt(qs) >= 0)
            qs = parseInt(qs)
        else if (typeof qs === "string" && qs !== "")
            is_subpage = true
        else
            qs = undefined

        loadBlog(qs, is_subpage)
        loadFooter()
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