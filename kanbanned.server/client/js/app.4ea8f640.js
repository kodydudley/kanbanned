(function(t){function e(e){for(var n,c,r=e[0],i=e[1],l=e[2],d=0,u=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&u.push(s[c][0]),s[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);b&&b(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==s[r]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},c={app:0},s={app:0},o=[];function r(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1281bc5e":"cbbf96ab","chunk-2e95ebc1":"e97b7784","chunk-4debb41e":"fb350145","chunk-8d8d0502":"ef3a2549"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-1281bc5e":1,"chunk-2e95ebc1":1,"chunk-4debb41e":1,"chunk-8d8d0502":1};c[t]?e.push(c[t]):0!==c[t]&&a[t]&&e.push(c[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-1281bc5e":"81fec844","chunk-2e95ebc1":"56af6ad5","chunk-4debb41e":"c4a4ac9c","chunk-8d8d0502":"f8b3b785"}[t]+".css",s=i.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===s))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],d=l.getAttribute("data-href");if(d===n||d===s)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete c[t],b.parentNode.removeChild(b),a(o)},b.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){c[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=r(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(b);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",u.name="ChunkLoadError",u.type=n,u.request=c,a[1](u)}s[t]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var b=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"254c":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["J"])("data-v-39706d5d");Object(n["u"])("data-v-39706d5d");const s={class:"tasksComponent my-3 justify-content-around"},o={class:"mt-5"},r=Object(n["h"])("i",{class:"fas fa-trash-alt"},null,-1),i={class:"dropdown text-right"},l=Object(n["h"])("button",{class:"btn btn-transparent btn-outline-dark dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Move ",-1),d={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},u=Object(n["h"])("p",{class:"text-center"}," Comments: ",-1),b=Object(n["h"])("button",{class:"btn btn-transparent text-success"},[Object(n["h"])("i",{class:"fas fa-comment"})],-1);Object(n["s"])();const p=c((function(t,e,a,c,p,f){const m=Object(n["y"])("comments-component");return Object(n["r"])(),Object(n["e"])("div",s,[Object(n["h"])("div",o,[Object(n["h"])("h4",null,[Object(n["g"])(Object(n["B"])(c.tasks.description)+" ",1),Object(n["h"])("button",{onClick:e[1]||(e[1]=e=>c.deleteTask(t.taskId)),class:"d-flex float-left btn btn-transparent text-danger"},[r])]),Object(n["h"])("div",i,[l,Object(n["h"])("div",d,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.lists,t=>(Object(n["r"])(),Object(n["e"])("a",{class:"dropdown-item",onClick:e=>c.moveTask(t.id),key:t},Object(n["B"])(t.description),9,["onClick"]))),128))])]),u,Object(n["h"])("form",{class:"form-group text-center",onSubmit:e[3]||(e[3]=Object(n["I"])((...t)=>c.createComments(...t),["prevent"]))},[Object(n["H"])(Object(n["h"])("input",{class:"form-control",type:"text",placeholder:"Enter Comment","onUpdate:modelValue":e[2]||(e[2]=t=>c.state.description=t)},null,512),[[n["D"],c.state.description]]),b],32)]),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.comments,t=>(Object(n["r"])(),Object(n["e"])(m,{key:t,"comments-prop":t},null,8,["comments-prop"]))),128))])}));var f=a("63b7"),m=a("7d8d"),h=a("83fc"),O={name:"TasksComponent",props:["tasksProp","listsProp"],setup(t){const e=Object(n["v"])({description:"",newComment:{}});return Object(n["p"])(()=>{m["a"].getComments(t.tasksProp._id)}),{state:e,tasks:Object(n["c"])(()=>t.tasksProp),comments:Object(n["c"])(()=>h["a"].comments[t.tasksProp._id]),lists:Object(n["c"])(()=>h["a"].lists),moveList:Object(n["c"])(()=>t.listsProp),deleteTask(){f["a"].deleteTask(t.tasksProp)},createComments(){m["a"].createComments(e.description,t.tasksProp._id),e.description=""},moveTask(e){f["a"].moveTask(t.tasksProp,e)}}},components:{}};O.render=p,O.__scopeId="data-v-39706d5d";e["default"]=O},2881:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["J"])("data-v-717d4cfa");Object(n["u"])("data-v-717d4cfa");const s={class:"boardsComponent my-3 col-4 justify-content-around"},o={class:"card shadow-lg shadow-warning bg-dark pt-4"},r={class:"text-light bodyFont"},i=Object(n["h"])("i",{class:"fas fa-trash-alt"},null,-1);Object(n["s"])();const l=c((function(t,e,a,l,d,u){const b=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["e"])("div",s,[Object(n["h"])("div",o,[Object(n["h"])(b,{to:{name:"ActiveBoard",params:{boardId:l.boards._id}}},{default:c(()=>[Object(n["h"])("div",r,[Object(n["h"])("h3",null,Object(n["B"])(l.boards.title),1)])]),_:1},8,["to"]),Object(n["h"])("button",{class:"d-flex float-left btn btn-transparent text-danger",onClick:e[1]||(e[1]=e=>l.deleteBoard(t.boardId))},[i])])])}));var d=a("83fc"),u=a("37c0"),b=a("1940"),p=a.n(b),f={name:"BoardsComponent",props:["boardsProp"],setup(t){return{profile:Object(n["c"])(()=>d["a"].profile),boards:Object(n["c"])(()=>t.boardsProp),deleteBoard(){p()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this board!",icon:"warning",buttons:!0,dangerMode:!0}).then(e=>{e?(u["a"].deleteBoard(t.boardsProp._id),p()("Poof! Your board has been deleted!",{icon:"success"})):p()("Your board is safe!")})}}},components:{}};a("fdbb");f.render=l,f.__scopeId="data-v-717d4cfa";e["default"]=f},"2b20":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return r}));var n=a("bc3a"),c=a.n(n);const s=window.location.origin.includes("localhost")?"http://localhost:3000":"",o=c.a.create({baseURL:s+"/api",timeout:8e3}),r=function(t){o.defaults.headers.authorization=t}},3524:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("83fc"),c=a("8a4e"),s=a("2b20");class o{async createLists(t){try{const e={description:t,board:n["a"].activeBoard.id},a=await s["a"].post("/lists",e);this.getLists(n["a"].activeBoard.id),c["a"].log(a.data)}catch(e){c["a"].error(e)}}async getLists(t){try{const e=await s["a"].get("/boards/"+t+"/lists");n["a"].lists=e.data}catch(e){c["a"].error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async deleteList(t){try{await s["a"].delete("/lists/"+t.id),this.getLists(t.board)}catch(e){c["a"].error(e)}}async getActiveList(t){try{const e=await s["a"].get("/Lists/"+t);c["a"].log("from the service"),n["a"].activeList=e.data}catch(e){c["a"].error(e)}}}const r=new o},"37c0":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("83fc"),c=a("8a4e"),s=a("2b20");class o{async createBoards(t){try{const e=await s["a"].post("/boards",t);this.getBoards(),c["a"].log(e.data)}catch(e){c["a"].error(e)}}async getBoards(){try{const t=await s["a"].get("/boards");n["a"].boards=t.data}catch(t){c["a"].error("HAVE YOU STARTED YOUR SERVER YET???",t)}}async deleteBoard(t){try{await s["a"].delete("/boards/"+t),this.getBoards()}catch(e){c["a"].error(e)}}async getActiveBoard(t){try{const e=await s["a"].get("/boards/"+t);c["a"].log("from the service"),n["a"].activeBoard=e.data}catch(e){c["a"].error(e)}}}const r=new o},"41cb":function(t,e,a){"use strict";var n=a("6c02"),c=a("8816");function s(t){return()=>a("a2f9")(`./${t}.vue`)}const o=[{path:"/",name:"Home",component:s("HomePage")},{path:"/about",name:"About",component:s("AboutPage")},{path:"/profile",name:"Profile",component:s("ProfilePage"),beforeEnter:c["a"]},{path:"/boards/:boardId",name:"ActiveBoard",component:s("ActiveBoardPage"),beforeEnter:c["a"]}],r=Object(n["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(n["b"])(),routes:o});e["a"]=r},"4bf6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["h"])("footer",null,[Object(n["h"])("div",{class:"bg-dark text-light text-center p-4"}," Made to Organyze Your Life ")],-1);function s(t,e,a,s,o,r){const i=Object(n["y"])("Navbar"),l=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["h"])("header",null,[Object(n["h"])(i)]),Object(n["h"])("main",null,[Object(n["h"])(l,null,{default:Object(n["G"])(({Component:t})=>[Object(n["h"])(n["b"],{name:"route",mode:"out-in"},{default:Object(n["G"])(()=>[(Object(n["r"])(),Object(n["e"])(Object(n["z"])(t)))]),_:2},1024)]),_:1})]),c],64)}var o=a("83fc"),r={name:"App",setup(){return{appState:Object(n["c"])(()=>o["a"])}}};a("9cdc");r.render=s;var i=r;function l(t){const e=a("ccc2");e.keys().forEach(a=>{const n=e(a),c=n.default||n,s=c.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(s,c)})}var d=a("41cb");const u=Object(n["d"])(i);l(u),u.use(d["a"]).mount("#app")},"63b7":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("83fc"),c=a("8a4e"),s=a("2b20");class o{async createTasks(t,e){try{const a={description:t,list:e.id},n=await s["a"].post("/tasks",a);this.getTasks(e.id),c["a"].log(n.data)}catch(a){c["a"].error(a)}}async moveTask(t,e){try{const a={list:e};await s["a"].put("tasks/"+t.id,a),this.getTasks(e),this.getTasks(t.listId)}catch(a){c["a"].error(a)}}async getTasks(t){try{const e=await s["a"].get("/lists/"+t+"/tasks");n["a"].tasks[t]=e.data}catch(e){c["a"].error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async deleteTask(t){try{await s["a"].delete("/tasks/"+t.id),this.getTasks(t.list)}catch(e){c["a"].error(e)}}async getActiveTask(t){try{const e=await s["a"].get("/tasks/"+t);c["a"].log("from the service"),n["a"].activeTask=e.data}catch(e){c["a"].error(e)}}}const r=new o},"7d8d":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("83fc"),c=a("8a4e"),s=a("2b20");class o{async createComments(t,e){try{const a={description:t,task:e},n=await s["a"].post("/comments",a);this.getComments(e),c["a"].log(n.data)}catch(a){c["a"].error(a)}}async getComments(t){try{const e=await s["a"].get("/tasks/"+t+"/comments");n["a"].comments[t]=e.data}catch(e){c["a"].error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async deleteComment(t){try{await s["a"].delete("/comments/"+t.id),this.getComments(t.task)}catch(e){c["a"].error(e)}}async getActiveComment(t){try{const e=await s["a"].get("/comments/"+t);c["a"].log("from the service"),n["a"].activeComment=e.data}catch(e){c["a"].error(e)}}}const r=new o},"83fc":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("7a23");const c=Object(n["v"])({user:{},profile:{},boards:[],activeBoard:{},lists:[],activeList:{},tasks:{},activeTask:{},comments:{},activeComment:{}})},"8a4e":function(t,e,a){"use strict";function n(t,e){window.location.origin.includes("localhost")&&console[t](...e)}a.d(e,"a",(function(){return c}));const c={log(){n("log",arguments)},error(){n("error",arguments)},warn(){n("warn",arguments)},assert(){n("assert",arguments)},trace(){n("trace",arguments)}}},"956e":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["J"])("data-v-05319e9d");Object(n["u"])("data-v-05319e9d");const s={class:"commentsComponent my-3"},o=Object(n["h"])("i",{class:"fas fa-times"},null,-1);Object(n["s"])();const r=c((function(t,e,a,c,r,i){return Object(n["r"])(),Object(n["e"])("div",s,[Object(n["h"])("p",null,[Object(n["g"])(Object(n["B"])(c.comments.description)+" ",1),Object(n["h"])("button",{onClick:e[1]||(e[1]=e=>c.deleteComment(t.comment)),class:"d-flex float-left btn btn-transparent text-danger"},[o])])])}));var i=a("7d8d"),l={name:"CommentsComponent",props:["commentsProp","tasksProp"],setup(t){return{comments:Object(n["c"])(()=>t.commentsProp),deleteComment(){i["a"].deleteComment(t.commentsProp)}}},components:{}};l.render=r,l.__scopeId="data-v-05319e9d";e["default"]=l},"9cdc":function(t,e,a){"use strict";a("d673")},"9d8d":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["J"])("data-v-9fc91b5a");Object(n["u"])("data-v-9fc91b5a");const s={class:"navbar navbar-expand-lg navbar-dark bg-dark headerFont"},o=Object(n["h"])("div",{class:"d-flex flex-column align-items-center"},[Object(n["h"])("i",{class:"fas fa-sitemap fa-lg"}),Object(n["h"])("h4",{class:"headerFont"}," organyze ")],-1),r=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarText"},l={class:"navbar-nav mr-auto"},d={class:"nav-item mr-2"},u=Object(n["g"])(" Home "),b={class:"nav-item mr-2"},p=Object(n["g"])(" About "),f={class:"nav-item mr-2"},m=Object(n["h"])("div",{class:"nav-link headerFont"}," Profile ",-1),h={class:"navbar-text"},O={key:1,class:"dropdown"},j={class:"mx-3"};Object(n["s"])();const v=c((function(t,e,a,v,g,k){const y=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["e"])("nav",s,[Object(n["h"])(y,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:c(()=>[o]),_:1}),r,Object(n["h"])("div",i,[Object(n["h"])("ul",l,[Object(n["h"])("li",d,[Object(n["h"])(y,{to:{name:"Home"},class:"nav-link headerFont"},{default:c(()=>[u]),_:1})]),Object(n["h"])("li",b,[Object(n["h"])(y,{to:{name:"About"},class:"nav-link headerFont"},{default:c(()=>[p]),_:1})]),Object(n["H"])(Object(n["h"])("li",f,[Object(n["h"])(y,{to:{name:"Profile"}},{default:c(()=>[m]),_:1})],512),[[n["E"],v.user.isAuthenticated]])]),Object(n["h"])("span",h,[v.user.isAuthenticated?(Object(n["r"])(),Object(n["e"])("div",O,[Object(n["h"])("div",{class:"dropdown-toggle",onClick:e[2]||(e[2]=t=>v.state.dropOpen=!v.state.dropOpen)},[Object(n["h"])("img",{src:v.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(n["h"])("span",j,Object(n["B"])(v.user.name),1)]),Object(n["h"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:v.state.dropOpen}],onClick:e[4]||(e[4]=t=>v.state.dropOpen=!1)},[Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[3]||(e[3]=(...t)=>v.logout(...t))}," logout ")],2)])):(Object(n["r"])(),Object(n["e"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>v.login(...t))}," Login "))])])])}));var g=a("b012"),k=a("83fc"),y={name:"Navbar",setup(){const t=Object(n["v"])({dropOpen:!1});return{state:t,user:Object(n["c"])(()=>k["a"].user),async login(){g["a"].loginWithPopup()},async logout(){await g["a"].logout({returnTo:window.location.origin})}}}};a("e2a4");y.render=v,y.__scopeId="data-v-9fc91b5a";e["default"]=y},a2f9:function(t,e,a){var n={"./AboutPage.vue":["478b","chunk-2e95ebc1"],"./ActiveBoardPage.vue":["9e4d","chunk-4debb41e"],"./HomePage.vue":["78a7","chunk-8d8d0502"],"./ProfilePage.vue":["1a3e","chunk-1281bc5e"]};function c(t){if(!a.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],c=e[0];return a.e(e[1]).then((function(){return a(c)}))}c.keys=function(){return Object.keys(n)},c.id="a2f9",t.exports=c},b012:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a("8816"),c=a("83fc");const s="dev-pzcm2dal.us.auth0.com",o="ADtK70VuxjHJFKcRcXlbwwjau2tCnzD3",r="https://kanban";var i=a("41cb"),l=a("2b20"),d=a("8a4e");class u{async getProfile(){try{const t=await l["a"].get("/profile");c["a"].profile=t.data}catch(t){d["a"].error("HAVE YOU STARTED YOUR SERVER YET???",t)}}}const b=new u,p=Object(n["b"])({domain:s,clientId:o,audience:r,onRedirectCallback:t=>{i["a"].push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});p.on(p.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(l["b"])(p.bearer),c["a"].user=p.user,await b.getProfile(),i["a"].push({name:"Profile"})}))},c390:function(t,e,a){},ccc2:function(t,e,a){var n={"./BoardsComponent.vue":"2881","./CommentsComponent.vue":"956e","./ListsComponent.vue":"d024","./TasksComponent.vue":"254c","./navbar.vue":"9d8d"};function c(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=s,t.exports=c,c.id="ccc2"},d024:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["J"])("data-v-a0ef8fde");Object(n["u"])("data-v-a0ef8fde");const s={class:"card col-3 mx-3 my-3"},o={class:"listsComponent my-3"},r={class:"card text-center"},i=Object(n["h"])("i",{class:"fas fa-trash-alt"},null,-1),l={class:"card"},d=Object(n["h"])("p",null,"Tasks:",-1),u=Object(n["h"])("button",{type:"submit",class:"btn btn-transparent text-success"},[Object(n["h"])("i",{class:"fas fa-plus-square"})],-1),b=Object(n["h"])("i",{class:"fas fa-arrow-circle-down text-success float-left fa-lg mt-3"},null,-1),p={key:0};Object(n["s"])();const f=c((function(t,e,a,c,f,m){const h=Object(n["y"])("tasks-component");return Object(n["r"])(),Object(n["e"])("div",s,[Object(n["h"])("div",o,[Object(n["h"])("div",r,[Object(n["h"])("h1",null,[Object(n["g"])(Object(n["B"])(c.lists.description)+" ",1),Object(n["h"])("button",{onClick:e[1]||(e[1]=(...t)=>c.deleteList(...t)),class:"d-flex float-left btn btn-transparent text-danger"},[i])]),Object(n["h"])("div",l,[d,Object(n["h"])("form",{class:"form-group",onSubmit:e[3]||(e[3]=Object(n["I"])((...t)=>c.createTasks(...t),["prevent"]))},[Object(n["H"])(Object(n["h"])("input",{class:"form-control",type:"text",placeholder:"Enter New Task","onUpdate:modelValue":e[2]||(e[2]=t=>c.state.description=t)},null,512),[[n["D"],c.state.description]]),u],32)])]),Object(n["h"])("div",{onClick:e[4]||(e[4]=t=>c.state.showTasks=!c.state.showTasks)},[b]),c.state.showTasks?(Object(n["r"])(),Object(n["e"])("div",p,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.tasks,t=>(Object(n["r"])(),Object(n["e"])(h,{key:t,"tasks-prop":t},null,8,["tasks-prop"]))),128))])):Object(n["f"])("",!0)])])}));var m=a("3524"),h=a("63b7"),O=a("83fc"),j=a("1940"),v=a.n(j),g={name:"ListsComponent",props:["listsProp"],setup(t){const e=Object(n["v"])({description:"",newTask:{},showTasks:!1});return Object(n["p"])(()=>{h["a"].getTasks(t.listsProp._id)}),{state:e,lists:Object(n["c"])(()=>t.listsProp),tasks:Object(n["c"])(()=>O["a"].tasks[t.listsProp._id]),deleteList(){v()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this list!",icon:"warning",buttons:!0,dangerMode:!0}).then(e=>{e?(m["a"].deleteList(t.listsProp),v()("Poof! Your list has been deleted!",{icon:"success"})):v()("Your list is safe!")})},createTasks(){h["a"].createTasks(e.description,t.listsProp),e.description=""}}},components:{}};g.render=f,g.__scopeId="data-v-a0ef8fde";e["default"]=g},d673:function(t,e,a){},e2a4:function(t,e,a){"use strict";a("4bf6")},fdbb:function(t,e,a){"use strict";a("c390")}});