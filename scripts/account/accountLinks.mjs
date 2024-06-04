import { accessToken } from "../utils/localStorage.mjs";

const account = document.getElementById("account");
export const logoutButton = document.getElementById("logout-button");

export function toggleAccountLinks() {
  if (accessToken) {
    account.classList.add("hide");
    logoutButton.classList.remove("hide");
  }
}
