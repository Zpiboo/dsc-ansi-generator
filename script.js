let prefix = (...args) => `\u001b[${args.join(";")}m`

const textArea = document.querySelector("div.text");
textArea.addEventListener("input", preventParagraphInsert);

const formatButtons = document.querySelectorAll(".toolbar > .format");
formatButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.target.classList.toggle("selected");
    textArea.focus();
  });
});


function modifyText() {
  // TODO: Finish that lol
}


function preventParagraphInsert(e) {
  // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
}