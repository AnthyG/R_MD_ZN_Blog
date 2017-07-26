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
            author: "AnthyG",
            copyright: "AnthyG _aka_ Glightstar",
            created: 1500760800000,
            description: "My very own Blog, to blog bloggy stuff",
            modified: 0,
            next_post_id: 3,
            title: "Glightstar’s Blog"
        },
        singlePost: false,
        footer: [{
            "title": "Content",
            "new_tab": false,
            "links": "[About](About),[Contact](Contact),[Projects](Projects)"
        }, {
            "title": "Follow me :)",
            "new_tab": true,
            "links": "[ZeroMe](/Me.ZeroNetwork.bit/?Profile/1oranGeS2xsKZ4jVsu9SVttzgkYXu4k9v/14K7EydgyeP84L1NKaAHBZTPQCev8BbqCy/),[GitHub](https://github.com/AnthyG)"
        }],
        postList: [{
            "post_id": 2,
            "title": "Markdown-Guide",
            "quote": "Words are string",
            "quoteBy": "A guy",
            "date_published": 1500906320468,
            "body": "This guide is from [Markdown-Here's Wiki-Page](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)\n\n\n```\n# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\nAlternatively, for H1 and H2, an underline-ish style:\n\nAlt-H1\n======\n\nAlt-H2\n------\n```\n\n# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\nAlternatively, for H1 and H2, an underline-ish style:\n\nAlt-H1\n======\n\nAlt-H2\n------\n\n\n\n```\nEmphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\nCombined emphasis with **asterisks and _underscores_**.\n\nStrikethrough uses two tildes. ~~Scratch this.~~\n```\n\nEmphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\nCombined emphasis with **asterisks and _underscores_**.\n\nStrikethrough uses two tildes. ~~Scratch this.~~\n\n\n\n```\n1. First ordered list item\n2. Another item\n⋅⋅* Unordered sub-list. \n1. Actual numbers don't matter, just that it's a number\n⋅⋅1. Ordered sub-list\n4. And another item.\n\n⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n\n⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅\n⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅\n⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n```\n\n1. First ordered list item\n2. Another item\n⋅⋅* Unordered sub-list. \n1. Actual numbers don't matter, just that it's a number\n⋅⋅1. Ordered sub-list\n4. And another item.\n\n⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n\n⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅\n⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅\n⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n\n\n\n```\n[I'm an inline-style link](https://www.google.com)\n\n[I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")\n\n[I'm a reference-style link][Arbitrary case-insensitive reference text]\n\n[I'm a relative reference to a repository file](../blob/master/LICENSE)\n\n[You can use numbers for reference-style link definitions][1]\n\nOr leave it empty and use the [link text itself].\n\nURLs and URLs in angle brackets will automatically get turned into links. \nhttp://www.example.com or <http://www.example.com> and sometimes \nexample.com (but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n\n[arbitrary case-insensitive reference text]: https://www.mozilla.org\n[1]: http://slashdot.org\n[link text itself]: http://www.reddit.com\n```\n\n[I'm an inline-style link](https://www.google.com)\n\n[I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")\n\n[I'm a reference-style link][Arbitrary case-insensitive reference text]\n\n[I'm a relative reference to a repository file](../blob/master/LICENSE)\n\n[You can use numbers for reference-style link definitions][1]\n\nOr leave it empty and use the [link text itself].\n\nURLs and URLs in angle brackets will automatically get turned into links. \nhttp://www.example.com or <http://www.example.com> and sometimes \nexample.com (but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n\n[arbitrary case-insensitive reference text]: https://www.mozilla.org\n[1]: http://slashdot.org\n[link text itself]: http://www.reddit.com\n\n\n\n```\nHere's our logo (hover to see the title text):\n\nInline-style: \n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")\n\nReference-style: \n![alt text][logo]\n\n[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 2\"\n```\n\nHere's our logo (hover to see the title text):\n\nInline-style: \n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")\n\nReference-style: \n![alt text][logo]\n\n[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 2\"\n\n\n\n```\nInline `code` has `back-ticks around` it.\n\n```javascript\nvar s = \"JavaScript syntax highlighting\";\nalert(s);\n```\n \n```python\ns = \"Python syntax highlighting\"\nprint s\n```\n \n```\nNo language indicated, so no syntax highlighting. \nBut let's throw in a <b>tag</b>.\n```\n```\n\nInline `code` has `back-ticks around` it.\n\n```javascript\nvar s = \"JavaScript syntax highlighting\";\nalert(s);\n```\n \n```python\ns = \"Python syntax highlighting\"\nprint s\n```\n \n```\nNo language indicated, so no syntax highlighting. \nBut let's throw in a <b>tag</b>.\n```\n\n\n\n```\nColons can be used to align columns.\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n\nThere must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don't need to make the \nraw Markdown line up prettily. You can also use inline Markdown.\n\nMarkdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3\n```\n\nColons can be used to align columns.\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n\nThere must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don't need to make the \nraw Markdown line up prettily. You can also use inline Markdown.\n\nMarkdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3\n\n\n\n```\n> Blockquotes are very handy in email to emulate reply text.\n> This line is part of the same quote.\n\nQuote break.\n\n> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote\n```\n\n> Blockquotes are very handy in email to emulate reply text.\n> This line is part of the same quote.\n\nQuote break.\n\n> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote\n\n\n\n```\n<dl>\n  <dt>Definition list</dt>\n  <dd>Is something people use sometimes.</dd>\n\n  <dt>Markdown in HTML</dt>\n  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>\n</dl>\n```\n\n<dl>\n  <dt>Definition list</dt>\n  <dd>Is something people use sometimes.</dd>\n\n  <dt>Markdown in HTML</dt>\n  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>\n</dl>\n\n\n\n```\nThree or more...\n\n---\n\nHyphens\n\n***\n\nAsterisks\n\n___\n\nUnderscores\n```\n\nThree or more...\n\n---\n\nHyphens\n\n***\n\nAsterisks\n\n___\n\nUnderscores\n\n\n\n```\nHere's a line for us to start with.\n\nThis line is separated from the one above by two newlines, so it will be a *separate paragraph*.\n\nThis line is also a separate paragraph, but...\nThis line is only separated by a single newline, so it's a separate line in the *same paragraph*.\n```\n\nHere's a line for us to start with.\n\nThis line is separated from the one above by two newlines, so it will be a *separate paragraph*.\n\nThis line is also a separate paragraph, but...\nThis line is only separated by a single newline, so it's a separate line in the *same paragraph*."
        }, {
            "post_id": 1,
            "title": "Testin some stuff",
            "quote": "A quote",
            "quoteBy": "I dunno",
            "date_published": 1500906320468,
            "body": "Hello :)"
        }, {
            "post_id": 0,
            "title": "Yay :D",
            "quote": "da peece! ;)",
            "quoteBy": "AnthyG",
            "date_published": 1500831891906,
            "body": "# Yeah, look at my shiny new ZeroBlog on the ZeroNet!\n### I mean, isn't this Blog a beauty?!\n> And checkout this cool quote!! :D \n\nIt \"even\" supports Markdown!!\n_**NOICE**_ :)\n`BLABLABLA`"
        }],
        pPostList: [],
        tagList: [{
            json_id: 1,
            post_id: 0,
            value: "Hello :)"
        }, {
            json_id: 1,
            post_id: 0,
            value: "1. Day"
        }, {
            json_id: 1,
            post_id: 1,
            value: "1. Day"
        }, {
            json_id: 1,
            post_id: 1,
            value: "Idunno"
        }]
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
        loadBlog: function(qs, loadType) {
            this.hide_app = true
            this.collapse_header = true
            this.hide_quote = true
            this.quote = ''
            this.quoteBy = ''
            this.hide_date = true
            this.date = ''

            setTimeout(function() {
                console.log("Loading blog..", qs, loadType)
                if (loadType === 1 && typeof qs === "string" && qs !== "") {
                    app.collapse_header = true
                    app.hide_quote = true
                    app.quote = ''
                    app.quoteBy = ''
                    app.hide_date = true
                    app.date = ''
                } else if (loadType === 0 && typeof qs === "number" && qs >= -1) {
                    app.singlePost = true

                    var post = app.postList[app.postList.length - 1 - qs]
                    app.pPostList = [post]

                    app.quote = post.quote
                    app.quoteBy = post.quoteBy
                    app.hide_quote = false
                    app.date = moment(post.date_published, "x").format("MMMM Do, YYYY")
                    app.hide_date = false
                    app.collapse_header = false
                } else if (loadType === 2 && typeof qs === "string" && qs !== "") {
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
                    app.date = "Created " + moment(app.defaults.created, "x").format("MMMM Do, YYYY")
                    app.hide_date = false
                    app.collapse_header = false
                }

                ownLink(qs ? ('?' + (loadType === 0 ? 'P' : (loadType === 1 ? 'S' : (loadType === 2 ? 'T' : ''))) + ':' + qs) : '?')
            }, 0)

            return false
        }
    }
})


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

        app.loadBlog(qs, loadType)
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