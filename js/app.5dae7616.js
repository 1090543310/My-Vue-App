(function(t){function e(e){for(var n,r,s=e[0],i=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o={app:0},c=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-5cecc843":"3125a951"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-5cecc843":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-5cecc843":"868cc853"}[t]+".css",o=i.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[t],d.parentNode.removeChild(d),a(c)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"1a64":function(t,e,a){},2478:function(t,e,a){t.exports=a.p+"img/MyWeChat.dc3e89f7.jpg"},"2b22":function(t,e,a){},"6cdf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-row",{staticStyle:{flex:"0 1 auto","flex-direction":"column","flex-wrap":"nowrap"}},[n("v-col",{staticStyle:{flex:"0","padding-bottom":"0"},attrs:{cols:"12"}},[n("v-card-actions",{staticStyle:{height:"100px"},attrs:{id:"User"}},[n("v-card-actions",{attrs:{id:"userAvatar"}},[n("div",{attrs:{id:"MyAvatar"}})]),n("v-card-text",{attrs:{id:"other"}},[t._v("\n\t\t\t\t\t\tMr.Huang\n\t\t\t\t\t")]),n("v-card-text")],1)],1),n("v-col",{staticStyle:{flex:"0"},attrs:{cols:"12"}},[n("v-card",{attrs:{id:"cardCarousel"}},[n("v-carousel",{attrs:{cycle:"",height:"calc(100vh - 348px)","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(e,a){return n("v-carousel-item",{key:a,attrs:{src:e.src,hidden:""}},[n("span",{staticClass:"v-text"},[t._v(t._s(e.text))])])})),1)],1)],1),n("v-footer",{staticStyle:{"margin-top":"0",padding:"0 12px","box-shadow":"none"},attrs:{dark:"",padless:"",width:"100%",color:"rgba(0,0,0,0)"}},[n("v-card",{staticClass:"indigo lighten-1 white--text text-center",staticStyle:{width:"100%"},attrs:{tile:""}},[n("v-card-text",{staticClass:"v-icon-box"},t._l(t.icons,(function(e,a){return n("v-btn",{key:a,staticClass:"mx-2 white--text",attrs:{id:e.id,icon:""},on:{click:function(a){return t.hlendOpen(e.click)}}},[n("v-icon",{attrs:{size:"26px"}},[t._v(t._s(e.icon))])],1)})),1),n("v-card-text",{staticStyle:{padding:"3px","font-size":"2.4vh"}},[t._v("\n\t\t\t\t\t\t心往高三想，劲往高三使，汗往高三流\n\t\t\t\t\t")]),n("v-divider"),n("v-card-text",{staticClass:"white--text"},[t._v("\n\t\t\t\t\t\t"+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Vuetify")])])],1)],1)],1),n("v-dialog",{attrs:{width:"500"},model:{value:t.wechatDialog,callback:function(e){t.wechatDialog=e},expression:"wechatDialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n\t\t\t\t\tWeChat\n\t\t\t\t")]),n("v-card-text",{staticClass:"white lighten-2"},[n("v-img",{staticStyle:{"background-repeat":"no-repeat"},attrs:{src:a("2478"),"lazy-src":a("2478"),"aspect-ratio":"1",contain:"",height:"100%",width:"100%"}})],1),n("v-divider"),n("v-card-actions",[n("div",{staticClass:"flex-grow-1"}),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){e.stopPropagation(),t.wechatDialog=!1}}},[t._v("\n\t\t\t\t\t\t关闭\n\t\t\t\t\t")])],1)],1)],1),n("v-snackbar",{staticStyle:{"font-size":"2.4vh"},attrs:{color:"rgb(18, 139, 224)","multi-line":t.multiLine},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t"+t._s(t.snackbarText)+"\n\t\t")])],1)},r=[],o=a("d225"),c=a("b0b4"),s=a("308d"),i=a("6bb5"),l=a("4e2b"),u=a("9ab4"),p=a("60a3"),d=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.nextIcon=!0,t.prevIcon=!0,t.qqChat=!0,t.wechatDialog=!1,t.snackbar=!1,t.multiLine=!0,t.snackbarText="请使用手机端打开",t.icons=[{icon:"mdi-qqchat",click:"QQChatOpen",id:"TheisQQ"},{icon:"mdi-wechat",click:"wechatOpen",id:"TheisWc"},{icon:"mdi-twitter",click:"tw",id:"TheisTw"},{icon:"mdi-facebook-box",click:"fc",id:"TheisFc"},{icon:"mdi-qrcode-scan",click:"Aliplay",id:"TheisCl"}],t.slides=[{src:a("a6a8"),text:"心微动，奈何情己远。物也非，人也非，事事非，往日不可追"},{src:a("bd81"),text:"上帝正望着你，说：“我要为这个女孩留一个特别的人"},{src:a("711e"),text:"据说，每个人都有一个毛病，越是喜欢谁，越爱欺负谁"},{src:a("ec26"),text:"心素如简，人淡如菊"}],t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"hlendOpen",value:function(t){this[t]()}},{key:"QQChatOpen",value:function(){this.qqChat&&(window.location.href='mqqwpa://im/chat?chat_type=wpa&uin=1090543310&version=1&src_type=web&web_src=oicqzone.com"')}},{key:"IsPC",value:function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!0,n=0;n<e.length;n++)if(t.indexOf(e[n])>0){a=!1;break}return a}},{key:"Aliplay",value:function(){this.IsPC()&&(this.snackbar=!0)}},{key:"wechatOpen",value:function(){this.wechatDialog=!0}},{key:"mounted",value:function(){}}]),e}(p["b"]);d=Object(u["a"])([Object(p["a"])({components:{}})],d);var f=d,h=f,v=(a("f197"),a("2877")),m=Object(v["a"])(h,n,r,!1,null,"a9844032",null);e["default"]=m.exports},"6d4b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-card",{staticStyle:{"margin-top":"12px","box-shadow":"none"},attrs:{color:"rgba(255, 255, 255, 1)"}},[a("v-expansion-panels",{attrs:{focusable:""}},t._l(t.items,(function(e,n){return a("v-expansion-panel",{key:n,staticStyle:{margin:"4px 0","box-shadow":"0px 1px 4px -2px rgba(115, 154, 252, 0.59)"}},[a("v-expansion-panel-header",{staticStyle:{"font-size":"1rem"}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")]),a("v-expansion-panel-content",t._l(e.list,(function(e,n){return a("v-card",{staticClass:"pt-2 mb-2 mt-2",staticStyle:{color:"#1d69ab","box-shadow":"none"},attrs:{color:"rgba(62, 132, 232, 0)"}},[a("span",{staticClass:"font-weight-bold pl-2"},[t._v("\n\t\t\t\t\t\t\t"+t._s(++n)+". "+t._s(e.head)+"\n\t\t\t\t\t\t")]),a("v-card-text",{staticClass:"pa-2",staticStyle:{color:"#1d69ab"}},[e.cul?a("v-card",{staticClass:"pa-2",staticStyle:{color:"#1d69ab"},attrs:{color:"#ffffff80"}},t._l(e.cul,(function(e,n){return a("p",{class:e.class+" mb-0"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t\t\t\t")])})),0):t._e(),a("p",{staticClass:"pa-2 mb-0",staticStyle:{"font-size":"0.9rem"}},[t._v(t._s(e.text))])],1)],1)})),1)],1)})),1)],1)],1)},r=[],o=a("d225"),c=a("b0b4"),s=a("308d"),i=a("6bb5"),l=a("4e2b"),u=a("9ab4"),p=a("60a3"),d=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.items=[{title:"ECharts堆叠轮播开发经验",list:[{head:"年份月份加载",img:"",text:"_tie是继承了上面定义的Start构造函数,new Date().getFullYear()获取当前年份,month在遍历中获取今年的每个月份的数据  未完待续。。。",cul:[{text:"var dayColumnar = _tie.dayColumnar;",class:"pl-1"},{text:"var year = new Date().getFullYear();",class:"pl-1"},{text:"var options = new Array();",class:"pl-1"},{text:"/** 获取某月份的天数 */",class:"pl-1"},{text:"for (var i = 1; i <= 12; i++) {",class:"pl-1"},{text:"var month = new Date(year, i, 0);",class:"pl-3"},{text:"var dayNum = month.getDate();",class:"pl-3"},{text:"/** 初始化X轴 */",class:"pl-3"},{text:"var days = new Array();",class:"pl-3"},{text:"for (var j = 1; j <= dayNum; j++) {",class:"pl-3"},{text:"days.push(j);",class:"pl-6"},{text:"}",class:"pl-3"},{text:"var series =  new Series([]);",class:"pl-3"},{text:"var option = new Option(days, series);",class:"pl-3"},{text:"option.yAxis[0].max = 60;",class:"pl-3"},{text:"options.push(option);",class:"pl-3"},{text:"}",class:"pl-1"}]},{head:"ECharts构造函数series",img:"",text:"",cul:""}]},{title:"JavaScript闭包原理理解",text:""},{title:"面向对象原型原理理解",text:""},{title:"UI界面优化经验",text:""},{title:"Live2d看板娘使用解析",text:""}],t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){}}]),e}(p["b"]);d=Object(u["a"])([Object(p["a"])({components:{}})],d);var f=d,h=f,v=(a("b19f"),a("2877")),m=Object(v["a"])(h,n,r,!1,null,"fa0d2850",null);e["default"]=m.exports},"711e":function(t,e,a){t.exports=a.p+"img/1-3-min.d7911818.jpg"},"7a89":function(t,e,a){},a6a8:function(t,e,a){t.exports=a.p+"img/1-1-min.fcd96695.jpg"},b19f:function(t,e,a){"use strict";var n=a("1a64"),r=a.n(n);r.a},b7c9:function(t,e,a){},bd81:function(t,e,a){t.exports=a.p+"img/1-2-min.c1c988ce.jpg"},c51d:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view"),a("canvas",{staticStyle:{position:"fixed",top:"0px",left:"0px","z-index":"-1",opacity:"1"},attrs:{id:"c_n12",width:"100%",height:"100%"}}),a("div",{staticClass:"waifu"},[a("div",{staticClass:"waifu-tips"}),a("div",{staticClass:"waifu-tool"},[a("v-icon",{attrs:{id:"home",color:"#000",size:"26"}},[t._v("mdi-nintendo-switch")])],1),a("canvas",{staticClass:"live2d",attrs:{id:"live2d",width:"300",height:"270"}})])],1)},o=[],c=a("d225"),s=a("b0b4"),i=a("308d"),l=a("6bb5"),u=a("4e2b"),p=a("9ab4"),d=a("60a3"),f=function(t){function e(){return Object(c["a"])(this,e),Object(i["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){var t=document.createElement("script");t.type="text/javascript",t.src="https://www.calamus.xyz/assets/live2d.js",document.body.appendChild(t)}}]),e}(d["b"]);f=Object(p["a"])([Object(d["a"])({components:{}})],f);var h=f,v=h,m=a("2877"),x=Object(m["a"])(v,r,o,!1,null,null,null),b=x.exports,y=a("8c4f"),g=a("6cdf"),w=a("f97c"),_=a("6d4b");n["default"].use(y["a"]);var k=new y["a"]({routes:[{path:"/",name:"main",component:function(t){return a.e("chunk-5cecc843").then(function(){var e=[a("7f94")];t.apply(null,e)}.bind(this)).catch(a.oe)},children:[{path:"/mainIndex",name:"mainIndex",component:function(t){return Promise.resolve().then(function(){return t(g)}.bind(null,a)).catch(a.oe)}},{path:"/themeIndex",name:"themeIndex",component:function(t){return Promise.resolve().then(function(){return t(w)}.bind(null,a)).catch(a.oe)}},{path:"/blogIndex",name:"blogIndex",component:function(t){return Promise.resolve().then(function(){return t(_)}.bind(null,a)).catch(a.oe)}}]}]}),j=a("ce5b"),O=a.n(j);a("bf40");n["default"].use(O.a);var S=new O.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"mdi"}}),C=(a("5363"),a("b7c9"),a("c51d"),a("4917"),a("386d"),a("28a5"),a("a481"),a("1157")),I=a.n(C),A={waifu:{console_open_msg:["哈哈，你打开了控制台，是想要看看我的秘密吗？"],copy_message:["你都复制了些什么呀，转载要记得加上出处哦"],screenshot_message:["照好了嘛，是不是很可爱呢？"],hidden_message:["我们还能再见面的吧…"],load_rand_textures:["我还没有其他衣服呢","我的新衣服好看嘛"],hour_tips:{"t5-7":["早上好！一日之计在于晨，美好的一天就要开始了"],"t7-11":["上午好！工作顺利嘛，不要久坐，多起来走动走动哦！"],"t11-14":["中午了，工作了一个上午，现在是午餐时间！"],"t14-17":["午后很容易犯困呢，今天的运动目标完成了吗？"],"t17-19":["傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~"],"t19-21":["晚上好，今天过得怎么样？"],"t21-23":["已经这么晚了呀，早点休息吧，晚安~"],"t23-5":["你是夜猫子呀？这么晚还不睡觉，明天起的来嘛"],default:["嗨~ 快来逗我玩吧！"]},referrer_message:{localhost:['欢迎阅读<span style="color:#0099cc;">『',"』</span>"," - "],baidu:['Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">',"</span> 找到的我吗？"],so:['Hello! 来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">',"</span> 找到的我吗？"],google:['Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『',"』</span>"," - "],default:['Hello! 来自 <span style="color:#0099cc;">',"</span> 的朋友"],none:['欢迎阅读<span style="color:#0099cc;">『',"』</span>"," - "]},referrer_hostname:{"example.com":["示例网站"],"www.fghrsh.net":["Mr.Huang 的博客"]},model_message:{1:["来自 Potion Maker 的 Pio 酱 ~"],2:["来自 Potion Maker 的 Tia 酱 ~"]},hitokoto_api_message:{"lwl12.com":['这句一言来自 <span style="color:#0099cc;">『{source}』</span>','，是 <span style="color:#0099cc;">{creator}</span> 投稿的',"。"],"fghrsh.net":['这句一言出处是 <span style="color:#0099cc;">『{source}』</span>，是 <span style="color:#0099cc;">FGHRSH</span> 在 {date} 收藏的！'],"jinrishici.com":['这句诗词出自 <span style="color:#0099cc;">《{title}》</span>，是 {dynasty}诗人 {author} 创作的！'],"hitokoto.cn":['这句一言来自 <span style="color:#0099cc;">『{source}』</span>，是 <span style="color:#0099cc;">{creator}</span> 在 hitokoto.cn 投稿的。']}},mouseover:[{selector:"#woodkskkrllklsd",text:['要看看 <span style="color:#0099cc;">{text}</span> 么？']},{selector:"#home",text:["点击前往首页，想回到上一页可以使用浏览器的后退功能哦"]},{selector:"#navigationButton",text:['点击(๑╹◡╹)ﾉ"""弹出导航菜单哦，再点一次就可以关闭带单哦！']},{selector:"#MyAvatar",text:["这是我爸爸的头像|ू･ω･` )emmmm....."]},{selector:"#MyName",text:["这是我爸爸的称呼，您可以称呼他黄先生 ٩(๑❛ᴗ❛๑)۶~~~"]},{selector:".v-window__next",text:["要看下一张图吗？(。-ω-)zzz"]},{selector:".v-window__prev",text:["要看上一张图吗？(。-ω-)zzz"]},{selector:"#TheisQQ",text:["点击添加爸爸的QQ可跟他一起进步与学习ヾ(o´∀｀o)ﾉ ~~~"]},{selector:"#TheisWc",text:["点击可扫一扫添加微信~(σﾟ∀ﾟ)σ..:*☆哎哟不错哦"]},{selector:"#comment_go",text:["想要去评论些什么吗？"]},{selector:"#night_mode",text:["深夜时要爱护眼睛呀"]},{selector:"#qrcode",text:["手机扫一下就能继续看，很方便呢"]},{selector:".comment_reply",text:["要吐槽些什么呢"]},{selector:"#back-to-top",text:["回到开始的地方吧"]},{selector:"#author",text:["该怎么称呼你呢"]},{selector:"#mail",text:["留下你的邮箱，不然就是无头像人士了"]},{selector:"#url",text:["你的家在哪里呢，好让我去参观参观"]},{selector:"#textarea",text:["认真填写哦，垃圾评论是禁止事项"]},{selector:".OwO-logo",text:["要插入一个表情吗"]},{selector:"#csubmit",text:["要[提交]^(Commit)了吗，首次评论需要审核，请耐心等待~"]},{selector:".ImageBox",text:["点击图片可以放大呢"]},{selector:"input[name=s]",text:["找不到想看的内容？搜索看看吧"]},{selector:".previous",text:["去上一页看看吧"]},{selector:".next",text:["去下一页看看吧"]},{selector:".dropdown-toggle",text:["这里是菜单"]},{selector:"c-player a.play-icon",text:["想要听点音乐吗"]},{selector:"c-player div.time",text:['在这里可以调整<span style="color:#0099cc;">播放进度</span>呢']},{selector:"c-player div.volume",text:['在这里可以调整<span style="color:#0099cc;">音量</span>呢']},{selector:"c-player div.list-button",text:['<span style="color:#0099cc;">播放列表</span>里都有什么呢']},{selector:"c-player div.lyric-button",text:['有<span style="color:#0099cc;">歌词</span>的话就能跟着一起唱呢']},{selector:".waifu #live2d",text:["干嘛呢你，快把手拿开","鼠…鼠标放错地方了！"]}],click:[{selector:".waifu #live2d",text:["温柔一点，我是小可爱。","瞧一瞧，看一看了哎！","你看到我的小熊了吗","再摸的话我可要报警了！⌇●﹏●⌇","110吗，这里有个变态一直在摸我(ó﹏ò｡)"]}],seasons:[{date:"01/01",text:['<span style="color:#0099cc;">元旦</span>了呢，新的一年又开始了，今年是{year}年~']},{date:"02/14",text:['又是一年<span style="color:#0099cc;">情人节</span>，{year}年找到对象了嘛~']},{date:"03/08",text:['今天是<span style="color:#0099cc;">妇女节</span>！']},{date:"03/12",text:['今天是<span style="color:#0099cc;">植树节</span>，要保护环境呀']},{date:"04/01",text:['悄悄告诉你一个秘密~<span style="background-color:#34495e;">今天是愚人节，不要被骗了哦~</span>']},{date:"05/01",text:['今天是<span style="color:#0099cc;">五一劳动节</span>，计划好假期去哪里了吗~']},{date:"06/01",text:['<span style="color:#0099cc;">儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…']},{date:"09/03",text:['<span style="color:#0099cc;">中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。']},{date:"09/10",text:['<span style="color:#0099cc;">教师节</span>，在学校要给老师问声好呀~']},{date:"10/01",text:['<span style="color:#0099cc;">国庆节</span>，新中国已经成立69年了呢']},{date:"11/05-11/12",text:['今年的<span style="color:#0099cc;">双十一</span>是和谁一起过的呢~']},{date:"12/20-12/31",text:['这几天是<span style="color:#0099cc;">圣诞节</span>，主人肯定又去剁手买买买了~']}]};if(String.prototype.render=function(t){var e=/(\\)?\{([^\{\}\\]+)(\\)?\}/g;return this.replace(e,(function(e,a,n,r){if(a||r)return e.replace("\\","");var o,c,s,i=n.replace(/\s/g,"").split("."),l=t;for(o=0,c=i.length;o<c;++o)if(s=i[o],l=l[s],void 0===l||null===l)return"";return l}))},F()>=72){var P=new Image;Object.defineProperty(P,"id",{get:function(){q("哈哈，你打开了控制台，是想要看看我的秘密吗？",5e3,!0)}})}else{var T=/x/;T.toString=function(){return q("哈哈，你打开了控制台，是想要看看我的秘密吗？",5e3,!0),""}}I()(document).on("copy",(function(){q("你都复制了些什么呀，转载要记得加上出处哦",5e3,!0)})),I()("#hitokoto").mouseover((function(){var t='这句一言出处是 <span style="color:#0099cc;">『{source}』</span>，是 <span style="color:#0099cc;">{author}</span> 在 {date} 时投稿的！',e=JSON.parse(I()(this)[0].dataset.raw);t=t.render({source:e.source,author:e.author,date:e.date}),q(t,3e3)}));var M=function(t){I.a.each(t.mouseover,(function(t,e){I()(document).on("mouseover",e.selector,(function(){var t=e.text;Array.isArray(e.text)&&(t=e.text[Math.floor(Math.random()*e.text.length+1)-1]),t=t.render({text:I()(this).text()}),q(t,3e3)}))})),I.a.each(t.click,(function(t,e){I()(document).on("click",e.selector,(function(){var t=e.text;Array.isArray(e.text)&&(t=e.text[Math.floor(Math.random()*e.text.length+1)-1]),t=t.render({text:I()(this).text()}),q(t,3e3,!0)}))})),I.a.each(t.seasons,(function(t,e){var a=new Date,n=e.date.split("-")[0],r=e.date.split("-")[1]||n;if(n.split("/")[0]<=a.getMonth()+1&&a.getMonth()+1<=r.split("/")[0]&&n.split("/")[1]<=a.getDate()&&a.getDate()<=r.split("/")[1]){var o=e.text;Array.isArray(e.text)&&(o=e.text[Math.floor(Math.random()*e.text.length+1)-1]),o=o.render({year:a.getFullYear()}),q(o,6e3,!0)}}))};function E(){I.a.getJSON("https://api.imjad.cn/hitokoto/?cat=&charset=utf-8&length=55&encode=json",(function(t){q(t.hitokoto,5e3)}))}function q(t,e,a){(a||""===sessionStorage.getItem("waifu-text")||null===sessionStorage.getItem("waifu-text"))&&(Array.isArray(t)&&(t=t[Math.floor(Math.random()*t.length+1)-1]),a&&sessionStorage.setItem("waifu-text",t),I()(".waifu-tips").stop(),I()(".waifu-tips").html(t).fadeTo(200,1),null===e&&(e=5e3),D(e))}function D(t){I()(".waifu-tips").stop().css("opacity",1),null===t&&(t=5e3),window.setTimeout((function(){sessionStorage.removeItem("waifu-text")}),t),I()(".waifu-tips").delay(t).fadeTo(200,0)}function z(t){var e=parseInt(t),a=0,n=0,r=0;e>60&&(a=parseInt(e/60),e=parseInt(e%60),a>60&&(n=parseInt(a/60),a=parseInt(a%60),n>24&&(r=parseInt(n/24),n=parseInt(n%24))));var o="";return a>0&&(o=parseInt(a)+"分"),n>0&&n<=24&&(o=parseInt(n)+"小时"+o),r>0&&(o=parseInt(r)+"天"+o),o}function F(){var t=window.navigator.userAgent.match(/chrome\/(\d+)/i);return t?+t[1]:null}M(A),function(){var t,e=document.createElement("a");if(""!==document.referrer&&(e.href=document.referrer),""!==e.href&&"imjad.cn"!=e.hostname){e=document.createElement("a");e.href=document.referrer,t='Hello! 来自 <span style="color:#0099cc;">'+e.hostname+"</span> 的朋友";var a=e.hostname.split(".")[1];"baidu"==a?t='Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">'+e.search.split("&wd=")[1].split("&")[0]+"</span> 找到的我吗？":"so"==a?t='Hello! 来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">'+e.search.split("&q=")[1].split("&")[0]+"</span> 找到的我吗？":"google"==a&&(t='Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『'+document.title.split(" - ")[0]+"』</span>")}else if("https://imjad.cn/"==window.location.href){var n=(new Date).getHours();t=n>23||n<=5?"你是夜猫子呀？这么晚还不睡觉，明天起的来嘛":n>5&&n<=7?"早上好！一日之计在于晨，美好的一天就要开始了":n>7&&n<=11?"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！":n>11&&n<=14?"中午了，工作了一个上午，现在是午餐时间！":n>14&&n<=17?"午后很容易犯困呢，今天的运动目标完成了吗？":n>17&&n<=19?"傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~":n>19&&n<=21?"晚上好，今天过得怎么样？":n>21&&n<=23?"已经这么晚了呀，早点休息吧，晚安~":"嗨~ 快来逗我玩吧！"}else I.a.getJSON("https://api.imjad.cn/interface/lastactivity/",(function(e){var a=e.now,n=e.ts,r=a-n;t=r>=2592e3?"我家主人已经出门一个月了，可是到现在也没回来，不会是出什么事了吧，好担心啊":r>=604800?"我家主人已经出门一周了，到现在还没回来，你知道他去哪里了吗？":r>=1800?"我家主人"+z(r)+'前来过，先看看<span style="color:#0099cc;">『'+document.title.split(" - ")[0]+"』</span>吧，有想法可以在评论里留言哦~":r>=120?'真是不巧，我家主人刚才还在，先看看<span style="color:#0099cc;">『'+document.title.split(" - ")[0]+"』</span>吧，有想法可以在评论里留言哦~":'太巧了！我家主人正好在家，对<span style="color:#0099cc;">『'+document.title.split(" - ")[0]+"』</span>有什么想法吗？在评论里留言吧，相信很快就会有回复的说~",q(t,1e4)}));q(t,6e3)}(),window.hitokotoTimer=window.setInterval(E,3e4);a("7a89");n["default"].config.productionTip=!1,new n["default"]({router:k,vuetify:S,render:function(t){return t(b)}}).$mount("#app")},d443:function(t,e,a){},e559:function(t,e,a){"use strict";var n=a("2b22"),r=a.n(n);r.a},ec26:function(t,e,a){t.exports=a.p+"img/1-4-min.c80ec4e3.jpg"},f197:function(t,e,a){"use strict";var n=a("d443"),r=a.n(n);r.a},f97c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-card",{staticStyle:{"margin-top":"12px","box-shadow":"none",overflow:"hidden"},attrs:{color:"rgba(0, 0, 0, 0)",height:"calc(100vh - 80px)"}},[a("v-tabs",{attrs:{dark:"","background-color":"rgba(35, 65, 140, 0.7)","show-arrows":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tabs-slider",{attrs:{color:"teal lighten-3"}}),t._l(t.items,(function(e){return a("v-tab",{key:e},[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])}))],2),a("v-tabs-items",{staticStyle:{height:"calc(100vh - 128px)","background-color":"rgba(35, 65, 140, 0.7)",position:"static"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab-item",{key:e,staticStyle:{height:"100%"}},[a("v-card",{attrs:{flat:"",height:"100%",color:"rgba(0, 0, 0, 0)"}},[a("v-card-text",[t._v("\n\t\t\t\t\t\t"+t._s(t.text)+"\n\t\t\t\t\t")])],1)],1)})),1)],1)],1)},r=[],o=a("d225"),c=a("308d"),s=a("6bb5"),i=a("4e2b"),l=a("9ab4"),u=a("60a3"),p=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.tab=null,t.items=["Appetizers","Entrees","Deserts","Cocktails"],t.text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",t}return Object(i["a"])(e,t),e}(u["b"]);p=Object(l["a"])([Object(u["a"])({components:{}})],p);var d=p,f=d,h=(a("e559"),a("2877")),v=Object(h["a"])(f,n,r,!1,null,"3b1fb82a",null);e["default"]=v.exports}});
//# sourceMappingURL=app.5dae7616.js.map