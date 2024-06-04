import { BLOG_POSTS_ENDPOINT } from "../urls/apiUrl.mjs";

export async function getPosts() {
  try {
    const response = await fetch(`${BLOG_POSTS_ENDPOINT}`);
    const fetchedPosts = await response.json();
    const posts = fetchedPosts.data;
    return posts;
  } catch (error) {
    console.error("Fetching error:", error.message);
  }
}

export const posts = await getPosts();
