(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"list-item-date"},[r("p",{staticClass:"list-date"}),t._v(" "),r("p",{staticClass:"list-time"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mode-toggler"},[n("input",{attrs:{type:"checkbox",id:"mode"}}),t._v(" "),n("label",{attrs:{for:"mode"}},[n("img",{attrs:{src:r(226),alt:"lightmode",width:"30",height:"30"}}),t._v(" "),n("img",{attrs:{src:r(227),alt:"darkmode",width:"30",height:"30"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"date-time"},[r("p",{staticClass:"date"}),t._v(" "),r("p",{staticClass:"time"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hamburger"},[r("div",{staticClass:"line line1"}),t._v(" "),r("div",{staticClass:"line line2"}),t._v(" "),r("div",{staticClass:"line line3"})])}],o=(r(26),r(84),r(67),r(30),{data:function(){return{categories:["business","entertainment","health","sports","science","technology"]}},methods:{toTitleCase:function(t){var e=t.split("");return e[0]=e[0].toUpperCase(),e.join("")}},mounted:function(){var t=document.querySelector(".date"),e=document.querySelector(".list-date"),time=document.querySelector(".time"),r=document.querySelector(".list-time"),n=document.querySelector(".hamburger"),o=document.querySelector(".navlinks"),l=document.querySelectorAll(".list-item");!function n(){var o=(new Date).toDateString();t.textContent=o,e.textContent=o;var hr=(new Date).getHours(),l=(new Date).getMinutes(),d=(new Date).getSeconds(),c=hr<12?"AM":"PM";hr=(hr=hr>12?hr-12:hr)<10?"0"+hr:0==hr?12:hr,l=l<10?"0"+l:l,d=d<10?"0"+d:d,time.textContent=hr+":"+l+":"+d,r.textContent=hr+":"+l+":"+d,time.setAttribute("data-attribute",c),r.setAttribute("data-attribute",c),requestAnimationFrame(n)}(),n.addEventListener("click",(function(){var content=document.querySelector(".main-content");n.classList.toggle("clicked"),o.classList.toggle("active"),content.classList.toggle("shifted"),document.body.classList.toggle("fixed")})),l.forEach((function(link){link.addEventListener("click",(function(){var content=document.querySelector(".main-content");o.classList.remove("active"),content.classList.remove("shifted"),n.classList.remove("clicked"),document.body.classList.remove("fixed")}))}));var d=document.querySelector("#mode");d.addEventListener("click",(function(){1==d.checked?document.querySelector("body").classList.add("dark"):document.querySelector("body").classList.remove("dark")}))}}),l=r(57),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"default-header"},[n("nav",{staticClass:"navigation"},[n("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{staticClass:"logo-img",attrs:{src:r(225),alt:"hotNews logo",width:"60",height:"70"}})]),t._v(" "),n("ul",{staticClass:"navlinks"},[t._l(t.categories,(function(e){return n("li",{key:e,staticClass:"list-item"},[n("nuxt-link",{attrs:{to:"/"+e}},[t._v(t._s(t.toTitleCase(e)))])],1)})),t._v(" "),t._m(0)],2),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)],1)])}),n,!1,null,null,null);e.default=component.exports},132:function(t,e,r){"use strict";var n=r(3);r(34),r(26),r(84),r(35),r(67),r(45),r(31),r(24),r(25),r(39);e.a=function(t,e){t.app;var r=t.$http;function o(t,e){return/https:.+/gi.test(t)?e:t}function l(t){for(var e=t.map((function(t){return t.title})),r=[],n=e.length,i=0;i<n;i++)for(var o=0;o<n;o++)i!=o&&e[i]===e[o]&&r.indexOf(e[i])<0&&r.push(e[i]);return t.filter(function(t){return function(e){return t.indexOf(e.title)<0}}(r))}function d(t){return t.filter((function(t){var e=t.source.name,r=t.author,content=t.description,image=t.urlToImage,n=!1;null===e&&null===r||(n=!0);var o=!1;return null==content&&null!==image&&(o=!0),n&&o})).map((function(t){return{title:t.title,url:t.url,date:t.publishedAt}}))}e("fetchFromNewsAPI",function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var n,c,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$get("https://newsapi.org/v2/top-headlines?country=us&category=".concat(e,"&apiKey=6de1cb3976964889989a42bfb2eef149"));case 2:return n=t.sent,t.next=5,n.articles.filter((function(t){var e=t.source.name,r=t.author,content=t.description,image=t.urlToImage,n=!1;null===e&&null===r||(n=!0);var o=!1;return null!==content&&null!==image&&(o=!0),n&&o})).map((function(t){var e,r,n=t.source.name,l=t.author,title=t.title,desc=(e=t.description,(r=e.split(" ")).length>30?r.slice(0,30).join(" ")+"...":e),d=t.url,image=t.urlToImage,c=t.publishedAt;return null!=n&&""!=n||(n=l),null!=l&&""!=l||(l=n),(null==l&&null==n||""==l&&""==n)&&(l="Anonymous",n="Anonymous"),{source:n,author:o(l,n),title:title,content:desc,url:d,img:image,date:c,found:!0}}));case 5:return c=t.sent,t.next=8,d(n.articles);case 8:return m=t.sent,t.abrupt("return",{realNews:l(c),relatedNews:l(m)});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e("logData",(function(data){return console.log(data)}))}},133:function(t,e,r){"use strict";var n=r(3);r(34),r(26),r(84),r(35),r(67),r(45),r(31),r(25),r(39),r(24);e.a=function(t,e){t.app;var r=t.$http;function o(t,e){return/https:.+/gi.test(t)?e:t}function l(t){for(var e=t.map((function(t){return t.title})),r=[],n=e.length,i=0;i<n;i++)for(var o=0;o<n;o++)i!=o&&e[i]===e[o]&&r.indexOf(e[i])<0&&r.push(e[i]);return t.filter(function(t){return function(e){return t.indexOf(e.title)<0}}(r))}function d(t){return t.filter((function(t){var e=t.source.name,r=t.author,content=t.description,image=t.urlToImage,n=!1;null===e&&null===r||(n=!0);var o=!1;return null!=content&&null!=image||(o=!0),n&&o})).map((function(t){return{title:t.title,url:t.url,date:t.published_at}}))}e("fetchFromMediaStack",function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var n,c,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$get("http://api.mediastack.com/v1/news?access_key=16ac44bd926a0dc067f0e4d32ef6e432&categories=".concat(e,"&languages=en"));case 2:return n=t.sent,t.next=5,n.data.filter((function(t){var e=t.source,r=t.author,content=t.description,image=t.image,n=!1;null===e&&null===r||(n=!0);var o=!1;return null!==content&&null!==image&&(o=!0),n&&o})).map((function(t){var e,r,n=t.source.name,l=t.author,title=t.title,desc=(e=t.description,(r=e.split(" ")).length>30?r.slice(0,30).join(" ")+"...":e),d=t.url,image=t.image,c=t.published_at;return null!=n&&""!=n||(n=l),null!=l&&""!=l||(l=n),(null==l&&null==n||""==l&&""==n)&&(l="Anonymous",n="Anonymous"),{source:n,author:o(l,n),title:title,content:desc,url:d,img:image,date:c,found:!0}}));case 5:return c=t.sent,t.next=8,d(n.data);case 8:return m=t.sent,t.abrupt("return",{mediaNews:l(c),mediaRelated:l(m)});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e("logData",(function(data){return console.log(data)}))}},179:function(t,e,r){"use strict";var n={components:{Navigation:r(127).default}},o=r(57),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-container"},[r("Navigation"),t._v(" "),r("Nuxt",{staticClass:"main-content",attrs:{"keep-alive":""}})],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navigation:r(127).default})},181:function(t,e,r){r(182),t.exports=r(183)},216:function(t,e,r){var content=r(217);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("470cbfe5",content,!0,{sourceMap:!1})},217:function(t,e,r){var n=r(82),o=r(218),l=r(219),d=r(220),c=n(!1),m=o(l),h=o(d);c.push([t.i,'*,:after,:before{margin:0;padding:0;box-sizing:border-box}:root{--dark-background:#1d1d1d;--card-background:#202a3c;--main-background:hsla(0,0%,100%,0.8);--alternate-background:#202124;--text-color:#3a3a3a;--darkmode-text:#eee;--unique:#00deee;--fainted-unique:rgba(0,222,238,0.5)}@font-face{font-family:"Source Sans Pro",sans-serif;src:url('+m+') format("ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Montserrat",sans-serif;src:url('+h+') format("ttf");font-style:normal;font-weight:400;font-display:swap}::-webkit-scrollbar{width:.5rem;background:transparent}::-webkit-scrollbar-thumb{background:#00deee;background:var(--unique);box-shadow:inset -5px 2px 5px rgba(0,0,0,.2);border-radius:2rem}body{font-family:"Source Sans Pro",Helvetica,sans-serif;width:100vw;min-height:100vh;overflow-x:hidden;-webkit-overflow-x:hidden;background:hsla(0,0%,100%,.8);background:var(--main-background);color:#3a3a3a;color:var(--text-color);transition:all .3s ease}body.dark{background:#1d1d1d;background:var(--dark-background);color:#eee;color:var(--darkmode-text)}.fixed{height:100%;overflow:hidden}a{text-decoration:none}ul{list-style:none}.main-container{min-height:100vh;width:100vw}.main-content{min-height:inherit;width:inherit}.content{width:90%;min-height:100vh;padding:15vh 0 5rem;margin:0 auto}.cat-content,.category-block{width:100%}.category-block{margin-bottom:7rem}.category-block:last-of-type{margin-bottom:0}.block-text{font-size:2.4rem;font-weight:900;margin-bottom:.7rem}.sub-text{color:rgba(0,0,0,.6);margin-bottom:1.5rem;transition:color .3s ease}.dark .sub-text{color:hsla(0,0%,100%,.7)}.grid-items{display:grid;grid-template-columns:100%;grid-gap:3rem}.article{width:100%;height:350px;position:relative;border-radius:.7rem;overflow:hidden;background:linear-gradient(180deg,rgba(0,0,0,.6),transparent);box-shadow:.2rem .2rem .5rem rgba(0,0,0,.3),.3rem .3rem .5rem rgba(0,0,0,.1)}.dark .article{box-shadow:.2rem .2rem .5rem rgba(0,0,0,.4),.4rem .4rem .5rem rgba(0,0,0,.2)}.article-content{width:100%;height:100%;padding:1rem}.art-img{position:absolute;top:0;left:0;z-index:-1}.art-img,.art-img img{width:100%;height:100%}.art-source{color:hsla(0,0%,100%,.8);font-weight:900;margin-bottom:1rem}.art-source,.art-title{text-shadow:3px 3px 3px hsla(0,0%,100%,.3)}.art-title{color:#eee;color:var(--darkmode-text);font-size:1.5rem;font-weight:700}.read-more{text-decoration:none;font-weight:700;padding:.7rem 1rem;color:#fff;left:5%;top:80%}.read-more,.read-more:before{background:#00deee;background:var(--unique);border-radius:.3rem;position:absolute}.read-more:before{content:"";top:0;left:0;width:100%;height:100%;z-index:-1}.read-more:hover:before{transition:all .3s ease;transform:scale(1.2,1.4);opacity:0}@media (min-width:600px){.content{width:70%}}@media (min-width:768px){.content{width:90%}.grid-items{grid-template-columns:1fr 1fr;grid-column-gap:1rem}}@media (min-width:1024px){.content{width:80%}.grid-items{grid-column-gap:2rem}}@media (min-width:1250px){.category-block{margin-bottom:12rem}.grid-items{grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(10,70px);grid-gap:1rem}.article{height:auto}.article:first-of-type{grid-row:1/5;grid-column:1/3}.article:nth-of-type(2){grid-row:1/6;grid-column:3/4}.article:nth-of-type(3){grid-row:1/6;grid-column:4/5}.article:nth-of-type(4){grid-row:5/10;grid-column:1/2}.article:nth-of-type(5){grid-row:5/10;grid-column:2/3}.article:nth-of-type(6){grid-column:3/5;grid-row:6/10}}@media (min-width:1400px){.content{width:80%}.grid-items{grid-template-rows:repeat(10,50px);grid-gap:1.5rem}.block-text{font-size:3rem;margin-bottom:0}.art-source,.art-title{text-shadow:none}}',""]),t.exports=c},219:function(t,e,r){t.exports=r.p+"fonts/SourceSansPro-Regular.02445a5.ttf"},220:function(t,e,r){t.exports=r.p+"fonts/Montserrat-Regular.3cd7866.ttf"},221:function(t,e,r){var content=r(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("6a0c852f",content,!0,{sourceMap:!1})},222:function(t,e,r){var n=r(82)(!1);n.push([t.i,'.default-header{width:100vw;height:10vh;box-shadow:0 .3rem .4rem rgba(0,0,0,.1);background:#fff;position:fixed;top:0;left:0;z-index:100;transition:all .3s ease}.dark .default-header{background:var(--dark-background);box-shadow:0 .3rem .4rem rgba(0,0,0,.6)}.navigation{width:100%;height:100%;padding:1rem 5rem;background:inherit;display:flex;justify-content:space-between;align-items:center}.hamburger{padding:.7rem;width:20%;max-width:5rem;cursor:pointer;display:none}.line{width:2rem;height:.3rem;background:var(--unique);margin:.5rem 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transform-origin:right;transition:transform .3s cubic-bezier(0,-.83,0,1.64)}.clicked .line2{transform:scaleX(.7);transition-delay:.1s}.clicked .line3{transform:scaleX(.4)}.cat-head{display:none}.navlinks{display:flex;align-items:center;background:var(--main-background);transition:all .3s ease}.dark .navlinks{background:var(--dark-background)}.navlinks li{margin:0 1rem}.list-item-date{display:none}.list-item{position:relative;z-index:1}.list-item a{display:block;padding:.3rem;color:var(--text-color);font-weight:600;transition:color .3s ease}.dark .list-item a{color:var(--unique)}.list-item:hover a{color:var(--darkmode-text)}.list-item:after,.list-item:before{content:"";position:absolute;left:0;width:100%;height:50%;background:var(--unique);z-index:-1;transform:scaleX(0);transition:transform .3s ease}.list-item:before{top:0;transform-origin:left}.list-item:after{top:50%;transform-origin:right}.list-item:hover:after,.list-item:hover:before{transform:scaleX(1)}.date-time,.list-item-date{text-align:center}.date,.list-date,.list-time,.time{white-space:nowrap;font-weight:900;color:var(--unique)}.list-time,.time{position:relative}.list-time{transform:translateX(-1rem)}.list-time:after,.time:after{content:attr(data-attribute);position:absolute;top:0;left:5.8rem}#mode{-moz-appearance:none;appearance:none;-webkit-appearance:none}.mode-toggler label{display:inline-flex;justify-content:space-between;align-items:center;width:4rem;padding:.2rem .5rem;border-radius:1rem;position:relative;cursor:pointer;border:1px solid var(--unique)}.mode-toggler label:before{content:"";position:absolute;left:0;top:0;width:1.7rem;height:1.7rem;background:var(--unique);border-radius:50%;box-shadow:inset -.4rem -.4rem .4rem rgba(0,0,0,.1),-.2rem -.2rem .2rem rgba(0,0,0,.1);transform:translateX(0);transition:all .3s ease}#mode:checked+label:before{transform:translateX(2.15rem)}.mode-toggler label img{height:20px;width:20px}@media (max-width:1200px){.navigation{padding:1rem}}@media (max-width:950px){.main-content{position:relative;transition:all .3s ease}.main-content:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;background:rgba(0,0,0,.3);pointer-events:none;opacity:0;visibility:hidden;transition:all .3s ease}.main-content.shifted:before{visibility:visible;opacity:1}.logo-img{width:50px;height:50px}.navlinks{position:fixed;top:0;left:0;width:40%;height:100%;z-index:-1;background:var(--main-background);display:flex;flex-direction:column;align-items:center;padding:12vh 0 0;transform:translateX(-100%);transition:all .3s ease}.active{transform:translateX(0)}.shifted{transform:translateX(40%);filter:blur(5px);pointer-events:none}.navlinks li{margin:1.5rem 0}.cat-head{margin-bottom:2rem;border-bottom:1px solid var(--text-color);color:var(--text-color);display:block;transition:all .3s ease}.dark .cat-head{border-bottom:1px solid var(--darkmode-text);color:var(--darkmode-text)}.cat-head p{font-size:1.5rem}.hamburger{display:block}}@media screen and (max-width:500px){.navlinks{width:60%}.navlinks li{margin:1rem 0}.date-time{display:none}.list-item-date{display:block;position:absolute;top:84%;left:50%;transform:translateX(-50%)}.list-time:after{right:-5px}.shifted{transform:translateX(60%)}.line{height:.2rem}}',""]),t.exports=n},223:function(t,e,r){var content=r(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("57150805",content,!0,{sourceMap:!1})},224:function(t,e,r){var n=r(82)(!1);n.push([t.i,'.news{width:90%;min-height:100vh;margin:0 auto;padding:15vh 0 5rem}.news-body,.news-content{width:100%;height:inherit}.left,.right{width:100%}.heading{margin-bottom:2.5rem;text-align:center}.newslist{width:100%;list-style:none}.news-item{margin-bottom:2rem;border:1px solid var(--fainted-unique);border-radius:1rem}.img-container{width:100%;height:300px;padding:.5rem}.img-container img{width:100%;height:100%;border-radius:1rem 1rem 0 0}.text-content{padding:.5rem .5rem 1rem}.src-date{display:flex;flex-direction:column;margin-bottom:1rem}.src{color:var(--unique);font-weight:900;line-height:1.2}.datetime{color:rgba(0,0,0,.6);transition:color .3s ease}.dark .datetime{color:hsla(0,0%,100%,.5)}.link-title,.title{color:var(--text-color);font-weight:600;font-size:130%;display:block;margin-bottom:.5rem;transition:color .3s ease}.dark .link-title,.dark .title{color:var(--darkmode-text)}.link-title:hover,.title:hover{color:var(--fainted-unique)}.text{font-family:"Montserrat",sans-serif;margin-bottom:1rem;color:rgba(0,0,0,.6);transition:color .3s ease}.dark .text{color:hsla(0,0%,100%,.6)}.author-browse{display:flex;justify-content:space-between;align-items:center;padding-right:.5rem}.author{font-weight:700}.browse{color:var(--unique);padding:.5rem;border:1px solid var(--unique);white-space:nowrap;position:relative;background:var(--main-background);transition:all .3s ease}.dark .browse{background:var(--dark-background)}.browse:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.browse:hover:before{background:var(--unique);transform:scaleX(1.3) scaleY(1.5);opacity:0;transition:all .3s ease}.right{border:1px solid var(--fainted-unique);padding:.5rem}.other{font-weight:700;font-size:120%;border-bottom:1px solid var(--fainted-unique)}.other,.side-item{margin-bottom:1rem}.side-item:last-of-type{margin-bottom:0}@media screen and (min-width:600px){.news{width:80%}.text{margin-bottom:1.5rem}}@media screen and (min-width:850px){.news{width:90%}.news-item{display:flex;justify-content:space-between;align-items:flex-start;height:300px}.img-container{width:300px;max-height:300px;height:100%;margin-right:10px}.img-container img{width:300px;height:280px;border-radius:1rem 0 0 1rem}.text-content{position:relative;height:100%}.text{margin-bottom:1rem}.author-browse{position:absolute;width:95%;bottom:5%;padding-right:.5rem}.right{width:80%;margin:0 auto}}@media (min-width:1120px){.heading{text-align:left}.text{margin-bottom:1rem}.author-browse{align-items:flex-end;margin-bottom:0}.left{width:60%;float:left;margin-right:1rem}.right{width:30%;float:right;position:fixed;right:5%}}@media (min-width:1300px){.news{width:80%}.link-title{font-size:100%;font-family:"Montserrat"}.text{margin-bottom:2rem}}@media (min-width:1450px){.news-item{height:280px}.img-container img{height:260px}}',""]),t.exports=n},225:function(t,e,r){t.exports=r.p+"img/hotNews.b925466.png"},226:function(t,e,r){t.exports=r.p+"img/sun.8cd62ac.png"},227:function(t,e,r){t.exports=r.p+"img/moon.795154e.png"}},[[181,6,1,7]]]);