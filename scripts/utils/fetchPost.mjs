import { BLOG_POSTS_ENDPOINT } from "../urls/apiUrl.mjs";

export async function getPost() {
  try {
    let url = new URLSearchParams(window.location.search);
    let id = url.get("id");
    const response = await fetch(`${BLOG_POSTS_ENDPOINT}/${id}`);
    const post = await response.json();
    return post.data;
  } catch (error) {
    console.error("Fetching error:", error.message);
  }
}

export const post = await getPost();
