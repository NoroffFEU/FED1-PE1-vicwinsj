import { isAdmin } from "../utils/localStorage.mjs";

export const logoutButton = document.getElementById("logout-button");

export function logout() {
  localStorage.removeItem("accessToken");
  if (isAdmin) {
    localStorage.removeItem("isAdmin");
  }
  location.reload();
}

logoutButton.addEventListener("click", logout);
