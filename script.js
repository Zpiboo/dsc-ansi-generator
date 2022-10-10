let prefix = (...args) => `\u001b[${args.join(";")}m`


const tools = document.querySelectorAll(".toolbar > *");
[...tools].forEach(tool => {
  tool.addEventListener("click", e => {
    e.target.classList.toggle("selected")
  });
});