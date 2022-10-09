let prefix = (...args) => `\u001b[${args.join(";")}m`

// Auto resize textarea
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
  window.addEventListener("load", e => {
    OnInput({target:tx[i]});
  }, false);
}
function OnInput(e) {
  e.target.style.height = 0;
  e.target.style.height = `${e.target.scrollHeight}px`;
}