(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{230:function(a,s,t){"use strict";t.r(s);var n=t(2),p=Object(n.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"dns查询优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns查询优化","aria-hidden":"true"}},[a._v("#")]),a._v(" DNS查询优化")]),a._v(" "),t("p",[t("span",[a._v("在与服务主机建立连接之前，需要先解析域名。")])]),t("ul",[t("li",[t("span",[a._v("限制不同域名的数量")])]),t("li",[t("span",[a._v("保证低限度的解析延迟")])]),t("li",[t("span",[a._v("在主体页面 ")]),t("span",[a._v("HTML ")]),t("span",[a._v("或响应中利用 ")]),t("span",[a._v("DNS ")]),t("span",[a._v("预取指令")]),t("span",[a._v('">'),t("a",{staticClass:"header-anchor",attrs:{href:"#优化tcp连接","aria-hidden":"true"}},[a._v("#")]),a._v(" 优化TCP连接"),a._v(" "),t("p",[t("span",[a._v("开启新连接是一个耗时的过程。如果连接使用 ")]),t("span",[a._v("TLS")]),t("span",[a._v("（也确实应该这么做），开销会更高。降低这种开销的方法如下。")])]),t("ul",[t("li",[t("span",[a._v("利用 ")]),t("span",[a._v("preconnect ")]),t("span",[a._v("指令")]),t("span",[t("link",{attrs:{rel:"preconnect",href:"//fonts.example.com",crossorigin:""}})])]),t("li",[t("span",[a._v("尽早终止并响应")])]),t("li",[t("span",[a._v("实施最新的 ")]),t("span",[a._v("TLS ")]),t("span",[a._v("最佳实践 ")]),t("span",[a._v("6 ")]),t("span",[a._v("来优化 ")]),t("span",[a._v("HTTPS")])])]),a._v(" "),t("h2",{attrs:{id:"避免重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免重定向","aria-hidden":"true"}},[a._v("#")]),a._v(" 避免重定向")]),a._v(" "),t("p",[t("span",[a._v("重定向通常触发与额外域名建立连接。")])]),t("ul",[t("li",[t("span",[a._v("利用 ")]),t("span",[a._v("CDN ")]),t("span",[a._v("代替客户端在云端实现重定向")])]),t("li",[t("span",[a._v("如果是同一域名的重定向，使用 ")]),t("span",[a._v("Web ")]),t("span",[a._v("服务器上的 ")]),t("span",[a._v("rewrite ")]),t("span",[a._v("规则，避免重定向")])])]),a._v(" "),t("h2",{attrs:{id:"客户端缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 客户端缓存")]),a._v(" "),t("p",[t("span",[a._v("没有什么比直接从本地缓存获取资源来得更快，因为它根本就不需要建立网络连接。")])]),t("ul",[t("li",[t("span",[a._v("所谓的纯静态内容，例如图片或带版本的数据，可以在客户端永久缓存")])]),t("li",[t("span",[a._v("CSS/JS ")]),t("span",[a._v("和个性化资源，缓存时间大约是会话（交互）平均时间的两倍")])]),t("li",[t("span",[a._v("其他类型的资源，理想的 ")]),t("span",[a._v("TTL ")]),t("span",[a._v("值会各有不同；这取决于你对特定资源能够容忍的旧数据的极限。所以，你必须结合自身需求来判断最佳值。")])])]),a._v(" "),t("h2",{attrs:{id:"网络边缘的缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络边缘的缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 网络边缘的缓存")]),a._v(" "),t("p",[t("span",[a._v("因为所有用户都能从云端的共享缓存受益，所以网络边缘的缓存提供了更快的访问速度，也为网站服务基础设施分担了很大一部分流量。")]),t("span",[a._v("如果一份资源需要缓存，它必须满足：")])]),t("ul",[t("li",[t("span",[a._v("在多用户间可共享，并且")])]),t("li",[t("span",[a._v("能够接受一定程度的旧数据")])])]),a._v(" "),t("h2",{attrs:{id:"条件缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条件缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 条件缓存")]),a._v(" "),t("p",[t("span",[a._v("如果缓存 ")]),t("span",[a._v("TTL ")]),t("span",[a._v("过期，客户端会向服务器发起请求。")])]),t("ul",[t("li",[t("span",{staticStyle:{"background-color":"transparent"}},[a._v("在请求中包含 ")]),t("span",{staticStyle:{"background-color":"transparent"}},[a._v("HTTP ")]),t("span",{staticStyle:{"background-color":"transparent"}},[a._v("首部 ")]),t("span",{staticStyle:{"background-color":"transparent"}},[a._v("Last-Modified-Since")]),t("span",{staticStyle:{"background-color":"transparent"}},[a._v("。")]),t("span",{staticStyle:{"background-color":"transparent"}},[a._v("仅当最新内容在首部中指定的日期之后被更新过，服务器才返回完整内容；否则只返回 ")]),t("span",{staticStyle:{"background-color":"transparent"}},[a._v("304 ")]),t("span",{staticStyle:{"background-color":"transparent"}},[a._v("响应码，并在响应首部中附带上新的时间戳 ")]),t("span",{staticStyle:{"background-color":"transparent"}},[a._v("Date 字段。")]),t("br")]),t("li",[t("span",[a._v("在请求体中包含实体校验码，或者叫 ")]),t("span",[a._v("ETag")]),t("span",[a._v("； 它唯一标识所请求的资源。 ")]),t("span",[a._v("ETag ")]),t("span",[a._v("由服务器提供，内嵌于资源的响应首部中。服务器会比较当前 ")]),t("span",[a._v("ETag ")]),t("span",[a._v("与请求首部中收到的 ")]),t("span",[a._v("ETag")]),t("span",[a._v("，如果一致，就只返回 ")]),t("span",[a._v("304 ")]),t("span",[a._v("响应码；否则返回完整内")]),t("span",[a._v("容。")])])]),a._v(" "),t("h2",{attrs:{id:"压缩和代码极简化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩和代码极简化","aria-hidden":"true"}},[a._v("#")]),a._v(" 压缩和代码极简化")]),a._v(" "),t("p",[t("span",[a._v("所有的文本内容（ ")]),t("span",[a._v("HTML")]),t("span",[a._v("、 ")]),t("span",[a._v("JS")]),t("span",[a._v("、 ")]),t("span",[a._v("CSS")]),t("span",[a._v("、 ")]),t("span",[a._v("SVG")]),t("span",[a._v("、 ")]),t("span",[a._v("XML")]),t("span",[a._v("、 ")]),t("span",[a._v("JSON")]),t("span",[a._v("、字体等），可以从压缩和极简化中受益。")]),t("span",[a._v("极简化（ ")]),t("span",[a._v("minification")]),t("span",[a._v("）是指从文本资源中剥离所有非核心内容的过程。")]),t("span",[a._v("通常，这些内容是开发人员敲出来的，所以要考虑方便人类阅读和维护。尽管如此，浏览器并不关心可读性，放弃")]),t("span",[a._v("代码可读性")]),t("span",[a._v("反而能节省空间。")])]),t("p",[a._v("极简化之前：")]),a._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- Change the title as you see fit --\x3e")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("My first Web page"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- Put your message of the day here --\x3e")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Hello, World!"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n\n")])])]),t("p",[a._v("极简化之后：")]),a._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("My first web page"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Hello, World!"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" \n")])])]),t("h2",{attrs:{id:"避免阻塞css-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免阻塞css-js","aria-hidden":"true"}},[a._v("#")]),a._v(" 避免阻塞CSS/JS")]),a._v(" "),t("p",[t("span",[a._v("CSS ")]),t("span",[a._v("的作用是告诉浏览器以什么方式在可视区域的哪个部分渲染内容。")]),t("span",[a._v("所以，在屏幕上绘制第一个像素之前，浏览器必须确保 ")]),t("span",[a._v("CSS ")]),t("span",[a._v("已经下载完整。")])]),t("p",[t("span",[a._v("默认情况下，如果在 ")]),t("span",[a._v("HTML ")]),t("span",[a._v("中定位了 ")]),t("span",[a._v("JS")]),t("span",[a._v("，它就会被请求、解析，然后执行。在浏览器处理完这个 ")]),t("span",[a._v("JS ")]),t("span",[a._v("之前，会阻止其后任何资源的下载渲染。")])]),t("ul",[t("li",[t("span",[a._v("定期校验这些资源的使用情况。随着时间的变迁， ")]),t("span",[a._v("Web ")]),t("span",[a._v("页面可能会持续下载一些不再需要的 ")]),t("span",[a._v("JS")]),t("span",[a._v("；这时候，最快速有效的解决办法就是去掉它。")])]),t("li",[t("span",[a._v("如果 ")]),t("span",[a._v("JS ")]),t("span",[a._v("执行顺序无关紧要，并且必须在 ")]),t("span",[a._v("onload ")]),t("span",[a._v("事件触发之前运行，那么可以设置")]),t("span",[a._v("async ")]),t("span",[a._v("属性 ")]),t("span",[a._v("7")]),t("span",[a._v("，像这样：")]),t("span",[t("script",{attrs:{async:"",src:"/js/myfile.js"}})])])])])])])])},[],!1,null,null,null);s.default=p.exports}}]);