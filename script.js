const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");

const toggleMenu = () => {
  const isOpen = burger.classList.toggle("open");
  menu.classList.toggle("open", isOpen);
  burger.setAttribute("aria-expanded", isOpen);
  menu.setAttribute("aria-hidden", !isOpen);
};

burger.addEventListener("click", toggleMenu);

document.addEventListener("click", (e) => {
  if (
    !menu.contains(e.target) &&
    !burger.contains(e.target) &&
    menu.classList.contains("open")
  ) {
    toggleMenu();
  }
});
