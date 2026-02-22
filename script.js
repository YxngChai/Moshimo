// Burger menu
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

//Moshimo name fade in
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

// Intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, {});
const moshiElements = document.querySelectorAll(".slide");

moshiElements.forEach((el) => observer.observe(el));

// Open temaki info

const temakiButton = document.querySelector(".temaki-informations");
const temakiInfo = document.querySelector(".temaki-info");

temakiButton.addEventListener("click", () => {
  temakiInfo.classList.toggle("visible");
  temakiButton.classList.toggle("visible");
});
