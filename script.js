const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelectorAll(".mobile-menu a");

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

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      toggleMenu();
    }
  });
});
const myElement = document.getElementById("moshiname");
const isTouch = window.matchMedia("(hover: none)").matches;

if (isTouch) {
  setTimeout(() => {
    myElement.classList.add("visible");
  }, 500);
} else {
  window.addEventListener("scroll", () => {
    const triggerPoint = 50; // pixels scrolled before showing
    if (window.scrollY > triggerPoint) {
      myElement.classList.add("visible");
    } else {
      myElement.classList.remove("visible"); // optional: hide again
    }
  });
}

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  },
  { threshold: 0.2 },
);

observer.observe(document.querySelector(".fifty-percent"));
