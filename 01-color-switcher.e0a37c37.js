const t={startEl:document.querySelector("[data-start]"),stopEl:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")};let e=null;t.startEl.addEventListener("click",(function(){e=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.startEl.setAttribute("disabled","disabled")}),1e3)})),t.stopEl.addEventListener("click",(function(){clearInterval(e),t.startEl.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.e0a37c37.js.map
