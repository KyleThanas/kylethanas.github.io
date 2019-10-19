(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{229:function(a,s,t){"use strict";t.r(s);var n=t(0),v=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"web响应-关键性能指标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web响应-关键性能指标"}},[a._v("#")]),a._v(" Web响应--关键性能指标")]),a._v(" "),t("h2",{attrs:{id:"web-页面加载关键性能指标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-页面加载关键性能指标"}},[a._v("#")]),a._v(" Web 页面加载关键性能指标")]),a._v(" "),t("ul",[t("li",[t("span",[a._v("延迟")])]),t("li",[t("span",[a._v("带宽")])]),t("li",[a._v("DNS查询")]),t("li",[a._v("建立链接时间")]),t("li",[a._v("TLS协商时间")]),t("li",[a._v("首字节时间（TTFB）")]),t("li",[a._v("内容下载时间")]),t("li",[a._v("开始渲染时间")]),t("li",[a._v("文档加载完成时间（页面加载时间）")])]),a._v(" "),t("h4",{attrs:{id:"延迟"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#延迟"}},[a._v("#")]),a._v(" 延迟")]),a._v(" "),t("p",[t("strong",[t("span",[a._v("延迟是指 ")])]),t("strong",[t("span",[a._v("IP ")])]),t("strong",[t("span",[a._v("数据包从一个网络端点到另一个网络端点所花费的时间。")])]),t("span",{staticStyle:{"background-color":"transparent"}},[a._v("与之相关的是往返时延（ ")]),t("span",{staticStyle:{"background-color":"transparent"}},[a._v("RTT")]),t("span",{staticStyle:{"background-color":"transparent"}},[a._v("），它是延迟的时间的两倍。")]),t("span",[a._v("延迟是制约 ")]),t("span",[a._v("Web ")]),t("span",[a._v("性能的主要瓶颈，尤其对于")]),t("span",[a._v("HTTP ")]),t("span",[a._v("这样的协议，因为其中包含大量往返于服务器的请求。")])]),a._v(" "),t("h4",{attrs:{id:"带宽"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#带宽"}},[a._v("#")]),a._v(" 带宽")]),a._v(" "),t("p",[t("strong",[t("span",[a._v("只要带宽没有饱和，两个网络端点之间的连接会一次处理尽可能多的数据量。")])]),t("span",[a._v("依据")]),t("span",[a._v("Web ")]),t("span",[a._v("页面引用资源的大小和网络连接的传输能力，带宽可能会成为性能的瓶颈。带宽在5M/s时候就可···")])]),a._v(" "),t("h4",{attrs:{id:"dns查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns查询"}},[a._v("#")]),a._v(" DNS查询")]),a._v(" "),t("p",[t("strong",[t("span",[a._v("在客户端能够获取 ")])]),t("strong",[t("span",[a._v("Web ")])]),t("strong",[t("span",[a._v("页面前，它需要通过域名系统（ ")])]),t("strong",[t("span",[a._v("DNS")])]),t("strong",[t("span",[a._v("）把主机名称转换成 ")])]),t("strong",[t("span",[a._v("IP ")])]),t("strong",[t("span",[a._v("地址。")])]),t("span",[a._v("获取的 ")]),t("span",[a._v("HTML ")]),t("span",[a._v("页面中所引用的各个不同域名也需要转换；幸运的是，一个域名只需转换一次。")])]),a._v(" "),t("h4",{attrs:{id:"建立连接时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立连接时间"}},[a._v("#")]),a._v(" 建立连接时间")]),a._v(" "),t("p",[t("span",[a._v("在客户端和服务器之间建立连接需要往返数据应答，称为“三次握手”。握手时间一般与客户端和服务器之间的延迟有关。握手过程包括客户端向服务器发起一个 ")]),t("span",[a._v("SYN")]),t("span",[a._v("包，接着服务器返回对应 ")]),t("span",[a._v("SYN ")]),t("span",[a._v("的 ")]),t("span",[a._v("ACK ")]),t("span",[a._v("响应以及新的 ")]),t("span",[a._v("SYN ")]),t("span",[a._v("包，然后客户端返回对应的")]),t("span",[a._v("ACK。")])]),t("p",{staticStyle:{"text-align":"center"}},[t("span",[t("img",{staticStyle:{"max-width":"600px",width:"456px"},attrs:{alt:"image.png",title:"image.png",src:"https://cdn.nlark.com/yuque/0/2019/png/124615/1563440384207-7c2997ce-e5fa-47e5-8671-3ad5273d228d.png#align=left&display=inline&height=337&name=image.png&originHeight=421&originWidth=570&size=47612&status=done&width=456"}})])]),a._v(" "),t("h4",{attrs:{id:"tls协商时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tls协商时间"}},[a._v("#")]),a._v(" TLS协商时间")]),a._v(" "),t("p",[t("span",[a._v("如果客户端发起 ")]),t("span",[a._v("HTTPS ")]),t("span",[a._v("连接，它还需要进行传输层安全协议（ ")]),t("span",[a._v("TLS")]),t("span",[a._v("）协商； ")]),t("span",[a._v("TLS ")]),t("span",[a._v("用来取代安全套接层（ ")]),t("span",[a._v("SSL")]),t("span",[a._v("）。除了服务器和客户端的计算处理耗时之外， ")]),t("span",[a._v("TLS ")]),t("span",[a._v("还会造成额外的往返传输。")])]),a._v(" "),t("h4",{attrs:{id:"首字节时间（-ttfb）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首字节时间（-ttfb）"}},[a._v("#")]),a._v(" 首字节时间（ TTFB）")]),a._v(" "),t("p",[t("span",[a._v("TTFB ")]),t("span",[a._v("是指客户端从开始定位到 ")]),t("span",[a._v("Web ")]),t("span",[a._v("页面，至接收到主体页面响应的第一字节所耗费")]),t("span",[a._v("的时间。它包含了之前提到的各种耗时，还要加上服务器处理时间。对于主体页面上的资源， ")]),t("span",[a._v("TTFB ")]),t("span",[a._v("测量的是从浏览器发起请求至收到其第一字节之间的耗时。")])]),a._v(" "),t("h4",{attrs:{id:"内容下载时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容下载时间"}},[a._v("#")]),a._v(" 内容下载时间")]),a._v(" "),t("p",[t("span",[a._v("等同于被请求资源的最后字节到达时间（ ")]),t("span",[a._v("TTLB")]),t("span",[a._v("）。")])]),a._v(" "),t("h4",{attrs:{id:"开始渲染时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始渲染时间"}},[a._v("#")]),a._v(" 开始渲染时间")]),a._v(" "),t("p",[t("span",[a._v("客户端的屏幕上什么时候开始显示内容？")]),t("strong",[t("span",[a._v("这个指标测量的是用户看到空白页面的时长。")])])]),a._v(" "),t("h4",{attrs:{id:"文档加载完成时间（-又叫页面加载时间）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档加载完成时间（-又叫页面加载时间）"}},[a._v("#")]),a._v(" 文档加载完成时间（ 又叫页面加载时间）")]),a._v(" "),t("p",[t("span",[a._v("这是客户端浏览器认为页面加载")]),t("span",[a._v("完毕")]),t("span",[a._v("的时间。")])]),a._v(" "),t("h2",{attrs:{id:"下面是我们需要记住的一些增加的方面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下面是我们需要记住的一些增加的方面"}},[a._v("#")]),a._v(" 下面是我们需要记住的一些增加的方面")]),a._v(" "),t("ul",[t("li",[t("span",{staticStyle:{"background-color":"transparent"}},[a._v("更多的字节")])]),t("li",[t("span",[a._v("更多的资源")])]),t("li",[t("span",[a._v("更高的复杂度")])]),t("li",[t("span",[a._v("更多的域名")])]),t("li",[t("span",[a._v("更多的")]),t("span",[a._v("TCP socket")])])]),a._v(" "),t("h4",{attrs:{id:"更多的字节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多的字节"}},[a._v("#")]),a._v(" 更多的字节")]),a._v(" "),t("p",[t("span",[a._v("Web ")]),t("span",[a._v("页面引用的内容每年都在增长，图片越来越大， ")]),t("span",[a._v("JavaScript ")]),t("span",[a._v("和 ")]),t("span",[a._v("CSS")]),t("span",[a._v("也越来越大。内容体量变大意味着（客户端需要）下载更多的字节，也意味着更长的")]),t("span",[a._v("页面加载时间。")])]),a._v(" "),t("h4",{attrs:{id:"更多的资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多的资源"}},[a._v("#")]),a._v(" 更多的资源")]),a._v(" "),t("p",[t("span",[a._v("页面引用的资源不仅变大，而且数量也增多了。引用更多的资源会导致总耗时增加。")])]),a._v(" "),t("h4",{attrs:{id:"更高的复杂度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更高的复杂度"}},[a._v("#")]),a._v(" 更高的复杂度")]),a._v(" "),t("p",[t("span",[a._v("随着我们添加更多、更丰富的功能， ")]),t("span",[a._v("Web ")]),t("span",[a._v("页面和所依赖的资源正变得越来越复杂。复杂度提升，伴随而来的是计算渲染 ")]),t("span",[a._v("Web ")]),t("span",[a._v("页面的时间不断延长，尤其是在处理能力较弱的移动设备上。")])]),a._v(" "),t("h4",{attrs:{id:"更多的域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多的域名"}},[a._v("#")]),a._v(" 更多的域名")]),a._v(" "),t("p",[t("span",[a._v("Web ")]),t("span",[a._v("页面并不是从单一的域名拉取下来的，大多数 ")]),t("span",[a._v("Web ")]),t("span",[a._v("页面会关联数十个域名。每出现一个新域名都会增加 ")]),t("span",[a._v("DNS ")]),t("span",[a._v("查询耗时")]),t("span",[a._v("、 ")]),t("span",[a._v("建立连接耗时")]),t("span",[a._v("，以及 ")]),t("span",[a._v("TLS ")]),t("span",[a._v("协商耗时")]),t("span",[a._v("。")])]),a._v(" "),t("h4",{attrs:{id:"更多的tcp-socket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多的tcp-socket"}},[a._v("#")]),a._v(" 更多的TCP socket")]),a._v(" "),t("p",[t("span",[a._v("为了应对某些方面的")]),t("span",[a._v("增加")]),t("span",[a._v("，客户端会对同一个域名开启多个 ")]),t("span",[a._v("socket")]),t("span",[a._v("。这增加了与域名对应的服务器协商建立连接的开销，也加重了设备负担，还有可能导致网络连接过载，引发出错重传和缓存过满，并降低有效带宽。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);