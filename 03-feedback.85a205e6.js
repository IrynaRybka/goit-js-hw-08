!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,b=Math.max,y=Math.min,p=function(){return s.Date.now()};function g(t,e,n){var i,r,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(o);function g(e){var n=i,o=r;return i=r=void 0,l=e,f=t.apply(o,n)}function h(t){return l=t,a=setTimeout(O,e),d?g(t):f}function w(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=u}function O(){var t=p();if(w(t))return T(t);a=setTimeout(O,function(t){var n=e-(t-c);return s?y(n,u-(t-l)):n}(t))}function T(t){return a=void 0,v&&i?g(t):(i=r=void 0,f)}function S(){var t=p(),n=w(t);if(i=arguments,r=this,c=t,n){if(void 0===a)return h(c);if(s)return a=setTimeout(O,e),g(c)}return void 0===a&&(a=setTimeout(O,e)),f}return e=j(e)||0,m(n)&&(d=!!n.leading,u=(s="maxWait"in n)?b(j(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},S.flush=function(){return void 0===a?f:T(p())},S}function m(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(m(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=m(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=f.test(t);return o||a.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}n=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError(o);return m(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:i,maxWait:e,trailing:r})};var h=document.querySelector('.feedback-form"'),w=document.querySelector(".submit");h.addEventListener("input",n((function(t){O=t.target.value,console.log(O),localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),w.addEventListener("submit",(function(t){console.log(t.target.value)}));var O={}}();
//# sourceMappingURL=03-feedback.85a205e6.js.map
