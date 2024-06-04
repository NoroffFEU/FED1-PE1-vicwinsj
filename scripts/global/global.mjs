import { burger, toggleMenu, toggleMenuVisibility } from "./menu.mjs";
import { toggleAccountLinks } from "../account/accountLinks.mjs";
import { logoutButton, logout } from "../account/logout.mjs";

function menu() {
  burger.addEventListener("click", toggleMenu);
  window.addEventListener("resize", toggleMenuVisibility);
  toggleAccountLinks();
}

function account() {
  toggleAccountLinks();
  logoutButton.addEventListener("click", logout);
}

function main() {
  menu();
  account();
}

main();
