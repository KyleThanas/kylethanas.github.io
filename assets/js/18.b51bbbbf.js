(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{217:function(t,a,e){"use strict";e.r(a);var s=e(2),i=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"快捷通道"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快捷通道","aria-hidden":"true"}},[t._v("#")]),t._v(" 快捷通道")]),t._v(" "),e("ul",[e("li",[t._v("git add . （将新建的纳入git管理)")])]),e("ul",[e("li",[t._v("git status （查看文件在git仓库中的状态)")])]),e("ul",[e("li",[t._v('git commit -m "提交修改的信息说明"  (完成了首次提交)')])]),e("ul",[e("li",[t._v("git push  (Git会把master分支推送到远程库对应的远程分支上)")]),e("li",[t._v("git pull  (拉取更新)")])]),t._v(" "),e("h2",{attrs:{id:"处理问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#处理问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理问题")]),t._v(" "),e("table",{staticClass:"lake-table",staticStyle:{width:"722px"}},[e("colgroup",[e("col",{attrs:{width:"240"}}),e("col",{attrs:{width:"240"}}),e("col",{attrs:{width:"241"}})]),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"1",colspan:"1"}},[e("span",{staticStyle:{color:"#262626","background-color":"#FFFFFF"}},[t._v("问题提示")])]),e("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"1",colspan:"1"}},[e("span",{staticStyle:{color:"#4F4F4F","background-color":"#FFFFFF"}},[t._v("问题原因")])]),e("td",{staticStyle:{"text-align":"center"}},[e("p",[e("span",[t._v("解决办法")])])])]),e("tr",[e("td",{staticStyle:{"text-align":"left"},attrs:{rowspan:"1",colspan:"1"}},[e("span",{staticStyle:{color:"#262626","background-color":"#FFFFFF"}},[t._v("git push github失败，提示：SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443")])]),e("td",{staticStyle:{"text-align":"left"}},[e("p",[e("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#4F4F4F"}},[t._v("发现是因为Git的Http代理的问题，Git支持三种协议：git://、ssh://和http://，本来push的时候应该走")]),e("a",{attrs:{href:"https://www.baidu.com/s?wd=ssh%E9%9A%A7%E9%81%93&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd",target:"_blank"}},[t._v("ssh隧道")]),e("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#4F4F4F"}},[t._v("的，但是因为设置了http代理，所以就走了http的代理，于是就提交不了了。 OK，找到原因了，那就取消http代理吧")])])]),e("td",{staticStyle:{"text-align":"left"},attrs:{rowspan:"1",colspan:"1"}},[e("span",{staticStyle:{color:"#262626","background-color":"#FFFFFF"}},[t._v("在代码目录执行")]),e("span",{staticStyle:{color:"#262626","background-color":"#FFFFFF"}},[t._v("git config --global --unset http.proxy就可以了")])])]),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("p",[t._v("Windows git：致命：遇到TaskCanceledException？")]),e("p",[t._v("Fatal"),e("span",{staticStyle:{color:"#999999"}},[t._v(":")]),t._v(" TaskCanceledException encountered"),e("span",{staticStyle:{color:"#999999"}},[t._v(".")])])]),e("td",{staticStyle:{"text-align":"left"}}),e("td",{staticStyle:{"text-align":"left"}},[e("p",[e("code",[t._v("git config --list --system")])]),e("p",[e("code",[t._v("git config --list --global")])]),e("p",[t._v("设置下方命令")]),e("p",[e("span",{staticStyle:{color:"#888888"}},[t._v("git config --system --unset credential.helper")])])])]),e("tr",[e("td",{staticStyle:{"text-align":"left","background-color":"#FFFFFF"},attrs:{colspan:"1"}}),e("td",{staticStyle:{"text-align":"left","background-color":"#FFFFFF"},attrs:{colspan:"1"}}),e("td",{staticStyle:{"text-align":"left","background-color":"#FFFFFF"},attrs:{colspan:"1"}})])])]),e("p",[e("span",[t._v("要很好的掌握Git，先要明白四个名词概念：")])]),e("ul",[e("li",[t._v("Workspace（工作区）：新添加的，和修改的未add操作的。")])]),e("ul",[e("li",[t._v("Stage（暂存区）：add操作过后，会进入暂存区。")])]),e("ul",[e("li",[t._v("Repository(本地仓库)：commit操作后，会进入本地仓库。")])]),e("ul",[e("li",[t._v("Remote(远程仓库)：push操作后，会提交到远程仓库。")])]),t._v(" "),e("h2",{attrs:{id:"git的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git的配置","aria-hidden":"true"}},[t._v("#")]),t._v(" Git的配置")]),t._v(" "),e("blockquote",[e("p",[t._v("# 显示当前的Git配置")]),e("p",[t._v("$ git config --list")]),e("p",[t._v("#设置用户名和邮箱，即提交代码时的用户信息")]),e("p",[t._v('$ git config [--global] user.name "[name]"')]),e("p",[t._v('$ git config [--global] user.email "[email address]"')])]),t._v(" "),e("h2",{attrs:{id:"git操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git操作","aria-hidden":"true"}},[t._v("#")]),t._v(" Git操作")]),t._v(" "),e("h4",{attrs:{id:"添加-删除文件-add）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加-删除文件-add）","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加/删除文件(add）")]),t._v(" "),e("blockquote",[e("p",[t._v("#可以添加一个或多个")]),e("p",[t._v("$ git add  ...")]),e("p",[t._v("#添加所有修改的和新添加的")]),e("p",[t._v("$ git add .")]),e("p",[t._v("#另一种写法")]),e("p",[t._v("$ git add -A")]),e("p",[t._v("#添加指定目录")]),e("p",[t._v("$ git add")]),e("p",[t._v("#由暂存区恢复到工作区（发现提交错了，退回一步）")]),e("p",[t._v("$ git reset HEAD")]),e("p",[t._v("#恢复上一次add提交的所有file")]),e("p",[t._v("$ git reset HEAD")]),e("p",[t._v("#撤销修改操作，恢复到修改之前的，撤销add后位于工作区下进行的")]),e("p",[t._v("$ git checkout --")]),e("p",[t._v("#删除文件,并将文件放入暂存区")]),e("p",[t._v("$ git rm")]),e("p",[t._v("#改文件名，并将修改后的文件放入暂存区")]),e("p",[t._v("$ git mv")])]),t._v(" "),e("h4",{attrs:{id:"提交到本地仓库（commit）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交到本地仓库（commit）","aria-hidden":"true"}},[t._v("#")]),t._v(" 提交到本地仓库（commit）")]),t._v(" "),e("blockquote",[e("p",[t._v("#提交暂存区的所有文件(后面的message不可缺少)")]),e("p",[t._v("$ git commit -m")]),e("p",[t._v("#提交暂存区的指定文件")]),e("p",[t._v("$ git commit   -m")])]),t._v(" "),e("h4",{attrs:{id:"分支操作（branch）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支操作（branch）","aria-hidden":"true"}},[t._v("#")]),t._v(" 分支操作（branch）")]),t._v(" "),e("blockquote",[e("p",[t._v("# 列出所有本地分支")]),e("p",[t._v("$ git branch")]),e("p",[t._v("# 列出所有远程分支")]),e("p",[t._v("$ git branch -r")]),e("p",[t._v("# 列出所有本地分支和远程分支")]),e("p",[t._v("$ git branch -a")]),e("p",[t._v("# 新建一个分支，并切换到该分支")]),e("p",[t._v("$ git checkout -b [branch]")]),e("p",[t._v("# 切换到指定分支，并更新工作区")]),e("p",[t._v("$ git checkout [branch-name]")]),e("p",[t._v("#从远程分支检出指定分支")]),e("p",[t._v("$ git clone -b")]),e("p",[t._v("# 合并指定分支到当前分支（主分支合并自定义分支）")]),e("p",[t._v("$ git merge [branch]")]),e("p",[t._v("# 删除分支")]),e("p",[t._v("$ git branch -d [branch-name]")]),e("p",[t._v("# 删除远程分支")]),e("p",[t._v("$ git push origin --delete [branch-name]")]),e("p",[t._v("$ git branch -dr [remote/branch]")])]),t._v(" "),e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("h4",{attrs:{id:"查看信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看信息")]),t._v(" "),e("blockquote",[e("p",[t._v("# 显示有变更的文件")]),e("p",[t._v("$ git status")]),e("p",[t._v("# 显示当前分支的版本历史")]),e("p",[t._v("$ git log")])]),t._v(" "),e("h4",{attrs:{id:"远程同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程同步","aria-hidden":"true"}},[t._v("#")]),t._v(" 远程同步")]),t._v(" "),e("blockquote",[e("p",[t._v("# 下载远程仓库的所有变动")]),e("p",[t._v("$ git fetch [remote]")]),e("p",[t._v("# 显示所有远程仓库")]),e("p",[t._v("$ git remote -v")]),e("p",[t._v("# 显示某个远程仓库的信息")]),e("p",[t._v("$ git remote show [remote]")]),e("p",[t._v("# 增加一个新的远程仓库，并命名")]),e("p",[t._v("$ git remote add [shortname] [url]")]),e("p",[t._v("# 取回远程仓库的变化，并与本地分支合并")]),e("p",[t._v("$ git pull [remote] [branch]")]),e("p",[t._v("# 上传本地指定分支到远程仓库")]),e("p",[t._v("$ git push [remote] [branch]")]),e("p",[t._v("# 强行推送当前分支到远程仓库，即使有冲突")]),e("p",[t._v("$ git push [remote] --force")]),e("p",[t._v("# 推送所有分支到远程仓库")]),e("p",[t._v("$ git push [remote] --all")])]),t._v(" "),e("h4",{attrs:{id:"标签（tag）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签（tag）","aria-hidden":"true"}},[t._v("#")]),t._v(" 标签（tag）")]),t._v(" "),e("blockquote",[e("p",[t._v("# 列出所有tag")]),e("p",[t._v("$ git tag")]),e("p",[t._v("# 新建一个tag在当前commit")]),e("p",[t._v("$ git tag [tag]")]),e("p",[t._v("# 新建一个tag在指定commit")]),e("p",[t._v("$ git tag [tag] [commit]")]),e("p",[t._v("# 删除本地tag")]),e("p",[t._v("$ git tag -d [tag]")]),e("p",[t._v("# 删除远程tag")]),e("p",[t._v("$ git push origin :refs/tags/[tagName]")]),e("p",[t._v("# 查看tag信息")]),e("p",[t._v("$ git show [tag]")]),e("p",[t._v("# 提交指定tag")]),e("p",[t._v("$ git push [remote] [tag]")]),e("p",[t._v("# 提交所有tag")]),e("p",[t._v("$ git push [remote] --tags")]),e("p",[t._v("# 新建一个分支，指向某个tag")]),e("p",[t._v("$ git checkout -b [branch] [tag]")])]),t._v(" "),e("h4",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("blockquote",[e("p",[t._v("# 生成一个可供发布的压缩包")]),e("p",[t._v("$ git archive")])]),t._v(" "),e("h2",{attrs:{id:"gitignore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitignore","aria-hidden":"true"}},[t._v("#")]),t._v(" .gitignore")]),t._v(" "),e("h4",{attrs:{id:"gitignore的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitignore的配置","aria-hidden":"true"}},[t._v("#")]),t._v(" .gitignore的配置")]),t._v(" "),e("blockquote",[e("p",[t._v("/build")]),e("p",[t._v("/.idea")]),e("p",[t._v("/.gradle")]),e("p",[t._v("/local.properties")]),e("p",[t._v(".gitignore")])]),t._v(" "),e("h4",{attrs:{id:"用法规则和语义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法规则和语义","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法规则和语义")]),t._v(" "),e("blockquote",{staticStyle:{"padding-left":"1em"}},[e("p",[t._v("# 此为注释 – 将被 Git 忽略")]),e("p",[t._v("*.a # 忽略所有 .a 结尾的文件")]),e("p",[t._v("!lib.a # 但 lib.a 除外")]),e("p",[t._v("/TODO # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO")]),e("p",[t._v("build/ # 忽略 build/ 目录下的所有文件")]),e("p",[t._v("doc/*.txt # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt")])]),t._v(" "),e("h2",{attrs:{id:"commit-message-和-change-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit-message-和-change-log","aria-hidden":"true"}},[t._v("#")]),t._v(" Commit message 和 Change log")]),t._v(" "),e("h4",{attrs:{id:"commit规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit规范","aria-hidden":"true"}},[t._v("#")]),t._v(" commit规范")]),t._v(" "),e("p",{staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{"max-width":"600px",width:"700px"},attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/124615/1562306730234-17d3d145-e060-48bd-ad3c-00d4353df602.png#align=left&display=inline&height=678&originHeight=678&originWidth=700&size=0&status=done&width=700"}})]),e("p",{staticStyle:{"text-align":"center"}},[e("span",{staticStyle:{color:"#8C8C8C"}},[t._v("本文介绍A")]),e("span",{staticStyle:{color:"#8C8C8C"}},[t._v("ngular 规范（见上图）")])]),e("p",{staticStyle:{"text-align":"left"}},[e("span",{staticStyle:{color:"#8C8C8C"}},[e("br")])]),e("p",{staticStyle:{"text-indent":"2em"}},[t._v("每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("("),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("): "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("subject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n// 空一行\n\n// 空一行\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n")])])]),e("p",{staticStyle:{"text-indent":"2em"}},[t._v("其中，Header 是必需的，Body 和 Footer 可以省略。")]),e("p",{staticStyle:{"text-indent":"2em"}},[t._v("不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。")]),t._v(" "),e("h4",{attrs:{id:"header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#header","aria-hidden":"true"}},[t._v("#")]),t._v(" Header")]),t._v(" "),e("p",{staticStyle:{"text-indent":"2em"}},[t._v("Header部分只有一行，包括三个字段："),e("strong",[t._v("type（必需）")]),t._v("、"),e("strong",[t._v("scope（可选）")]),t._v("和"),e("strong",[t._v("subject（必需）")]),t._v("。")]),e("p",{staticStyle:{"text-indent":"2em"}},[e("strong",[t._v("type--")]),t._v("用于说明 commit 的类别，只允许使用下面7个标识。")]),e("ul",{staticStyle:{"text-align":"left"},attrs:{"data-lake-indent":"1"}},[e("li",{staticStyle:{"text-align":"left"}},[t._v("feat：新功能（feature）")]),e("li",{staticStyle:{"text-align":"left"}},[t._v("fix：修补bug")]),e("li",{staticStyle:{"text-align":"left"}},[t._v("docs：文档（documentation）")]),e("li",{staticStyle:{"text-align":"left"}},[t._v("style： 格式（不影响代码运行的变动）")]),e("li",{staticStyle:{"text-align":"left"}},[t._v("refactor：重构（即不是新增功能，也不是修改bug的代码变动）")]),e("li",{staticStyle:{"text-align":"left"}},[t._v("test：增加测试")]),e("li",{staticStyle:{"text-align":"left"}},[t._v("chore：构建过程或辅助工具的变动")])]),e("p",{staticStyle:{"text-indent":"2em"}},[t._v("如果"),e("strong",[t._v("type")]),t._v("为"),e("strong",[t._v("feat")]),t._v("和"),e("strong",[t._v("fix")]),t._v("，则该 commit 将肯定出现在 "),e("strong",[t._v("Change log ")]),t._v("之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。")]),e("p",{staticStyle:{"text-indent":"2em"}},[e("br")]),e("p",{staticStyle:{"text-indent":"2em"}},[e("strong",[t._v("scope--")]),e("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#111111"}},[t._v("用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。")])]),e("p",{staticStyle:{"text-indent":"2em"}},[e("br")]),e("p",{staticStyle:{"text-indent":"2em"}},[e("strong",[t._v("subject--")]),e("span",{staticClass:"lake-fontsize-12",staticStyle:{color:"#111111"}},[t._v("是 commit 目的的简短描述，不超过50个字符。")])]),e("ul",{staticStyle:{"text-align":"left"},attrs:{"data-lake-indent":"1"}},[e("li",{staticStyle:{"text-align":"left"}},[t._v("以动词开头，使用第一人称现在时，比如"),e("code",[t._v("change")]),t._v("，而不是"),e("code",[t._v("changed")]),t._v("或"),e("code",[t._v("changes")])]),e("li",{staticStyle:{"text-align":"left"}},[t._v("第一个字母小写")]),e("li",{staticStyle:{"text-align":"left"}},[t._v("结尾不加句号（"),e("code",[t._v(".")]),t._v("）")])]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ol",{attrs:{start:"1"}},[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/zxyudia/article/details/67633321",target:"_blank"}},[t._v("Git的一些常用命令，及.gitignore的配置")])]),e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html",target:"_blank"}},[t._v("Commit message 和 Change log 编写指南")])])])])},[],!1,null,null,null);a.default=i.exports}}]);