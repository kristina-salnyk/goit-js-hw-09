!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),a={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function i(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}a.form.addEventListener("submit",(function(e){e.preventDefault();var n={delay:Number(a.delay.value),step:Number(a.step.value),amount:Number(a.amount.value)};if(function(e){var n=e.delay,t=e.step,o=e.amount,a=!0;return n<0&&(r.Notify.failure("Enter a non-negative delay value"),a=!1),t<0&&(r.Notify.failure("Enter a non-negative step value"),a=!1),o<=0&&(r.Notify.failure("Enter a positive count of promises"),a=!1),a}(n))for(var t=n.step,o=n.amount,u=1,l=n.delay;u<=o;u+=1,l+=t)i(u,l).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.f70bcf58.js.map
