import { creationDate, updateDate } from "../utils/formatDate.mjs";

export function isUpdated(post) {
  const divider = document.getElementById("divider");
  const updatedContainer = document.getElementById("updated-container");
  if (creationDate(post) !== updateDate(post)) {
    divider.classList.remove("hide");
    updatedContainer.classList.remove("hide");
  }
}
