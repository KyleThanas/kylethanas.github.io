(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{246:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"简述一下闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述一下闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 简述一下闭包")]),t._v(" "),s("p",[t._v("外部函数声明内部函数，内部函数引用外部函数的局部变量，这些变量不会被释放！")]),t._v(" "),s("h4",{attrs:{id:"闭包的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的作用","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包的作用")]),t._v(" "),s("p",[t._v("就是可以在在一个函数的内部可以访问到函数外部的变量。这是因为内部函数对外部函数属于同一作用域内，通过闭包内的函数访问到变量是因为内部函数保持着对变量的引用，当注册一个点击事件的时候，就是一个闭包，当点击事件完成的时候，还会对改变量保持着引用。")]),t._v(" "),s("h2",{attrs:{id:"闭包代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包代码")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makeCounter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" privateCounter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeBy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   privateCounter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   increment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeBy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   decrement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeBy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" privateCounter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Counter1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeCounter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Counter2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeCounter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Counter1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* logs 0 */")]),t._v("\nCounter1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nCounter1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Counter1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* logs 2 */")]),t._v("\nCounter1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decrement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Counter1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* logs 1 */")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Counter2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* logs 0 */")]),t._v(" \n")])])]),s("p",[s("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#333333"}},[t._v("每个闭包都有它自己的词法环境；而这次我们只创建了一个词法环境，为三个函数所共享：")]),s("code",[t._v("Counter.increment，")]),s("code",[t._v("Counter.decrement")]),s("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#333333"}},[t._v(" 和 ")]),s("code",[t._v("Counter.value")]),s("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#333333"}},[t._v("。")])]),s("p",[s("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#333333"}},[t._v("请注意两个计数器 ")]),s("code",[t._v("counter1")]),s("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#333333"}},[t._v(" 和 ")]),s("code",[t._v("counter2")]),s("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#333333"}},[t._v(" 是如何维护它们各自的独立性的。每个闭包都是引用自己词法作用域内的变量 ")]),s("code",[t._v("privateCounter")]),s("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#333333"}},[t._v(" 。")])]),t._v(" "),s("h2",{attrs:{id:"为什么闭包会产生内存泄漏？？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么闭包会产生内存泄漏？？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么闭包会产生内存泄漏？？")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("aa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bb")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("p",[t._v("上面是一个简单的闭包栗子，总所周知，"),s("strong",[t._v("引用对象存储的位置是堆内存中，当js的垃圾回收机制检测不到该变量被使用，就会被垃圾回收机制收走。而闭包，就会产生一个一直存在，切不释放的变量。")])]),t._v(" "),s("h2",{attrs:{id:"什么是引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是引用","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是引用")]),t._v(" "),s("p",[t._v("引用就是存储在堆内存中的对象你是直接不能访问的，而是通过栈内存中存储该对象的地址访问的，改地址就保持着对该对象的引用。")]),s("p",[t._v("就好比一个盒子，盒子里有一块糖，糖和盒子外部有一根绳子连接着，如果你想直接打开盒子取出糖，不好意思，盒子被上锁了，如果你通过绳子将糖从盒子的小孔中取出来是可以的，就相当于我们所说的引用，糖就是所谓的对象，盒子相当于堆内存。")]),t._v(" "),s("h2",{attrs:{id:"内存泄露"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存泄露","aria-hidden":"true"}},[t._v("#")]),t._v(" 内存泄露")]),t._v(" "),s("p",[t._v("定义："),s("strong",[t._v("一块被分配的内存既不能使用，也不能回收")]),t._v("。从而影响性能，甚至导致程序崩溃。")]),s("p",[t._v("起因：JavaScript的垃圾自动回收机制会按一定的策略找出那些不再继续使用的变量，释放其占有的内存。然而由于一些原因导致在这种机制下内存管理器不能正确解读JavaScript变量的生命周期，从而没有释放其内存，而也没有再被使用。")]),s("p",[t._v("循环引用是导致以上情况的主要原因之一。")]),s("p",[s("strong",[t._v("其实内存泄漏并不是闭包造成的，而是通过闭包内的函数对变量的引用，闭包不是真正产生内存泄漏的原因！")])]),t._v(" "),s("h2",{attrs:{id:"循环引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环引用","aria-hidden":"true"}},[t._v("#")]),t._v(" 循环引用")]),t._v(" "),s("p",[s("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#4D4D4D"}},[t._v("定义：两个")]),s("strong",[t._v("对象")]),s("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#4D4D4D"}},[t._v("的互相引用。")])]),s("p",[s("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#4D4D4D"}},[t._v("IE和Mozilla Firefox均使用引用计数的策略对变量和内存进行管理，当出现循环引用时，各对象的引用数至少为1，在不进行手动设置的情况下，将无法被释放。")])]),s("p",[s("strong",[t._v("闭包实际上非常容易造成JavaScript对象和DOM对象的隐蔽循环引用。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementByID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//①")]),t._v("\n   element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a leak!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//②")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("p",[t._v("以上函数example() 中用匿名函数创建了一个闭包。")]),s("p",[t._v("第①句：JavaScript对象element引用了一个DOM对象（其id为“div1”）； JS(element) ----\x3e DOM(div1)")]),s("p",[t._v("第②句："),s("strong",[t._v("该DOM对象的onclick属性引用了匿名函数闭包")]),t._v("，而闭包可以引用外部函数example() 的整个活动对象，包括elemnt ； DOM(div1.onclick) ----\x3eJS(element)")]),s("p",[t._v("由此形成了JavaScript对象和DOM对象的隐蔽循环引用。")]),t._v(" "),s("h4",{attrs:{id:"解决方法："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法：","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方法：")]),t._v(" "),s("p",[s("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#4D4D4D"}},[t._v("常用的解决方法就是在JavaScript代码段运行完之时将形成循环引用的JavaScript对象手动设置为空，切断引用。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementByID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//①")]),t._v("\n   element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a leak!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//②")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//添加的语句")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("h2",{attrs:{id:"js造成内存泄漏的几种情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js造成内存泄漏的几种情况","aria-hidden":"true"}},[t._v("#")]),t._v(" js造成内存泄漏的几种情况")]),t._v(" "),s("h4",{attrs:{id:"js的垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js的垃圾回收机制","aria-hidden":"true"}},[t._v("#")]),t._v(" js的垃圾回收机制")]),t._v(" "),s("p",[s("span",{staticStyle:{"background-color":"transparent"}},[t._v("js的垃圾回收机制(gc)就是为了防止内存泄漏的，内存泄漏的含义就是当已经不需要某块内存时这块内存还存在着，垃圾回收机制就是")]),s("strong",[t._v("间歇的不定期的寻找到不再使用的变量，并释放掉它们所指向的内存")]),s("span",{staticStyle:{"background-color":"transparent"}},[t._v("。所以这里又涉及到变量的生命周期，当")]),t._v("一个变量的生命周期结束之后它所指向的内存就应该被释放。JS有两种变量，全局变量和在函数中产生的局部变量。局部变量的生命周期在函"),s("span",{staticStyle:{"background-color":"transparent"}},[t._v("数执行过后就结束了，此时便可将它引用的内存释放（即垃圾回收），但全局变量生命周期会持续到浏览器关闭页面。所以当我们过多的使用全局变量的时候也会导致内存泄漏的问题。")])]),s("p",[s("span",{staticStyle:{"background-color":"transparent"}},[s("br")]),t._v("js 用了两种策略，"),s("strong",[t._v("一个是标记清除法，另一种是引用计数法")]),t._v("，其实他两的实现原理我们只明白一点就是都是通过判断当前的变量是否被引用，如果没有被引用，就说明该变量应该被回收，怎么回收就是上边说得两种策略的事情了。")]),t._v(" "),s("h4",{attrs:{id:"主要存在内存泄漏的问题点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要存在内存泄漏的问题点","aria-hidden":"true"}},[t._v("#")]),t._v(" 主要存在内存泄漏的问题点")]),t._v(" "),s("ul",[s("li",[t._v("BOM / DOM对象泄漏")]),s("li",[t._v("scipt中存在对BOM / DOM对象的引用")]),s("li",[t._v("javaScript对象泄漏")]),s("li",[t._v("闭包函数导致的泄漏 ")])]),t._v(" "),s("h4",{attrs:{id:"主要关注的代码点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要关注的代码点","aria-hidden":"true"}},[t._v("#")]),t._v(" 主要关注的代码点")]),t._v(" "),s("ul",[s("li",[t._v("DOM中的addEventLisner 函数及派生的事件监听， 比如Jquery 中的on 函数， vue 组件实例的 $on 函数，第三方库中的初始化函数")]),s("li",[t._v("BOM对象的事件监听，比如webSocket的监听事件")]),s("li",[t._v("避免不必要的函数引用")]),s("li",[t._v("如果是要render函数，避免在html标签中DOM / BOM事件 ")])]),t._v(" "),s("h4",{attrs:{id:"在vue中如何处理内存泄漏的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在vue中如何处理内存泄漏的","aria-hidden":"true"}},[t._v("#")]),t._v(" 在vue中如何处理内存泄漏的")]),t._v(" "),s("ul",[s("li",[t._v("如果在mounted/created 钩子中绑定了DOM/BOM 对象中的事件，需要在beforeDestroy 中做对应解绑处理")]),s("li",[t._v("如果在mounted/created 钩子中使用了第三方库初始化，需要在beforeDestroy 中做对应销毁处理")]),s("li",[t._v("如果组件中使用了定时器，需要在beforeDestroy 中做对应销毁处理")]),s("li",[t._v("模板中不要使用表达式来绑定到特定的处理函数，这个逻辑应该放在处理函数中")]),s("li",[t._v("如果在mounted/created 钩子中使用了$on，需要在beforeDestroy 中做对应解绑($off)处理")]),s("li",[t._v("某些组件在模板中使用 事件绑定可能会出现泄漏，使用$on 替换模板中的绑定"),s("a",{attrs:{href:"https://cn.vuejs.org/v2/cookbook/avoiding-memory-leaks.html",target:"_blank"}})])]),s("p",[t._v("另外，vue  在IE edge浏览器下，父子组件的场景，子组件依赖父组件的状态，子组件控制父组件状态变化从而反馈给子组件的展示变化，子组件通过v-if模式存在于视图中，父组件通过状态控制子组件的v-if状态变换。子组件控制父组件状态完成子组件数据填充后，父组件切换子组件的v-if状态，子组件占用dom结构被清理。此时，子组件存在时的内存占用未被释放，当父组件再次回切v-if状态时，子组件重新展示，内存飙升，重复几次切换后，内存飙升明显，页面卡顿。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ol",{attrs:{start:"1"}},[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qq_37339364/article/details/83152084",target:"_blank"}},[t._v("为什么闭包会产生内存泄漏？？ ")])]),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/u012876641/article/details/29185323",target:"_blank"}},[t._v("JavaScript之详述闭包导致的内存泄露 ")])]),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/xiaocuncheng/p/11101698.html",target:"_blank"}},[t._v("js造成内存泄漏的几种情况\n ")])]),s("li",[s("a",{attrs:{href:"https://cn.vuejs.org/v2/cookbook/avoiding-memory-leaks.html",target:"_blank"}},[t._v("Vue官网讲解避免内存泄露")])]),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qq_36903042/article/details/92867327",target:"_blank"}},[t._v("闭包真的会导致内存泄漏？")])])])])},[],!1,null,null,null);a.default=e.exports}}]);