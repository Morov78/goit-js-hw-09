!function(){var t=document.body,e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),d=null;function a(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}function n(){if(e.hasAttribute("disabled"))return e.removeAttribute("disabled"),void r.setAttribute("disabled","");e.setAttribute("disabled",""),r.removeAttribute("disabled")}r.setAttribute("disabled",""),e.addEventListener("click",(function(){a(),d=setInterval(a,1e3),n()})),r.addEventListener("click",(function(){clearInterval(d),n()}))}();
//# sourceMappingURL=01-color-switcher.d83788f0.js.map