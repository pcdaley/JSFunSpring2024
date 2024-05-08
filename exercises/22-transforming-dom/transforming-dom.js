/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  const img = document.querySelector("img");
  img.src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";

  const link = document.querySelector("#mozilla");
  link.href="https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  const victorious = document.querySelector("#victorious");
  victorious.textContent="I am victorious!";

  const background = document.querySelector("#background");
  background.style.backgroundColor="gray";

  const success = document.querySelector("#success");
  success.classList.add="text-success";

  const hide = document.querySelector("#hide");
  hide.style="display: none";

})();
