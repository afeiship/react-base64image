!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("classnames"),require("next-fetch2base64"),require("react-dom"),require("noop"),require("object-assign")):"function"==typeof define&&define.amd?define(["react","prop-types","classnames","next-fetch2base64","react-dom","noop","object-assign"],t):"object"==typeof exports?exports.BoilerplateReactComponent=t(require("react"),require("prop-types"),require("classnames"),require("next-fetch2base64"),require("react-dom"),require("noop"),require("object-assign")):e.BoilerplateReactComponent=t(e.react,e["prop-types"],e.classnames,e["next-fetch2base64"],e["react-dom"],e.noop,e["object-assign"])}(window,function(e,t,r,n,o,u,c){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=u},function(e,t){e.exports=c},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=(r(4),r(1)),c=r.n(u),i=r(2),a=r.n(i),s=(r(5),r(6),r(3)),f=r.n(s);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=/^data:image/,O=function(e){function t(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=m(this,d(t).call(this,e));var n=e.src;return r.state={src:n},r}var r,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,n["Component"]),r=t,(u=[{key:"componentDidMount",value:function(){this.update()}},{key:"componentWillReceiveProps",value:function(e){var t=e.src;t!==this.state.src&&(this.state.src=t,this.update())}},{key:"update",value:function(){var e=this,t=this.state.src;h.test(t)||f.a.request(t).then(function(t){e.setState({src:t})})}},{key:"render",value:function(){var e=this.props,t=e.className,r=(e.src,y(e,["className","src"])),n=this.state.src;return o.a.createElement("img",l({className:a()("react-base64image",t),src:n},r))}}])&&b(r.prototype,u),c&&b(r,c),t}();O.propTypes={className:c.a.string,src:c.a.string},O.defaultProps={};t.default=O}])});