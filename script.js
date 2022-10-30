let prefix = (...args) => `\u001b[${args.join(";")}m`

const textArea = document.querySelector("div.text");
textArea.addEventListener("beforeinput", preventParagraphInsert);

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
  console.log(`Actual event: ${e}`);
  if (e.inputType === "insertParagraph") {
    e.preventDefault();
    let newEvt = new InputEvent("beforeinput", { inputType: "insertLineBreak", target: this, bubbles: true });
    console.log(`My event: ${newEvt}`);
    this.dispatchEvent(newEvt);
  }
}