(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{293:function(t,a,e){"use strict";e.r(a);var r=e(28),l=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"环境配置-mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境配置-mysql"}},[t._v("#")]),t._v(" 环境配置-mysql")]),t._v(" "),e("div",{staticClass:"lake-content-editor-core lake-engine",attrs:{"data-lake-element":"root","data-selection-124615":"%7B%22path%22%3A%5B%5B31%2C0%2C1%5D%2C%5B31%2C0%2C1%5D%5D%2C%22uuid%22%3A%22124615%22%2C%22active%22%3Atrue%7D"}},[e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("span",{staticStyle:{color:"rgb(51, 51, 51)"}},[t._v("在CentOS中默认安装有MariaDB，这个是MySQL的分支，但为了需要，还是要在系统中安装MySQL，而且安装完成之后可以直接覆盖掉MariaDB。")])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("br")]),t._v(" "),e("h2",{attrs:{id:"开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),e("h4",{attrs:{id:"下载并安装mysql官方的-yum-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载并安装mysql官方的-yum-repository"}},[t._v("#")]),t._v(" 下载并安装MySQL官方的 Yum Repository")]),t._v(" "),e("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"iXmdE"}},[e("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(38, 38, 38)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[e("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[e("div",{staticClass:"language-undefined extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost ~]# wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm \n")])])])])])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("span",{staticStyle:{color:"rgb(51, 51, 51)"}},[t._v("使用上面的命令就直接下载了安装用的Yum Repository，大概25KB的样子，然后就可以直接yum安装了。")])]),e("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"a7Yfn"}},[e("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(38, 38, 38)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[e("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[e("div",{staticClass:"language-undefined extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost ~]# yum -y install mysql57-community-release-el7-10.noarch.rpm \n")])])])])])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("span",{staticStyle:{color:"rgb(51, 51, 51)"}},[t._v("之后就开始安装MySQL服务器。这步可能会花些时间，安装完成后就会覆盖掉之前的mariadb。")])]),e("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"CpGgs"}},[e("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(38, 38, 38)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[e("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[e("div",{staticClass:"language-undefined extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost ~]# yum -y install mysql-community-server \n")])])])])])]),e("p",{staticStyle:{"text-align":"center","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("span",{attrs:{"data-card-type":"inline","data-lake-card":"image"}},[e("img",{staticClass:"image lake-drag-image",staticStyle:{visibility:"visible",width:"489px",height:"236px"},attrs:{"data-role":"image",src:"https://cdn.nlark.com/yuque/0/2019/png/124615/1571379683059-04831dd3-d106-4cdf-9632-f91995bb6ebf.png","data-raw-src":"https://cdn.nlark.com/yuque/0/2019/png/124615/1571379683059-04831dd3-d106-4cdf-9632-f91995bb6ebf.png",alt:"image.png",title:"image.png"}})])]),e("p",{staticStyle:{"text-align":"left","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("br")]),t._v(" "),e("h4",{attrs:{id:"mysql数据库设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据库设置"}},[t._v("#")]),t._v(" MySQL数据库设置")]),t._v(" "),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[t._v("首先启动MySQL")]),e("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"6o5Q4"}},[e("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(38, 38, 38)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[e("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[e("div",{staticClass:"language-undefined extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost ~]# systemctl start  mysqld.service \n")])])])])])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("span",{staticStyle:{color:"rgb(51, 51, 51)"}},[t._v("查看MySQL运行状态，运行状态如图：")])]),e("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"5ujWi"}},[e("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(38, 38, 38)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[e("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[e("div",{staticClass:"language-undefined extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost ~]# systemctl status mysqld.service \n")])])])])])]),e("p",{staticStyle:{"text-align":"center","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("span",{attrs:{"data-card-type":"inline","data-lake-card":"image"}},[e("img",{staticClass:"image lake-drag-image",staticStyle:{visibility:"visible",width:"488px",height:"245px"},attrs:{"data-role":"image",src:"https://cdn.nlark.com/yuque/0/2019/png/124615/1571379817118-ffadc9fa-fbb5-4669-b1d7-12211743fb3c.png","data-raw-src":"https://cdn.nlark.com/yuque/0/2019/png/124615/1571379817118-ffadc9fa-fbb5-4669-b1d7-12211743fb3c.png",alt:"image.png",title:"image.png"}})])]),e("p",{staticStyle:{"text-align":"left","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("span",{staticStyle:{color:"rgb(51, 51, 51)"}},[t._v("此时MySQL已经开始正常运行，不过要想进入MySQL还得先找出此时root用户的密码，通过如下命令可以在日志文件中找出密码：")])]),e("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"n27xH"}},[e("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(38, 38, 38)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[e("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[e("div",{staticClass:"language-undefined extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[root@localhost ~]# grep "password" /var/log/mysqld.log \n')])])])])])]),e("p",{staticStyle:{"text-align":"center","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("span",{attrs:{"data-card-type":"inline","data-lake-card":"image"}},[e("img",{staticClass:"image lake-drag-image",staticStyle:{visibility:"visible",width:"703px",height:"36px"},attrs:{"data-role":"image",src:"https://cdn.nlark.com/yuque/0/2019/png/124615/1571379872881-d69d9be3-9298-44a8-8cca-adedfc61711b.png","data-raw-src":"https://cdn.nlark.com/yuque/0/2019/png/124615/1571379872881-d69d9be3-9298-44a8-8cca-adedfc61711b.png",alt:"image.png",title:"image.png"}})])]),e("p",{staticStyle:{"text-align":"left","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("span",{staticStyle:{color:"rgb(51, 51, 51)"}},[t._v("如下命令进入数据库：")])]),e("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"WOcn8"}},[e("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(38, 38, 38)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[e("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[e("div",{staticClass:"language-undefined extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost ~]# mysql -uroot -p \n")])])])])])]),e("p",{staticStyle:{"text-align":"left","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[t._v("输入初始密码，此时不能做任何事情，因为MySQL默认必须修改密码之后才能操作数据库：")]),e("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"XfNZI"}},[e("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(38, 38, 38)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[e("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[e("div",{staticClass:"language-undefined extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '新的密码大写字母+数字+特殊符号'; \n")])])])])])]),e("p",{staticStyle:{"text-align":"left","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("span",{staticStyle:{color:"rgb(51, 51, 51)"}},[t._v("这里有个问题，新密码设置的时候如果设置的过于简单会报错：")])]),e("p",{staticStyle:{"text-align":"center","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("span",{attrs:{"data-card-type":"inline","data-lake-card":"image"}},[e("img",{staticClass:"image lake-drag-image",staticStyle:{visibility:"visible",width:"591px",height:"42px"},attrs:{"data-role":"image",src:"https://cdn.nlark.com/yuque/0/2019/png/124615/1571379980817-342d3a82-fb63-422b-af94-00b9019ff767.png","data-raw-src":"https://cdn.nlark.com/yuque/0/2019/png/124615/1571379980817-342d3a82-fb63-422b-af94-00b9019ff767.png",alt:"image.png",title:"image.png"}})])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("br")]),t._v(" "),e("h4",{attrs:{id:"使用mysql数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用mysql数据库"}},[t._v("#")]),t._v(" 使用mysql数据库")]),t._v(" "),e("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"nkLZM"}},[e("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(38, 38, 38)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[e("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[e("div",{staticClass:"language-undefined extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> SHOW VARIABLES LIKE 'validate_password%'; \n")])])])])])]),e("p",{staticStyle:{"text-align":"left","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("br")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ol",{staticStyle:{"list-style-type":"decimal",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{start:"1","lake-indent":"0"}},[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/luohanguo/p/9045391.html",target:"_blank"}},[t._v("CentOS7 yum方式安装MySQL5.7")])])])])])}),[],!1,null,null,null);a.default=l.exports}}]);