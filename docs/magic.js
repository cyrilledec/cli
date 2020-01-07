"use strict";function b(a){return o(a)||c(a)||m()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a,b){if(null==a)return{};var c,d,f=e(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(f[c]=a[c])}return f}function e(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function f(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function j(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?f(Object(b),!0).forEach(function(c){k(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):f(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a,b){return o(a)||n(a,b)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function o(a){if(Array.isArray(a))return a}function q(a){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},q(a)}var r=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,q=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,q))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==q[A]&&o(c,A,n[A],q[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===q(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),s=r.h,h=r.app,i=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===q(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return s(a,{},b);return s(a,b,d)}},t=i("a"),a=i("button"),u=i("circle"),v=i("code"),w=i("div"),x=i("footer"),y=i("g"),g=i("h2"),z=i("h3"),A=i("h4"),B=i("h5"),C=i("header"),D=i("img"),E=i("input"),F=i("label"),G=i("li"),H=i("link"),I=i("main"),J=i("meta"),K=i("nav"),L=i("ol"),M=i("p"),p=i("path"),N=i("pre"),O=i("script"),P=i("span"),Q=i("svg"),R=i("title"),S=i("ul"),T=i("view"),U={description:"declarative cli wrapper for @magic",gdpr:{allowed:[],show:!0},logotext:"@magic/cli",menu:[{text:"install",to:"/#install"},{text:"caveats",to:"/#caveats"},{text:"usage",to:"/#usage"},{text:"argv",to:"/#argv"},{text:"commands",to:"/#commands"},{text:"help",to:"/#help"},{items:[{text:"pure",to:"-pure"},{text:"append / prepend",to:"-prepend-append"},{text:"default",to:"-default"}],text:"configuration",to:"/#config"},{text:"clean",to:"/#clean"},{text:"required",to:"/#required"},{text:"source",to:"/#source"}],pageClass:{},root:"/cli/",theme:"dark",title:"@magic/cli",url:"/cli/"},V={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},W=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[z(b?da({to:b},i):i),h.map(function(c){var d=l(c,2),e=d[0],f=d[1];return f.map(function(c){return X(j({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},X=function(a){return w([A([a.day,"-",a.month,"-",a.year," - ",da({to:a.name},a.title)]),M(a.description)])},Y=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),w([g(c?da({to:b},d):d),Object.entries(e[d]).map(function(c){var d=l(c,2),e=d[0],f=d[1];return W(j({},a,{month:e,days:f,link:b}))})])},Z=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return x({class:"Footer"},[w({class:"Container"},[a,w({class:"Credits"},["made with a few bits of ",da({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])},$=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,q=void 0===o?"All":o,r=c.allowText,s=void 0===r?"Selected":r,t=c.denyText,v=void 0===t?"None":t;if(!f)return w({class:"Gdpr"},Q({class:"ShowHide",onclick:[la.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[y([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),u({cx:"192",cy:"128",r:"32"}),u({cx:"128",cy:"256",r:"32"}),u({cx:"288",cy:"384",r:"32"}),u({cx:"272",cy:"272",r:"16"}),u({cx:"400",cy:"336",r:"16"}),u({cx:"176",cy:"368",r:"16"})])]));var x=!!e.length;return w({class:"Gdpr"},[E({type:"checkbox",name:"show-hide",id:"show-hide",checked:!f}),w({class:"Container"},[h&&z(h),j&&M(j),x&&[S(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return G({class:"Cookie"},[E({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[la.gdpr.toggleAllow,{name:b}]}),(d||e)&&F({for:b},[d&&A(d),e&&M(e)])])}))],x?[B(n),F({class:"button allow all",for:"show-hide",onclick:la.gdpr.allow},q),F({class:"button allow",for:"show-hide",onclick:la.gdpr.close},s),F({class:"button allow none",for:"show-hide",onclick:la.gdpr.deny},v)]:F({class:"button",for:"show-hide",onclick:la.gdpr.close},l)])])},_=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,i=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=l(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=l(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return i.length?S({class:"GitBadges"},i.map(function(a){var b=a.to,c=a.src;return G([da({to:b},ba({src:c}))])})):void 0},aa=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,e=a.menu,f=a.logotext,g=d(a,["logo","menu","logotext"]);return c||e||f?C({class:"Header"},[(c||f)&&da({to:g.root,class:"Logo"},[c&&ba(c),f&&P(f)]),e&&ea({state:g,items:e}),b]):void 0},ba=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),D(a)},ca=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:la.changeTheme})},da=function(a,b){var c=a.to,e=a.action,f=void 0===e?la.go:e,g=d(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=d(g,["href","text","nofollow","noreferrer"]);c=c||h||"",l.href=c;var m="/"===c[0]||"#"===c[0];return m?l.onclick=[f,ka.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),t(l,[i,b])},ea=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),K({className:c},S(e.map(function(a){return fa(j({},a,{url:g,root:i,collapse:void 0===d||d}))})))},fa=function(a){var b=a.text,c=a.items,e=void 0===c?[]:c,f=a.url,g=a.root,h=a.parentTo,i=void 0===h?void 0:h,k=a.collapse,l=d(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;n.startsWith("/#")&&(n=n.substr(1));var o=l.to[0],p="/"===o||"-"===o||"#"===o;i&&p&&("-"===o||"#"===o)&&(n=i+n);var q=n.startsWith(g);g&&p&&!q&&(n=g+n),l.to=n.replace(/\/\//g,"/"),l.to===f&&(m["class"].active=!0);var r=[],s=f.startsWith(l.to)||!k;return s&&e.length&&(r=S(e.map(function(a){return fa(j({parentTo:l.to,url:f,root:g,collapse:k},a))}))),G(m,[l.to?ga(l,b):P(l,b),r])},ga=function(a,b){return da(a,b)},ha=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return I(e,w({class:{Wrapper:!0}},[ja({state:d,page:c}),b]))},ia=function(b,c){"string"==typeof b?b={content:b}:c&&(b=j({content:c},b));var d=b,f=d.content,g=d.lines;return w({class:{Pre:!0,lines:!(void 0!==g)||g}},[w({class:"menu"},[a({onclick:[la.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),N(ka.pre.format(f))])},ja=function(a){var b=a.page,c=a.state;return[aa(c),w({class:"Page",id:"page"},b),Z(c)]},ka={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=ka.db.init(),g=ka.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=ka.db.init(),f=void 0;return d&&e[d]&&(f=ka.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=ka.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(b){if("string"!=typeof b)return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(""!==b){var g="";return"state"===b?g="state":"actions"===b?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(b=P({class:g},b)),b}}),b},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return da({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[m(a.substring(0,b)),m(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){if(!a.includes("://"))return m(a);var b=a.split("://"),c=l(b,2),d=c[0],e=c[1];return d.match(/[a-z]/g)?a:da({to:a},a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var c=a.replace(/"/g,"'"),d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=m(k[0]):1<k.length&&(k=m(k.join("'")));var l=[];return l="undefined"==typeof h?e(a):[e(g),P({class:"string"},["'",j(h),"'"]),k],l},m=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),P({class:"comment"},[e,"// ",m(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},n=function(a){return v({class:"line"},m(a))};return{format:function format(a){return a.trim().split("\n").map(n)}}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},la={changeTheme:function changeTheme(a){return j({},a,{pageClass:j({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[j({},a,{gdpr:j({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[ka.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[la.gdpr.show,{show:!1}]}]]},close:function close(a){return[j({},a,{gdpr:j({},a.gdpr,{show:!1})}),[ka.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[la.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[j({},a,{gdpr:j({},a.gdpr,{allowed:[]})}),[ka.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[la.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show;return b.value&&(c=b.value.show),"boolean"==typeof c?(a.gdpr.show=c,j({},a)):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),j({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=l(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url){if(h&&h===a.hash)return a;window.scroll({top:0,behaviour:"smooth"})}return window.history.pushState({url:f,hash:h},"",c),h?window.location.hash=h:window.scroll({top:0,behaviour:"smooth"}),j({},a,{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scroll(0,0),j({},a,{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},ma={"/cli/":function cli(){return[g("@magic/cli"),M(["declarative cli sanitization and execution for ",da({to:"https://magic.github.io"},"@magic")]),M("sanitizes cli flags from aliases to default names"),M("rewrites process.argv accordingly"),M("provides autogenerated --help output (that can be customized)"),M("also handles commands and environment for you"),M("exports a commonjs file that allows to launch mjs files as cli's"),_("magic/cli"),z({id:"install"},"install"),M("be in a nodejs project"),ia("npm i --save-dev @magic/cli"),z({id:"caveats"},"caveats"),M(["there are some quirks that need some careful consideration when designing a cli api"," depending on your requirements, these caveats may or may not apply."]),L([G([A("last argument"),M(["if your last argument does not have a corresponding flag,"," it will still be assigned to the last flag prior to it.",B("workaround"),M("do not design a cli with a trailing command."),M("TODO: add a config bool.")])]),G([A("option argument and command name clash"),M(["if one of your options gets an argument that is equal to a command, "," this command will be executed",B("workaround"),M("do not name your commands like the possible arguments.")])]),G([A("flag arguments can not start with a dash"),M("cli arguments that start with a - will always be treated as flags, not values."),B("workaround"),M("do not design a cli that accepts arguments that start with a -")])]),M("those issues might get addressed in the future."),z({id:"usage"},"Usage"),M("full api example"),ia("\n#!/usr/bin/env node\n\n// ./bin.mjs\nconst spawnCli = require('@magic/cli')\n\nconst argv = ['--flag1', '--flag2', '/file/path/cli.mjs']\n\nconst cmd = 'node' // default\n\nspawnCli(argv, cmd)\n"),ia("\n// ./bin.mjs\n\nimport cli from '@magic/cli/src/index.mjs''\n\nconst { argv, env, commands } = cli({\n  commands: [\n    ['cmd1', 'cmd1alias'],\n    'cmd2',\n  ],\n  options: [\n    ['--flag1', '-f1'],\n    ['--flag2', '-f2'],\n  ],\n  default: {\n    '--default-key': 'default-value',\n  },\n  single: [\n    '--default-key',\n  ],\n  required: [\n    '--default-key',\n  ],\n  env: [[['--production', '--prod', '--p', '-p'], 'NODE_ENV', 'production']],\n  pure: true, // do neither change process.argv nor process.env\n  pureArgv: true, // do not change process.argv\n  pureEnv: true, // do not change process.env\n})"),z({id:"argv"},"options / argv"),M("argv mappings will handle options and option aliases"),M(["using the ",da({to:"/#usage"},"cli file")," above"]),M("then, in your terminal / bash"),ia("bin.mjs -f1 arg1 arg2 -f2"),M("resulting process.argv"),ia("\nprocess.argv = [\n  '/path/to/bin/node',\n  '/path/to/bin.mjs',\n  '--flag1'\n  'arg1',\n  'arg2',\n  '--flag2',\n]"),M("returned javascript object"),ia("argv === { '--flag1': ['arg1', arg2], '--flag2': []}"),z({id:"commands"},"commands"),M("cli commands can be handled too."),ia("\nimport cli from '@magic/cli/src/index.mjs''\n\nconst args = {\n  commands: [\n    ['dev', 'development', 'start'],\n    'serve',\n  ],\n}\n\nconst argv = cli(args)\n\n// call\n./bin.mjs dev serve\n\n// results:\n{\n  cmds: ['dev', 'serve'],\n  commands: ['dev', 'serve'],\n}"),z({id:"help"},"help output"),M(["@magic/cli will derive a help text from your configuration.","help itself can be configured to provide better error messages"]),A({id:"help-simple"},"simple help message"),ia("\nimport cli from '@magic/cli/src/index.mjs''\n\nconst args = {\n  commands: [['magic', 'm']],\n  options: [['--spell', '-s']],\n  env: [[['dev', 'development'], 'NODE_ENV', 'development']],\n  prepend: 'prepend',\n  append: 'append',\n  help: 'custom help text',\n}\n\nconst argv = cli(args)\n\n// running\n./bin.mjs\n// without arguments\n\n// help output\n`\n@magic/cli wrapped cli.\n\ncustom help text\n\ncli commands\nmagic - aliases: [\"m\"]\n\n\npossible command line flags:\n--spell - aliases: [\"-s\"]\n\n\nenvironment switches:\ndev: set NODE_ENV to development - aliases [\"development\"]\n`"),A({id:"help-detailed"},"detailed help message"),M("the help property will accept an object which maps to the args object"),ia("\nimport cli from '@magic/cli/src/index.mjs''\n\nconst args = {\n  commands: [['magic', 'm']],\n  options: [['--spell', '-s']],\n  env: [[['dev', 'development'], 'NODE_ENV', 'development']],\n  prepend: 'prepend',\n  append: 'append',\n  help: {\n    name: 'cli name',\n    text: 'custom help text',\n    commands: {\n      magic: 'magic info help text',\n    },\n    options: {\n      '--spell': 'cast a simple spell',\n    },\n    env: ['dev', 'set environment to development'],\n  },\n}\n\nconst argv = cli(args)\n\n// running\n./bin.mjs\n// without arguments\n\n// help output\n`\ncli name\n\ncustom help text\n\ncommands:\nmagic - aliases: [\"m\"]\n\nflags:\n--spell - aliases: [\"-s\"]\n\nenvironment switches:\ndev: set process.NODE_ENV to development - aliases [\"development\"]\n`"),A({id:"clean"},"clean"),M("some cli arguments will be expected to return a string instead of a list of arguments."),M("this can be achieved using the single array"),ia("\nconst args = {\n  options: [['--single', '-s']],\n  single: ['--single'],\n}\n\nconst res = cli(args)\n\nconsole.log(res)\n"),A({id:"required"},"required"),M("some cli arguments will be required."),M("this can be achieved using the required array."),M("if a required field is missing, a error message and the help will be shown."),ia("\nconst args = {\n  options: [['--required', '-r']],\n  required: ['--required'],\n}\n\nconst res = cli(args)\n\nconsole.log(res)\n"),z({id:"config"},"configuration"),M("there are some configuration parameters that can be passed to the cli function"),A({id:"config-pure"},"pure"),ia("\nconst args = {\n  pure: false,    // set to true to prevent changes to process.argv and process.env\n  pureEnv: false, // set to true to prevent changes to process.env\n  pureArgv: false, // set to true to prevent changes to process.argv\n}\n\ncli(args)"),z({id:"config-prepend-append"},"prepend/append"),M("process.argv values can be prepended and appended"),ia("\nimport cli from '@magic/cli/src/index.mjs'\n\nconst args = {\n  prepend: ['prepended']\n  append: ['appended']\n}\n\ncli(args)"),A({id:"config-default"},"default"),M("use this to set default process.argv key: value pairs that should be set if they are not"),ia("\nimport cli from '@magic/cli/src/index.mjs''\n\nconst args = {\n  options: [\n    ['--default-key'],\n  ],\n  default: {\n    '--default-key': 'default-value',\n  },\n}\n\nconst argv = cli(args)\n\n// returns\n{\n  argv: {\n    '--default-key': 'default-value',\n  },\n}"),g({id:"source"},"source"),M(["the source for this page is in the ",da({to:"https://github.com/magic/cli/tree/master/example"},"example directory")," and gets built and published to github using ",da({to:"https://github.com/magic/core"},"@magic/core")])]},"/cli/404/":function cli404(){return w("404 - not found")}};h({init:[j({},U,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[ka.db.get,{key:"magic-gdpr",action:la.gdpr.show}]]],subscriptions:function subscriptions(){return[[V.listenPopState,la.pop]]},view:function(a){var b=ma[a.url]?a.url:"/404/",c=ma[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),ha({page:c,state:a},[$(a),ca(a)])},node:document.getElementById("Magic")});