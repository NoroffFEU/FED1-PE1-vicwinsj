import { posts } from "../utils/fetchPosts.mjs";
import { displayCarousel } from "./carousel.mjs";
import { displayBlogPosts } from "./blogPosts.mjs";

window.addEventListener("pageshow", function (event) {
  if (
    event.persisted ||
    performance.getEntriesByType("navigation")[0].type === "back_forward"
  ) {
    location.reload();
  }
});

export async function renderBlog() {
  // loader.show();
  displayCarousel(posts);
  displayBlogPosts(posts);
  // loader.hide();
}

async function main() {
  await renderBlog();
}

main();
