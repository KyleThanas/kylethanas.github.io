(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{301:function(e,t,r){"use strict";r.r(t);var o=r(28),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"react-v16-的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-v16-的生命周期"}},[e._v("#")]),e._v(" React v16 的生命周期")]),e._v(" "),r("div",{staticClass:"lake-content-editor-core lake-engine",attrs:{"data-lake-element":"root","data-selection-124615":"%7B%22path%22%3A%5B%5B62%2C0%2C2%5D%2C%5B62%2C0%2C2%5D%5D%2C%22uuid%22%3A%22124615%22%2C%22active%22%3Atrue%7D"}},[r("p",{staticStyle:{"text-align":"center","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("span",{attrs:{"data-card-type":"inline","data-lake-card":"image"}},[r("img",{staticClass:"image lake-drag-image",staticStyle:{visibility:"visible",width:"746px",height:"429px"},attrs:{"data-role":"image",src:"https://cdn.nlark.com/yuque/0/2019/png/124615/1571135489634-f9f296b0-09aa-44e5-b25f-d11b3e6976bf.png?x-oss-process=image/resize,w_1500","data-raw-src":"https://cdn.nlark.com/yuque/0/2019/png/124615/1571135489634-f9f296b0-09aa-44e5-b25f-d11b3e6976bf.png",alt:"image.png",title:"image.png"}})])]),r("p",{staticStyle:{"text-align":"center","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h2",{attrs:{id:"常用的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用的生命周期"}},[e._v("#")]),e._v(" 常用的生命周期")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"render"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[e._v("#")]),e._v(" render()")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("render() 方法是 class 组件中"),r("strong",[e._v("唯一必须实现")]),e._v("的方法。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一：")]),r("ul",{staticStyle:{"list-style-type":"disc",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{"lake-indent":"0"}},[r("li",[e._v("React 元素。通常通过 JSX 创建。例如，"),r("code",[e._v("<div />")]),e._v(" 会被 React 渲染为 DOM 节点，"),r("code",[e._v("<MyComponent />")]),e._v(" 会被 React 渲染为自定义组件，无论是 "),r("code",[e._v("<div />")]),e._v(" 还是 "),r("code",[e._v("<MyComponent />")]),e._v(" 均为 React 元素。")]),r("li",[e._v("数组或 fragments。 使得 render 方法可以返回多个元素。")]),r("li",[e._v("Portals。可以渲染子节点到不同的 DOM 子树中。")]),r("li",[e._v("字符串或数值类型。它们在 DOM 中会被渲染为文本节点")]),r("li",[e._v("布尔类型或 null。什么都不渲染。（主要用于支持返回 test && "),r("code",[e._v("<Child />")]),e._v(" 的模式，其中 test 为布尔类型。)")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("render() 函数应该为纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("strong",[e._v("注意")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("如果 shouldComponentUpdate() 返回 false，则不会调用 render()。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"constructor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[e._v("#")]),e._v(" constructor()")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("在 React 组件"),r("strong",[e._v("挂载之前")]),e._v("，会调用它的构造函数。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("通常，在 React 中，在构造函数中只做两件事：")]),r("ul",{staticStyle:{"list-style-type":"disc",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{"lake-indent":"0"}},[r("li",[e._v("通过给 this.state 赋值对象来初始化内部 state。")]),r("li",[e._v("为事件处理函数绑定实例")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("strong",[e._v("注意:")])]),r("ul",{staticStyle:{"list-style-type":"disc",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{"lake-indent":"0"}},[r("li",[e._v("在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。")]),r("li",[e._v("不要在里边调用setState。")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"componentdidmount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[e._v("#")]),e._v(" componentDidMount()")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("componentDidMount() 会在"),r("strong",[e._v("组件挂载后")]),e._v("（插入 DOM 树中）立即调用。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("在这里可以")]),r("ul",{staticStyle:{"list-style-type":"disc",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{"lake-indent":"0"}},[r("li",[e._v("setState")]),r("li",[e._v("操作dom")]),r("li",[e._v("发请求获取初始数据")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("strong",[e._v("注意")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("你可以在 componentDidMount() 里可以直接调用 setState()。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 render() 两次调用的情况下，用户也不会看到中间状态。请谨慎使用该模式，因为它会导致性能问题。通常，你应该在 constructor() 中初始化 state。如果你的渲染依赖于 DOM 节点的大小或位置，比如实现 modals 和 tooltips 等情况下，你可以使用此方式处理。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"componentdidupdate-prevprops-prevstate-snapshot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate-prevprops-prevstate-snapshot"}},[e._v("#")]),e._v(" componentDidUpdate(prevProps, prevState, snapshot)")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("componentDidUpdate() 会在"),r("strong",[e._v("更新(dom已经更新)后")]),e._v("会被立即调用。首次渲染不会执行此方法。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("你也可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语件里，正如上述的例子那样进行处理，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。不要将 props “镜像”给 state，请考虑直接使用 props。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"componentwillunmount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[e._v("#")]),e._v(" componentWillUnmount()")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("componentWillUnmount() 会在"),r("strong",[e._v("组件卸载及销毁之前")]),e._v("直接调用。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("在这里可以释放资源, 比如清除定时器, removeEventListener。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("strong",[e._v("注意")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("这里边setState是无效的, 不应该调用。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h2",{attrs:{id:"不常用的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不常用的生命周期"}},[e._v("#")]),e._v(" 不常用的生命周期")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"shouldcomponentupdate-nextprops-nextstate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate-nextprops-nextstate"}},[e._v("#")]),e._v(" shouldComponentUpdate(nextProps, nextState)")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("他的返回值可以决定是否重新渲染, 当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("这是一个性能优化的生命周期方法, 只有当你清楚的知道自己在做什么的是使用。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"static-getderivedstatefromprops-props-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromprops-props-state"}},[e._v("#")]),e._v(" static getDerivedStateFromProps(props, state)")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"getsnapshotbeforeupdate-prevprops-prevstate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate-prevprops-prevstate"}},[e._v("#")]),e._v(" getSnapshotBeforeUpdate(prevProps, prevState)")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("此用法并不常见，但它可能出现在 UI 处理中，如需要以特殊方式处理滚动位置的聊天线程等。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h2",{attrs:{id:"与错误相关的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#与错误相关的生命周期"}},[e._v("#")]),e._v(" 与错误相关的生命周期")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"static-getderivedstatefromerror"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromerror"}},[e._v("#")]),e._v(" static getDerivedStateFromError()")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("此生命周期会"),r("strong",[e._v("在后代组件抛出错误后")]),e._v("被调用。 它将抛出的错误作为参数，并返回一个值以更新 state")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("strong",[e._v("注意")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("getDerivedStateFromError() 会在渲染阶段调用，因此不允许出现副作用。 如遇此类情况，请改用 componentDidCatch()。")]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h4",{attrs:{id:"componentdidcatch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentdidcatch"}},[e._v("#")]),e._v(" componentDidCatch()")]),e._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e._v("此生命周期在"),r("strong",[e._v("后代组件抛出错误后")]),e._v("被调用。 它接收两个参数：")]),r("ul",{staticStyle:{"list-style-type":"disc",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{"lake-indent":"0"}},[r("li",[e._v("error —— 抛出的错误。")]),r("li",[e._v("info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。"),r("br"),e._v("componentDidCatch() 会在“提交”阶段被调用，因此允许执行副作用。 它应该用于记录错误之类的情况。")])]),r("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[r("br")]),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("ol",{staticStyle:{"list-style-type":"decimal",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{start:"1","lake-indent":"0"}},[r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/floor/p/11616467.html",target:"_blank"}},[e._v("10秒钟理解react生命周期")])]),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/514fe21b9914",target:"_blank"}},[e._v("详解React生命周期(包括react16版)")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);