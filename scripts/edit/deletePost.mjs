import { post } from "../utils/fetchPost.mjs";
import { accessToken } from "../utils/localStorage.mjs";
import { BLOG_POSTS_ENDPOINT } from "../urls/apiUrl.mjs";

async function deletePost() {
  try {
    const id = post.id;

    const response = await fetch(`${BLOG_POSTS_ENDPOINT}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    } else {
      window.location.href = "/index.html";
      console.log("Successfully deleted post with id:", id);
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

export function triggerDelete() {
  const deleteButton = document.getElementById("delete");
  deleteButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (confirm("Are you sure you want to delete?")) {
      deletePost();
    }
  });
}
