import { posts } from "../utils/fetchPosts.mjs";
import { displayCarousel } from "./carousel.mjs";
import { displayBlogPosts } from "./blogPosts.mjs";
import { checkRedirect } from "../loginRedirect.mjs";

window.addEventListener("pageshow", checkRedirect);

export async function renderBlog() {
  displayCarousel(posts);
  displayBlogPosts(posts);
}

async function main() {
  await renderBlog();
}

main();
