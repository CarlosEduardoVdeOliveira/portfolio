//scrollY
const inputs = document.querySelectorAll("[data-input]");
inputs.forEach((link) =>
  link.addEventListener("click", (event) => scrollScreen(event))
);

function scrollScreen(link) {
  if (link) {
    console.log(link.clientY);
  }
}
