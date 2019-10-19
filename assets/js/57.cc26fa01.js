(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{261:function(t,s,e){"use strict";e.r(s);var a=e(0),i=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-stash-暂存机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-暂存机制"}},[t._v("#")]),t._v(" git stash(暂存机制)")]),t._v(" "),e("div",{staticClass:"lake-content-editor-core lake-engine",attrs:{"data-lake-element":"root","data-selection-124615":"%7B%22path%22%3A%5B%5B15%2C1%2C0%2C0%2C9%5D%2C%5B15%2C1%2C0%2C0%2C9%5D%5D%2C%22uuid%22%3A%22124615%22%2C%22active%22%3Atrue%7D"}},[e("h2",{attrs:{id:"开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("br")]),t._v(" "),e("h4",{attrs:{id:"常用git-stash命令："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用git-stash命令："}},[t._v("#")]),t._v(" 常用git stash命令：")]),t._v(" "),e("ol",{staticStyle:{"list-style-type":"decimal",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{start:"1","lake-indent":"0"}},[e("li",[e("strong",[t._v("git stash")]),t._v(' save "save message"  : 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别。')]),e("li",[e("strong",[t._v("git stash list")]),t._v("  ：查看stash了哪些存储")]),e("li",[e("strong",[t._v("git stash show")]),t._v(" ：显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加stash@{$num}，比如第二个 git stash show stash@{1}")]),e("li",[e("strong",[t._v("git stash show -p")]),t._v(" : 显示第一个存储的改动，如果想显示其他存存储，命令：git stash show  stash@{$num}  -p ，比如第二个：git stash show  stash@{1}  -p")]),e("li",[e("strong",[t._v("git stash apply")]),t._v(" :应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，如果要使用其他个，git stash apply stash@{$num} ， 比如第二个：git stash apply stash@{1} ")]),e("li",[e("strong",[t._v("git stash pop")]),t._v(" ：命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，如果要应用并删除其他stash，命令：git stash pop stash@{$num} ，比如应用并删除第二个：git stash pop stash@{1}")]),e("li",[e("strong",[t._v("git stash drop stash@{$num}")]),t._v(" ：丢弃stash@{$num}存储，从列表中删除这个存储")]),e("li",[e("strong",[t._v("git stash clear ")]),t._v("：删除所有缓存的stash")])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("br")]),t._v(" "),e("h4",{attrs:{id:"只stash一部分文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#只stash一部分文件"}},[t._v("#")]),t._v(" 只stash一部分文件")]),t._v(" "),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[t._v("常规 git stash 的一个限制是它会一下暂存所有的文件。有时，只备份某些文件更为方便，让另外一些与代码库保持一致。一个非常有用的技巧，用来备份部分文件：")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("br")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("strong",[e("em",[t._v("在未"),e("code",[t._v("add")]),t._v("之前才能执行"),e("code",[t._v("stash")])])])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[t._v("git add 只是把文件加到git 版本控制里，并不等于就被stash起来了，git add和git stash 没有必然的关系，但是执行git stash 能正确存储的前提是文件必须在git 版本控制中才行。")]),e("ol",{staticStyle:{"text-align":"left","list-style-type":"decimal",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{"lake-indent":"0"}},[e("li",[t._v("add 那些你不想备份的文件（例如： git add file1.js, file2.js）")]),e("li",[t._v("调用 git stash –keep-index。只会备份那些没有被add的文件。")]),e("li",[t._v("调用 git reset 取消已经add的文件的备份，继续自己的工作。")])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("br")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ol",{staticStyle:{"list-style-type":"decimal",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{start:"1","lake-indent":"0"}},[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/zndxall/archive/2018/09/04/9586088.html",target:"_blank"}},[t._v("git stash 用法总结和注意点")])]),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/16adec527aed",target:"_blank"}},[t._v("git之stash")])])])])])}),[],!1,null,null,null);s.default=i.exports}}]);