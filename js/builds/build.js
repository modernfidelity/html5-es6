"format register";!function(e){function r(e){for(var r=[],n=0,t=e.length;t>n;n++)-1==f.call(r,e[n])&&r.push(e[n]);return r}function n(e,n,t,o){if("string"!=typeof e)throw"System.register provided no module name";var a;a="boolean"==typeof t?{declarative:!1,deps:n,execute:o,executingRequire:t}:{declarative:!0,deps:n,declare:t},a.name=e,c[e]||(c[e]=a),a.deps=r(a.deps),a.normalizedDeps=a.deps}function t(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==f.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var n=0,o=e.normalizedDeps.length;o>n;n++){var a=e.normalizedDeps[n],l=c[a];if(l&&!l.evaluated){var s=e.groupIndex+(l.declarative!=e.declarative);if(void 0===l.groupIndex||l.groupIndex<s){if(void 0!==l.groupIndex&&(r[l.groupIndex].splice(f.call(r[l.groupIndex],l),1),0==r[l.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");l.groupIndex=s}t(l,r)}}}}function o(e){var r=c[e];r.groupIndex=0;var n=[];t(r,n);for(var o=!!r.declarative==n.length%2,a=n.length-1;a>=0;a--){for(var s=n[a],u=0;u<s.length;u++){var d=s[u];o?l(d):i(d)}o=!o}}function a(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function l(r){if(!r.module){var n=r.module=a(r.name),t=r.module.exports,o=r.declare.call(e,function(e,r){n.locked=!0,t[e]=r;for(var o=0,a=n.importers.length;a>o;o++){var l=n.importers[o];if(!l.locked){var s=f.call(l.dependencies,n);l.setters[s](t)}}return n.locked=!1,r});if(n.setters=o.setters,n.execute=o.execute,!n.setters||!n.execute)throw new TypeError("Invalid System.register form for "+r.name);for(var s=0,i=r.normalizedDeps.length;i>s;s++){var u,v=r.normalizedDeps[s],m=c[v],g=p[v];g?u=g.exports:m&&!m.declarative?u={"default":m.module.exports,__useDefault:!0}:m?(l(m),g=m.module,u=g.exports):u=d(v),g&&g.importers?(g.importers.push(n),n.dependencies.push(g)):n.dependencies.push(null),n.setters[s]&&n.setters[s](u)}}}function s(e){var r,n=c[e];if(n)n.declarative?u(e,[]):n.evaluated||i(n),r=n.module.exports;else if(r=d(e),!r)throw new Error("Unable to load dependency "+e+".");return(!n||n.declarative)&&r&&r.__useDefault?r["default"]:r}function i(r){if(!r.module){var n={},t=r.module={exports:n,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var l=r.normalizedDeps[o],u=c[l];u&&i(u)}r.evaluated=!0;var d=r.execute.call(e,function(e){for(var n=0,t=r.deps.length;t>n;n++)if(r.deps[n]==e)return s(r.normalizedDeps[n]);throw new TypeError("Module "+e+" not declared as a dependency.")},n,t);d&&(t.exports=d)}}function u(r,n){var t=c[r];if(!t.evaluated&&t.declarative){n.push(r);for(var o=0,a=t.normalizedDeps.length;a>o;o++){var l=t.normalizedDeps[o];-1==f.call(n,l)&&(c[l]?u(l,n):d(l))}t.evaluated||(t.evaluated=!0,t.module.execute.call(e))}}function d(e){if(v[e])return v[e];var r=c[e];if(!r)throw"Module "+e+" not present.";o(e),u(e,[]),c[e]=void 0;var n=r.declarative?r.module.exports:{"default":r.module.exports,__useDefault:!0};return v[e]=n}var c={},f=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},p={},v={};return function(r,t){var o;"undefined"!=typeof o&&o.register?(t(o),o["import"](r)):(t(o={register:n,get:d,set:function(e,r){v[e]=r},newModule:function(e){return e},global:e}),o.set("@empty",o.newModule({})),d(r))}}("undefined"!=typeof window?window:global)("js/src/main",function(e){e.register("js/src/classes/Monkey",[],function(e){"use strict";var r;return{setters:[],execute:function(){r=function(){var e=function(e){this.name=e,console.log("es6 monkey class loaded...")};return $traceurRuntime.createClass(e,{say:function(e){console.log(this.name+" says: "+e)},how:function(){console.log("I am bob"),console.log("built via grunt")}},{})}(),e("Monkey",r)}}}),e.register("js/src/controllers/MainController",[],function(e){"use strict";var r;return{setters:[],execute:function(){r=function(){var e=function(){console.log("MainController loaded..."),this.firstName="Monkey",this.lastName="Bob"};return $traceurRuntime.createClass(e,{},{})}(),e("MainController",r)}}}),e.register("js/src/main",["js/src/classes/Monkey","js/src/controllers/MainController"],function(){"use strict";var e,r,n,t;return{setters:[function(r){e=r.Monkey},function(e){r=e.MainController}],execute:function(){n=new e("bob"),n.say("cats are aliens"),n.how(),t=angular.module("myApp",[]),t.controller("mainController",r)}}})});
//# sourceMappingURL=build.js.map