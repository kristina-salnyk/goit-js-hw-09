!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},n=null;var e=function(){t.startBtn.toggleAttribute("disabled"),t.stopBtn.toggleAttribute("disabled")};t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e()})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),e()}))}();
//# sourceMappingURL=01-color-switcher.8399bc31.js.map
