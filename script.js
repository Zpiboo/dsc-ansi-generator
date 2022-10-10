let prefix = (...args) => `\u001b[${args.join(";")}m`


const toggles = document.querySelectorAll(".toolbar > .toggle");
[...toggles].forEach(toggle => {
  toggle.addEventListener("click", e => {
    e.target.classList.toggle("selected")
  });
});