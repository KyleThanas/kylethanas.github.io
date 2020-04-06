(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{261:function(e,t,r){"use strict";r.r(t);var a=r(28),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"闭包-内存泄漏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#闭包-内存泄漏"}},[e._v("#")]),e._v(" 闭包&内存泄漏")]),e._v(" "),r("div",{staticClass:"lake-engine lake-typography-traditional",attrs:{"data-lake-element":"root","data-parser-by":"lake2html"}},[r("h2",{attrs:{id:"简述一下闭包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简述一下闭包"}},[e._v("#")]),e._v(" 简述一下闭包")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("外部函数声明内部函数，内部函数引用外部函数的局部变量，这些变量不会被释放！")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"闭包的作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#闭包的作用"}},[e._v("#")]),e._v(" 闭包的作用")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("就是可以在在一个函数的内部可以访问到函数外部的变量。这是因为内部函数对外部函数属于同一作用域内，通过闭包内的函数访问到变量是因为内部函数保持着对变量的引用，当注册一个点击事件的时候，就是一个闭包，当点击事件完成的时候，还会对改变量保持着引用。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h2",{attrs:{id:"闭包代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#闭包代码"}},[e._v("#")]),e._v(" 闭包代码")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),r("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock","data-card-value":"data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22var%20makeCounter%20%3D%20function()%20%7B%5Cn%20%20var%20privateCounter%20%3D%200%3B%5Cn%20%20function%20changeBy(val)%20%7B%5Cn%20%20%20%20privateCounter%20%2B%3D%20val%3B%5Cn%20%20%7D%5Cn%20%20return%20%7B%5Cn%20%20%20%20increment%3A%20function()%20%7B%5Cn%20%20%20%20%20%20changeBy(1)%3B%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20decrement%3A%20function()%20%7B%5Cn%20%20%20%20%20%20changeBy(-1)%3B%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20value%3A%20function()%20%7B%5Cn%20%20%20%20%20%20return%20privateCounter%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%20%20%5Cn%7D%3B%5Cnvar%20Counter1%20%3D%20makeCounter()%3B%5Cnvar%20Counter2%20%3D%20makeCounter()%3B%5Cnconsole.log(Counter1.value())%3B%20%2F*%20logs%200%20*%2F%5CnCounter1.increment()%3B%5CnCounter1.increment()%3B%5Cnconsole.log(Counter1.value())%3B%20%2F*%20logs%202%20*%2F%5CnCounter1.decrement()%3B%5Cnconsole.log(Counter1.value())%3B%20%2F*%20logs%201%20*%2F%5Cnconsole.log(Counter2.value())%3B%20%2F*%20logs%200%20*%2F%22%2C%22id%22%3A%22Qb0Ao%22%7D",id:"Qb0Ao"}},[r("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(0, 0, 0)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[r("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[r("div",{staticClass:"language-undefined extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var makeCounter = function() {\n var privateCounter = 0;\n function changeBy(val) {\n   privateCounter += val;\n }\n return {\n   increment: function() {\n     changeBy(1);\n   },\n   decrement: function() {\n     changeBy(-1);\n   },\n   value: function() {\n     return privateCounter;\n   }\n }  \n};\nvar Counter1 = makeCounter();\nvar Counter2 = makeCounter();\nconsole.log(Counter1.value()); /* logs 0 */\nCounter1.increment();\nCounter1.increment();\nconsole.log(Counter1.value()); /* logs 2 */\nCounter1.decrement();\nconsole.log(Counter1.value()); /* logs 1 */\nconsole.log(Counter2.value()); /* logs 0 */ \n")])])])])])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"rgb(51, 51, 51)","font-size":"16px"},attrs:{"data-mce-style":"font-size: 12px"}},[e._v("每个闭包都有它自己的词法环境；而这次我们只创建了一个词法环境，为三个函数所共享：")]),r("code",[e._v("Counter.increment，")]),r("code",[e._v("Counter.decrement")]),r("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"rgb(51, 51, 51)","font-size":"16px"},attrs:{"data-mce-style":"font-size: 12px"}},[e._v(" 和 ")]),r("code",[e._v("Counter.value")]),r("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"rgb(51, 51, 51)","font-size":"16px"},attrs:{"data-mce-style":"font-size: 12px"}},[e._v("。")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"rgb(51, 51, 51)","font-size":"16px"},attrs:{"data-mce-style":"font-size: 12px"}},[e._v("请注意两个计数器 ")]),r("code",[e._v("counter1")]),r("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"rgb(51, 51, 51)","font-size":"16px"},attrs:{"data-mce-style":"font-size: 12px"}},[e._v(" 和 ")]),r("code",[e._v("counter2")]),r("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"rgb(51, 51, 51)","font-size":"16px"},attrs:{"data-mce-style":"font-size: 12px"}},[e._v(" 是如何维护它们各自的独立性的。每个闭包都是引用自己词法作用域内的变量 ")]),r("code",[e._v("privateCounter")]),r("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"rgb(51, 51, 51)","font-size":"16px"},attrs:{"data-mce-style":"font-size: 12px"}},[e._v(" 。")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("span",{attrs:{"data-lake-element":"cursor"}}),r("br")]),e._v(" "),r("h2",{attrs:{id:"为什么闭包会产生内存泄漏？？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么闭包会产生内存泄漏？？"}},[e._v("#")]),e._v(" 为什么闭包会产生内存泄漏？？")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),r("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock","data-card-value":"data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20aa()%7B%5Cn%20%20var%20a%20%3D%201%3B%5Cn%20%20function%20bb%20()%7B%5Cn%20%20%20%20var%20b%20%3D%20a%3B%5Cn%20%20%7D%5Cn%7D%22%2C%22id%22%3A%22KkQa2%22%7D",id:"KkQa2"}},[r("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(0, 0, 0)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[r("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[r("div",{staticClass:"language-undefined extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("function aa(){\n var a = 1;\n function bb (){\n   var b = a;\n }\n} \n")])])])])])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("上面是一个简单的闭包栗子，总所周知，"),r("strong",[e._v("引用对象存储的位置是堆内存中，当js的垃圾回收机制检测不到该变量被使用，就会被垃圾回收机制收走。而闭包，就会产生一个一直存在，切不释放的变量。")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h2",{attrs:{id:"什么是引用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是引用"}},[e._v("#")]),e._v(" 什么是引用")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("引用就是存储在堆内存中的对象你是直接不能访问的，而是通过栈内存中存储该对象的地址访问的，改地址就保持着对该对象的引用。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("就好比一个盒子，盒子里有一块糖，糖和盒子外部有一根绳子连接着，如果你想直接打开盒子取出糖，不好意思，盒子被上锁了，如果你通过绳子将糖从盒子的小孔中取出来是可以的，就相当于我们所说的引用，糖就是所谓的对象，盒子相当于堆内存。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h2",{attrs:{id:"内存泄露"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存泄露"}},[e._v("#")]),e._v(" 内存泄露")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("定义："),r("strong",[e._v("一块被分配的内存既不能使用，也不能回收")]),e._v("。从而影响性能，甚至导致程序崩溃。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("起因：JavaScript的垃圾自动回收机制会按一定的策略找出那些不再继续使用的变量，释放其占有的内存。然而由于一些原因导致在这种机制下内存管理器不能正确解读JavaScript变量的生命周期，从而没有释放其内存，而也没有再被使用。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("循环引用是导致以上情况的主要原因之一。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("strong",[e._v("其实内存泄漏并不是闭包造成的，而是通过闭包内的函数对变量的引用，闭包不是真正产生内存泄漏的原因！")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h2",{attrs:{id:"循环引用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#循环引用"}},[e._v("#")]),e._v(" 循环引用")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"rgb(77, 77, 77)","font-size":"16px"},attrs:{"data-mce-style":"font-size: 12px"}},[e._v("定义：两个")]),r("strong",[e._v("对象")]),r("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"rgb(77, 77, 77)","font-size":"16px"},attrs:{"data-mce-style":"font-size: 12px"}},[e._v("的互相引用。")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"rgb(77, 77, 77)","font-size":"16px"},attrs:{"data-mce-style":"font-size: 12px"}},[e._v("IE和Mozilla Firefox均使用引用计数的策略对变量和内存进行管理，当出现循环引用时，各对象的引用数至少为1，在不进行手动设置的情况下，将无法被释放。")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("strong",[e._v("闭包实际上非常容易造成JavaScript对象和DOM对象的隐蔽循环引用。")])]),r("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock","data-card-value":"data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20example()%7B%5Cn%20%20%20%20var%20element%20%3Ddocument.getElementByID(%5C%22div1%5C%22)%3B%20%2F%2F%E2%91%A0%5Cn%20%20%20%20element.onclick%20%3D%20function()%20%7B%5Cn%20%20%20%20%20%20%20%20alert(%5C%22This%20is%20a%20leak!%5C%22)%3B%20%2F%2F%E2%91%A1%5Cn%20%20%20%20%7D%5Cn%7D%22%2C%22id%22%3A%221fBya%22%7D",id:"1fBya"}},[r("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(0, 0, 0)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[r("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[r("div",{staticClass:"language-undefined extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('function example(){\n   var element =document.getElementByID("div1"); //①\n   element.onclick = function() {\n       alert("This is a leak!"); //②\n   }\n} \n')])])])])])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("以上函数example() 中用匿名函数创建了一个闭包。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("第①句：JavaScript对象element引用了一个DOM对象（其id为“div1”）； JS(element) ----\x3e DOM(div1)")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("第②句："),r("strong",[e._v("该DOM对象的onclick属性引用了匿名函数闭包")]),e._v("，而闭包可以引用外部函数example() 的整个活动对象，包括elemnt ； DOM(div1.onclick) ----\x3eJS(element)")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("由此形成了JavaScript对象和DOM对象的隐蔽循环引用。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"解决方法："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方法："}},[e._v("#")]),e._v(" 解决方法：")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"rgb(77, 77, 77)","font-size":"16px"},attrs:{"data-mce-style":"font-size: 12px"}},[e._v("常用的解决方法就是在JavaScript代码段运行完之时将形成循环引用的JavaScript对象手动设置为空，切断引用。")])]),r("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock","data-card-value":"data:%7B%22mode%22%3A%22javascript%22%2C%22code%22%3A%22function%20example()%7B%5Cn%20%20%20%20var%20element%20%3Ddocument.getElementByID(%5C%22div1%5C%22)%3B%20%2F%2F%E2%91%A0%5Cn%20%20%20%20element.onclick%20%3D%20function()%20%7B%5Cn%20%20%20%20%20%20%20%20alert(%5C%22This%20is%20a%20leak!%5C%22)%3B%20%2F%2F%E2%91%A1%5Cn%20%20%20%20%7D%5Cn%20%20%20%20element%20%3D%20null%3B%20%2F%2F%E6%B7%BB%E5%8A%A0%E7%9A%84%E8%AF%AD%E5%8F%A5%5Cn%7D%22%2C%22id%22%3A%22cZh6Q%22%7D",id:"cZh6Q"}},[r("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(0, 0, 0)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[r("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[r("div",{staticClass:"language-undefined extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('function example(){\n   var element =document.getElementByID("div1"); //①\n   element.onclick = function() {\n       alert("This is a leak!"); //②\n   }\n   element = null; //添加的语句\n} \n')])])])])])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h2",{attrs:{id:"js造成内存泄漏的几种情况"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js造成内存泄漏的几种情况"}},[e._v("#")]),e._v(" js造成内存泄漏的几种情况")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"js的垃圾回收机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js的垃圾回收机制"}},[e._v("#")]),e._v(" js的垃圾回收机制")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("span",{staticStyle:{"background-color":"transparent"}},[e._v("js的垃圾回收机制(gc)就是为了防止内存泄漏的，内存泄漏的含义就是当已经不需要某块内存时这块内存还存在着，垃圾回收机制就是")]),r("strong",[e._v("间歇的不定期的寻找到不再使用的变量，并释放掉它们所指向的内存")]),r("span",{staticStyle:{"background-color":"transparent"}},[e._v("。所以这里又涉及到变量的生命周期，当")]),e._v("一个变量的生命周期结束之后它所指向的内存就应该被释放。JS有两种变量，全局变量和在函数中产生的局部变量。局部变量的生命周期在函"),r("span",{staticStyle:{"background-color":"transparent"}},[e._v("数执行过后就结束了，此时便可将它引用的内存释放（即垃圾回收），但全局变量生命周期会持续到浏览器关闭页面。所以当我们过多的使用全局变量的时候也会导致内存泄漏的问题。")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("span",{staticStyle:{"background-color":"transparent"}},[r("br")]),e._v("js 用了两种策略，"),r("strong",[e._v("一个是标记清除法，另一种是引用计数法")]),e._v("，其实他两的实现原理我们只明白一点就是都是通过判断当前的变量是否被引用，如果没有被引用，就说明该变量应该被回收，怎么回收就是上边说得两种策略的事情了。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"主要存在内存泄漏的问题点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主要存在内存泄漏的问题点"}},[e._v("#")]),e._v(" 主要存在内存泄漏的问题点")]),e._v(" "),r("ul",{staticStyle:{"list-style-type":"disc",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{"lake-indent":"0"}},[r("li",[e._v("BOM / DOM对象泄漏")]),r("li",[e._v("scipt中存在对BOM / DOM对象的引用")]),r("li",[e._v("javaScript对象泄漏")]),r("li",[e._v("闭包函数导致的泄漏 ")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"主要关注的代码点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主要关注的代码点"}},[e._v("#")]),e._v(" 主要关注的代码点")]),e._v(" "),r("ul",{staticStyle:{"list-style-type":"disc",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{"lake-indent":"0"}},[r("li",[e._v("DOM中的addEventLisner 函数及派生的事件监听， 比如Jquery 中的on 函数， vue 组件实例的 $on 函数，第三方库中的初始化函数")]),r("li",[e._v("BOM对象的事件监听，比如webSocket的监听事件")]),r("li",[e._v("避免不必要的函数引用")]),r("li",[e._v("如果是要render函数，避免在html标签中DOM / BOM事件 ")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"在vue中如何处理内存泄漏的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在vue中如何处理内存泄漏的"}},[e._v("#")]),e._v(" 在vue中如何处理内存泄漏的")]),e._v(" "),r("ul",{staticStyle:{"list-style-type":"disc",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{"lake-indent":"0"}},[r("li",[e._v("如果在mounted/created 钩子中绑定了DOM/BOM 对象中的事件，需要在beforeDestroy 中做对应解绑处理")]),r("li",[e._v("如果在mounted/created 钩子中使用了第三方库初始化，需要在beforeDestroy 中做对应销毁处理")]),r("li",[e._v("如果组件中使用了定时器，需要在beforeDestroy 中做对应销毁处理")]),r("li",[e._v("模板中不要使用表达式来绑定到特定的处理函数，这个逻辑应该放在处理函数中")]),r("li",[e._v("如果在mounted/created 钩子中使用了$on，需要在beforeDestroy 中做对应解绑($off)处理")]),r("li",[e._v("某些组件在模板中使用 事件绑定可能会出现泄漏，使用$on 替换模板中的绑定"),r("a",{attrs:{href:"https://cn.vuejs.org/v2/cookbook/avoiding-memory-leaks.html",target:"_blank",rel:"noopener noreferrer"}})])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[e._v("另外，vue  在IE edge浏览器下，父子组件的场景，子组件依赖父组件的状态，子组件控制父组件状态变化从而反馈给子组件的展示变化，子组件通过v-if模式存在于视图中，父组件通过状态控制子组件的v-if状态变换。子组件控制父组件状态完成子组件数据填充后，父组件切换子组件的v-if状态，子组件占用dom结构被清理。此时，子组件存在时的内存占用未被释放，当父组件再次回切v-if状态时，子组件重新展示，内存飙升，重复几次切换后，内存飙升明显，页面卡顿。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word","line-height":"1.74",margin:"0px"}},[r("br")]),r("ol",{staticStyle:{"list-style-type":"decimal",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{start:"1","lake-indent":"0"}},[r("li",[r("a",{attrs:{href:"https://blog.csdn.net/qq_37339364/article/details/83152084",target:"_blank",rel:"noopener noreferrer"}},[e._v("为什么闭包会产生内存泄漏？？ ")])]),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/u012876641/article/details/29185323",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript之详述闭包导致的内存泄露 ")])]),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/xiaocuncheng/p/11101698.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("js造成内存泄漏的几种情况\n ")])]),r("li",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/cookbook/avoiding-memory-leaks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue官网讲解避免内存泄露")])]),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/qq_36903042/article/details/92867327",target:"_blank",rel:"noopener noreferrer"}},[e._v("闭包真的会导致内存泄漏？")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);