export const burger = document.querySelector(".burger-menu");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const menu = document.querySelector(".menu");

export function toggleMenu() {
  const isOpen = menu.classList.contains("visible");
  if (!isOpen) {
    menu.classList.add("visible");
    openIcon.classList.add("hide");
    closeIcon.classList.remove("hide");
  } else {
    menu.classList.remove("visible");
    openIcon.classList.remove("hide");
    closeIcon.classList.add("hide");
  }
}

export function toggleMenuVisibility() {
  const viewportWidth = window.innerWidth;
  const desktopWidth = 1200;

  if (viewportWidth >= desktopWidth) {
    menu.classList.add("visible");
  } else {
    menu.classList.remove("visible");
  }
}
