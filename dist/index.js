!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("prop-types"),require("classnames"),require("react-dom"),require("noop"),require("object-assign")):"function"==typeof define&&define.amd?define(["react","prop-types","classnames","react-dom","noop","object-assign"],e):"object"==typeof exports?exports.BoilerplateReactComponent=e(require("react"),require("prop-types"),require("classnames"),require("react-dom"),require("noop"),require("object-assign")):t.BoilerplateReactComponent=e(t.react,t["prop-types"],t.classnames,t["react-dom"],t.noop,t["object-assign"])}(window,function(t,e,n,r,o,s){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){var r;nx={BREAKER:{},VERSION:"1.6.5",DEBUG:!1,GLOBAL:function(){return this}.call(null)},function(t,e){var n=Array.prototype,r=Object.prototype.hasOwnProperty;e.nx=e.nx||t,t.noop=function(){},t.error=function(t){throw new Error(t)},t.try=function(t){try{t()}catch(t){}},t.forEach=function(e,n,r){var o,s=e.length;for(o=0;o<s&&n.call(r,e[o],o,e)!==t.BREAKER;o++);},t.forIn=function(e,n,o){var s;for(s in e)if(r.call(e,s)&&n.call(o,s,e[s],e)===t.BREAKER)break},t.each=function(e,n,o){var s,i,_=function(r,s,i){return n.call(o,r,s,e,i)===t.BREAKER};if(e)if("number"==typeof(i=e.length))for(s=0;s<i&&!_(s,e[s],!0);s++);else for(s in e)if(r.call(e,s)&&_(s,e[s],!1))break},t.map=function(e,n,r){var o=[];return t.each(e,function(){var e=n.apply(r,arguments);if(e===t.BREAKER)return t.BREAKER;o.push(e)}),o},t.mix=function(e){var n,r,o=e||{},s=arguments;for(n=1,r=s.length;n<r;n++)t.forIn(s[n],function(t,e){o[t]=e});return o},t.slice=function(t,e,r){return n.slice.call(t,e,r)},t.set=function(e,n,r){for(var o=n.split("."),s=e||t.GLOBAL,i=o.length-1,_=o[i],c=0;c<i;c++){var a=o[c],u=isNaN(+o[c+1])?{}:[];s=s[a]=s[a]||u}return s[_]=r,e},t.get=function(e,n){var r=n.split("."),o=e||t.GLOBAL;return r.forEach(function(t){o=o&&o[t]}),o},t.path=function(t,e,n){return null==n?this.get(t,e):this.set(t,e,n)}}(nx,nx.GLOBAL),t.exports?t.exports=nx:void 0===(r=function(){return nx}.apply(e,[]))||(t.exports=r),function(t,e){var n=function(){},r={__class_id__:0,__type__:"nx.RootClass",__base__:Object,__meta__:{},__static__:!1,__statics__:{},__properties__:{},__methods__:{},__method_init__:t.noop,__static_init__:t.noop},o={base:function(){var t,e=this.base.caller;if(e&&(t=e.__base__))return t.apply(this,arguments)},parent:function(e){var n=void 0===this.__id__,r=t.slice(arguments,1),o=n?this.__base__:this.__base__.prototype,s=this["@"+e].__type__,i=["get","set"][r.length];switch(s){case"method":return o[e].apply(this,r);case"property":return o["@"+e][i].apply(this,r)}}};r.__methods__=n.prototype=t.mix({constructor:n,init:t.noop,destroy:t.noop,toString:function(){return"[Class@"+this.__type__+"]"}},o),t.mix(r.__statics__,o),t.mix(n,r),t.mix(n,r.__statics__),t.RootClass=n}(nx,nx.GLOBAL),function(t,e){t.defineProperty=function(e,n,r,o){var s,i,_,c,a,u="@"+n,f=r&&"object"==typeof r?r:{value:r};return"value"in f?(c=f.value,a="_"+n,s=function(){return a in this?this[a]:"function"==typeof c?c.call(this):c},i=function(t){this[a]=t}):(s=r.get||e[u]&&e[u].get||t.noop,i=r.set||e[u]&&e[u].set||t.noop),u in e&&(s.__base__=e[u].get,i.__base__=e[u].set),_=e[u]={__meta__:r,__name__:n,__type__:"property",__static__:!!o,get:s,set:i,configurable:!0},Object.defineProperty(e,n,_),_},t.defineMethod=function(t,e,n,r){var o="@"+e;return t[e]=n,t[o]={__meta__:n,__name__:e,__type__:"method",__static__:!!r}},t.defineBombMethod=function(e,n,r,o){n.split(",").forEach(function(n,s){t.defineMethod(e,n,r.call(e,n,s),o)})},t.defineMembers=function(e,n,r,o){t.forIn(r,function(r,s){r.indexOf(",")>-1?t.defineBombMethod(n,r,s,o):t["define"+e](n,r,s,o)})}}(nx,nx.GLOBAL),function(t,e){var n=1,r=0;function o(e,n){this.type=e,this.meta=n,this.base=n.extends||t.RootClass,this.$base=this.base.prototype,this.__class_meta__={},this.__class__=null,this.__constructor__=null}o.prototype={constructor:o,initMetaProcessor:function(){var e=this.meta,r=e.methods||{},o=e.statics||{};t.mix(this.__class_meta__,{__type__:this.type,__meta__:e,__base__:this.base,__class_id__:n++,__method_init__:r.init||this.base.__method_init__,__static_init__:o.init||this.base.__static_init__,__static__:!e.methods&&!!e.statics})},createClassProcessor:function(){var t=this;this.__class__=function(){this.__id__=r++,t.__constructor__.apply(this,arguments),t.registerDebug(this)}},inheritProcessor:function(){var t=this.__class_meta__;this.inheritedClass(t),this.defineMethods(t,!0),this.defineMethods(t,!1),this.defineProperties(t)},inheritedClass:function(t){var e=function(){},n=this.__class__;e.prototype=this.$base,n.prototype=new e,n.prototype.$base=this.$base,n.prototype.constructor=n},defineMethods:function(e,n){var r=n?"statics":"methods",o="__"+r+"__",s=n?this.__class__:this.__class__.prototype,i=(n?this.base:this.base.prototype)[o]||{};t.forIn(this.meta[r],function(t,e){i[t]&&"function"==typeof e&&(e.__base__=i[t])}),s[o]=t.mix(e[o],i,this.meta[r]),t.defineMembers("Method",s,s[o],n)},defineProperties:function(e){var n=e.__static__,r=n?this.__class__:this.__class__.prototype;r.__properties__=t.mix(e.__properties__,this.meta.properties),t.defineMembers("Property",r,r.__properties__,n)},methodsConstructorProcessor:function(){var t=this.__class_meta__;this.__constructor__=function(){t.__method_init__.apply(this,arguments)}},staticsConstructorProcessor:function(){this.__class_meta__.__static_init__.call(this.__class__)},registerProcessor:function(){var e=this.__class__,n=this.type,r=this.__class_meta__;t.mix(e.prototype,r),t.mix(e,r),-1===n.indexOf("nx.Anonymous")&&t.set(t.GLOBAL,n,e)},registerDebug:function(e){t.DEBUG&&(t.set(t,"__instances__."+(r-1),e),t.set(t,"__instances__.length",r))}},t.declare=function(t,e){var r=new o("string"==typeof t?t:"nx.Anonymous"+n,e||t);return r.initMetaProcessor(),r.createClassProcessor(),r.inheritProcessor(),r.methodsConstructorProcessor(),r.staticsConstructorProcessor(),r.registerProcessor(),r.__class__}}(nx,nx.GLOBAL)},function(t,e){t.exports=n},function(t,e,n){
/*!
 * name: next-fetch2base64
 * url: https://github.com/afeiship/next-fetch2base64
 * version: 1.0.0
 * license: MIT
 */
!function(){var e=e||this||window||Function("return this")(),r=e.nx||n(2),o=r.blob2base64||n(8),s={method:"GET",data:null},i=r.declare("nx.Fetch2base64",{statics:{request:function(t,e){var n=r.mix(null,s,e),i=new XMLHttpRequest;return i.open(n.method,t),i.responseType="blob",i.send(n.data),new Promise(function(t,e){i.onload=function(){o(this.response).then(function(e){t(e)})},i.onerror=function(t){e(t)}})}}});t.exports&&(t.exports=i)}()},function(t,e){t.exports=r},function(t,e){t.exports=o},function(t,e){t.exports=s},function(t,e,n){
/*!
 * name: next-blob2base64
 * url: https://github.com/afeiship/next-blob2base64
 * version: 1.0.0
 * license: MIT
 */
!function(){var e=e||this||window||Function("return this")(),r=e.nx||n(2);r.blob2base64=function(t){return new Promise(function(e,n){var r=new FileReader;r.onload=function(t){e(t.target.result)},r.onerror=function(t){n(t)},r.readAsDataURL(t)})},t.exports&&(t.exports=r.blob2base64)}()},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),s=(n(5),n(1)),i=n.n(s),_=n(3),c=n.n(_),a=(n(6),n(7),n(4)),u=n.n(a);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(t){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=y(this,b(e).call(this,t));var r=t.src;return n.state={src:r},n}var n,s,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,r["Component"]),n=e,(s=[{key:"componentDidMount",value:function(){this.update()}},{key:"componentWillReceiveProps",value:function(t){var e=t.src;e!==this.state.src&&(this.state.src=e,this.update())}},{key:"update",value:function(){var t=this,e=this.state.src;u.a.request(e).then(function(e){t.setState({src:e})})}},{key:"render",value:function(){var t=this.props,e=t.className,n=(t.src,l(t,["className","src"])),r=this.state.src;return o.a.createElement("img",p({className:c()("react-base64image",e),src:r},n))}}])&&h(n.prototype,s),i&&h(n,i),e}();m.propTypes={className:i.a.string,src:i.a.string},m.defaultProps={};e.default=m}])});