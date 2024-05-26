const burger = document.querySelector(".burger-menu");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const menu = document.querySelector(".menu");
const account = document.querySelector(".account");

function toggleMenu() {
  const isOpen = menu.classList.toggle("show-menu");
  if (isOpen) {
    openIcon.classList.remove("fa-solid", "fa-bars");
    closeIcon.classList.add("fa-solid", "fa-xmark");
  } else {
    openIcon.classList.remove("hide");
    closeIcon.classList.remove("show");
  }
}

burger.addEventListener("click", toggleMenu);
