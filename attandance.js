const icon = document.querySelector(".heading i");
const panel = document.querySelector(".panel");
const container = document.querySelector(".container");

icon.addEventListener("click", () => {
    panel.classList.toggle("collapsed");
    container.classList.toggle("reverse");
});
