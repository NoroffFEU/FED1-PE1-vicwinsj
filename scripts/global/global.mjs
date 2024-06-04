import { burger, toggleMenu, toggleMenuVisibility } from "./menu.mjs";
import { toggleAccountLinks } from "../account/accountLinks.mjs";
import { logoutButton, logout } from "../account/logout.mjs";

function menuFunction() {
  burger.addEventListener("click", toggleMenu);
  window.addEventListener("resize", toggleMenuVisibility);
  toggleMenuVisibility();
}

function accountFunction() {
  toggleAccountLinks();
  logoutButton.addEventListener("click", logout);
}

function main() {
  menuFunction();
  accountFunction();
}

main();
