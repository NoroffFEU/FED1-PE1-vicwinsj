import { isAdmin } from "../utils/localStorage.mjs";

export const editButton = document.querySelector("#edit-button");

export function toggleEditButton(editButton) {
  if (isAdmin) {
    editButton.classList.remove("hide");
  } else {
    if (!editButton.classList.contains("hide")) {
      editButton.classList.add("hide");
    }
  }
}
