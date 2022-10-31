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
  if (e.inputType === "insertParagraph") {
    e.preventDefault();
    insertNodeAtCursor(document.createElement("br"));
  }
}

function insertNodeAtCursor(node) {
  let selection, range;
  if (window.getSelection) {
    selection = window.getSelection();
    range = selection.getRangeAt(0);
    
    range.deleteContents();
    range.insertNode(node);
    selection.collapseToEnd();
  }
}