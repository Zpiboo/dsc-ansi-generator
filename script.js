let prefix = (...args) => `\u001b[${args.join(";")}m`


const formatButtons = document.querySelectorAll(".toolbar > .format");
formatButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.target.classList.toggle("selected");
  });
});
