!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector(".form");u.addEventListener("submit",(function(n){n.preventDefault();var t=Number(u.elements.delay.value),o=Number(u.elements.step.value),i=Number(u.elements.amount.value);setTimeout((function(){for(var n=function(n){var i,u;(i=n,u=o,new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({position:i,delay:u}):n({position:i,delay:u})}),i*u)}))).then((function(i){i.position,i.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n+1," in ").concat(n*o+t,"ms"))})).catch((function(i){i.position,i.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n+1," in ").concat(n*o+t,"ms"))}))},u=0;u<i;u+=1)n(u)}),t)}))}();
//# sourceMappingURL=03-promises.66019430.js.map