!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("6JpON");var l=document.querySelector(".form");l.addEventListener("submit",(function(e){e.preventDefault();var n=1;setTimeout((function(){var e=setInterval((function(){var o,t,r=Number(l.elements.delay.value)+Number(l.elements.step.value);n===Number(l.elements.amount.value)&&clearInterval(e),(o=n,t=r,new Promise((function(e,n){Math.random()>.3?e({position:o,delay:t}):n({position:o,delay:t})}))).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=1}),Number(l.elements.step.value))}),Number(l.elements.delay.value))}))}();
//# sourceMappingURL=03-promises.f3bf0a2e.js.map
