!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0),r=n(2),l=n(3),o=n(4),c=n(5),s=n(6),i=n(7),d=n(9);r.render(a.createElement(l.Root,{compiler:"TypeScript",framework:"React"}),document.getElementById("root")),r.render(a.createElement(o.Nav,{compiler:"TypeScript",framework:"React"}),document.getElementById("nav")),r.render(a.createElement(c.Row,{compiler:"TypeScript",framework:"React"}),document.getElementById("row")),r.render(a.createElement(s.Main,{compiler:"TypeScript",framework:"React"}),document.getElementById("main")),r.render(a.createElement(i.Chat,{compiler:"TypeScript",framework:"React"}),document.getElementById("chat")),r.render(a.createElement(d.ChatList,{compiler:"TypeScript",framework:"React"}),document.getElementById("chatList"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0);class r extends a.Component{render(){return a.createElement("div",null,a.createElement("div",{id:"nav"}),a.createElement("div",{id:"row"}))}}t.Root=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0);class r extends a.Component{render(){return a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-3"},a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),a.createElement(l,null),a.createElement(o,null))}}function l(){return a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.createElement("span",{className:"navbar-toggler-icon"}))}function o(){return a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},a.createElement("ul",{className:"navbar-nav mr-auto"},a.createElement(c,null),a.createElement(s,null),a.createElement(i,null),a.createElement(d,null)),a.createElement(u,null))}function c(){return a.createElement("li",{className:"nav-item active"},a.createElement("a",{className:"nav-link",href:"#"},"Home",a.createElement("span",{className:"sr-only"},"(current)")))}function s(){return a.createElement("li",{className:"nav-item"},a.createElement("a",{className:"nav-link",href:"#"},"Link"))}function i(){return a.createElement("li",{className:"nav-item dropdown"},a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown"),a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),a.createElement("div",{className:"dropdown-divider"}),a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here")))}function d(){return a.createElement("li",{className:"nav-item"},a.createElement("a",{className:"nav-link disabled",href:"#"},"Disabled"))}function u(){return a.createElement("form",{className:"form-inline my-2 my-lg-0"},a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),a.createElement("button",{className:"btn btn-outline-info my-2 my-sm-0",type:"submit"},"Search"))}t.Nav=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0);class r extends a.Component{render(){return a.createElement("div",{className:"row justify-content-center w-100 m-0"},a.createElement("div",{className:"col-12 col-xl-9"},a.createElement("div",{id:"main"}),a.createElement("div",{id:"chat"})),a.createElement("div",{className:"col-xl-3"},a.createElement("div",{id:"chatList"})))}}t.Row=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0);class r extends a.Component{render(){return a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},a.createElement("iframe",{className:"embed-responsive-item",src:"./Live2d/Sample/TypeScript/Demo/index.html",scrolling:"no"}))}}t.Main=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0),r=n(8);class l extends a.Component{constructor(e){super(e),this.state={value:""},this.handleChange=this.handleChange.bind(this),this.handleClick=this.handleClick.bind(this)}handleChange(e){this.setState({value:e.target.value})}handleClick(e){(new r.XHR).get(`https://us-central1-yunagilab.cloudfunctions.net/helloWorld?text=${this.state.value}`),e.preventDefault()}render(){return a.createElement("div",{className:"input-group mb-3"},a.createElement("input",{type:"text",className:"form-control",placeholder:"chat","aria-label":"chat","aria-describedby":"button-addon2",value:this.state.value,onChange:this.handleChange}),a.createElement("div",{className:"input-group-append"},a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon",onClick:this.handleClick},"Send")))}}t.Chat=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.XHR=class{constructor(){this.get=e=>this.request(e,{},"GET",""),this.post=(e,t)=>this.request(e,{"Content-type":"application/json"},"POST",JSON.stringify(t)),this.put=(e,t)=>this.request(e,{"Content-type":"application/json"},"PUT",JSON.stringify(t)),this.delete=e=>this.request(e,{},"DELETE",""),this.request=(e,t,n,a)=>new Promise((r,l)=>{const o=new XMLHttpRequest;o.open(n,e,!0);for(let[e,n]of Object.entries(t))o.setRequestHeader(e,n);o.onreadystatechange=()=>{o.readyState===XMLHttpRequest.DONE&&(200===o.status?r(o.responseText):l(o.statusText))},o.onerror=()=>l(o.statusText),o.send(a)})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0);class r extends a.Component{render(){return a.createElement("ul",{id:"chatlist-ul",className:"list-group overflow-auto border border-light rounded"})}}t.ChatList=r}]);
//# sourceMappingURL=bundle.js.map