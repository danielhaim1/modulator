/*!
 * @danielhaim/modulator - v2.0.0 - 2024-06-12
 * https://github.com/danielhaim1/modulator.git
 * Copyright (c) 2024 Daniel Haim, Licensed Apache-2.0
 */(()=>{"use strict";var e={987:(e,r,t)=>{var o;const n={modulate:t(954).modulate};e.exports&&(e.exports=n),void 0===(o=(()=>n).apply(r,[]))||(e.exports=o),"object"==typeof window&&(window.Modulator=n)},954:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.modulate=function(e,r,t=!1,o=null,n=100,a=null){if("function"!=typeof e)throw new TypeError("Expected a function for the first parameter");if("number"!=typeof r||isNaN(r))throw new TypeError("Expected a number for the second parameter");if("number"!=typeof r||isNaN(r))throw new TypeError("Expected a number for the second parameter (wait)");if("boolean"!=typeof t)throw new TypeError("Expected a boolean for the third parameter");if("number"!=typeof n||isNaN(n))throw new TypeError("Expected a number for the fifth parameter");if(null!==a&&("number"!=typeof a||isNaN(a)))throw new TypeError("Expected a number for the sixth parameter");if(null!==a&&a<r)throw new TypeError("Expected the sixth parameter to be greater than or equal to the second parameter");let i,u=[],s=new Map,p=0,f=!1;const c=function(...c){return new Promise((f=>{function l(e=(()=>{}),r=0,t=!1,o=0){const n=Date.now()-o;if("function"!=typeof e)return Promise.reject(new Error("Expected a function for the first parameter"));if("number"!=typeof r||isNaN(r)||r<=0)return Promise.reject(new Error("Expected a number for the second parameter"));if("number"!=typeof n||isNaN(n)||n<0)return Promise.reject(new Error("Invalid timeSinceLast value"));if(t||n>=r||null!==a&&n>=a)return e(),Promise.resolve(Date.now());const i=r-n;return i<=0?Promise.resolve(Date.now()):new Promise((e=>setTimeout((()=>e(Date.now())),i)))}const m=t&&!i,w=Date.now()-p,d=null!==a&&w>=a;if(clearTimeout(i),i=d?setTimeout(l,w):setTimeout((()=>l(e,r,m,p)),null!==a?a:r),m&&!d){const r=e.apply(o,c);u.push(r),s.set(JSON.stringify(c),r),s.size>n&&s.delete(s.keys().next().value),f(r),p=Date.now()}const y=s.get(JSON.stringify(c));void 0!==y&&f(y)})).finally((()=>{f&&(u=[],s.clear()),f=!1}))};return c.cancel=function(){clearTimeout(i),f=!0},c.result=function(){return u},c}}},r={};var t=function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}(987);module.exports=t})();