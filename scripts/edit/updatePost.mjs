import { post } from "../utils/fetchPost.mjs";
import { accessToken } from "../utils/localStorage.mjs";
import { BLOG_POSTS_ENDPOINT } from "../urls/apiUrl.mjs";

async function updatePost(editTitle, editBody, urlInput, altInput) {
  const id = post.id;
  const data = {
    title: editTitle.value,
    body: editBody.value,
    tags: ["massage", "spa"],
    media: {
      url: urlInput.value,
      alt: altInput.value,
    },
  };

  try {
    const response = await fetch(`${BLOG_POSTS_ENDPOINT}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const updateSuccess = await response.json();
    console.log("Successfully updated:", updateSuccess);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
  location.reload();
}

export function triggerUpdate(editTitle, editBody, urlInput, altInput) {
  const updateButton = document.getElementById("update");

  updateButton.addEventListener("click", (event) => {
    event.preventDefault();
    updatePost(editTitle, editBody, urlInput, altInput);
  });
}
