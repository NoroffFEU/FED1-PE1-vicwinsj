import { toggleEditButton } from "../edit/editButton.mjs";
import { postUrl } from "../urls/postUrl.mjs";

function generateBlogPosts(post) {
  const postContainer = document.createElement("div");
  postContainer.className = "index-grid-item";

  const contentContainer = document.createElement("div");
  contentContainer.classList = "blog-post-content";

  const imgContainer = document.createElement("div");
  imgContainer.className = "index-grid-item--img";
  const img = document.createElement("img");
  img.src = post.media.url;
  img.alt = post.media.alt;
  img.onclick = function () {
    postUrl(post);
  };

  const title = document.createElement("p");
  title.className = "m-font letter-spacing";
  title.innerText = post.title;
  title.onclick = function () {
    postUrl(post);
  };

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "blog-links";

  const readButton = document.createElement("a");
  readButton.className = "cta cta-blue";
  readButton.innerText = "Read";
  readButton.href = `post/index.html?id=${post.id}`;

  const editButton = document.createElement("a");
  editButton.className = "cta cta-gold hide";
  editButton.innerText = "Edit";
  editButton.href = `post/edit.html?id=${post.id}`;

  imgContainer.append(img);
  buttonsContainer.append(editButton, readButton);
  contentContainer.append(imgContainer, title);
  postContainer.append(contentContainer, buttonsContainer);
  toggleEditButton(editButton);
  return postContainer;
}

export function displayBlogPosts(posts) {
  const blogPosts = document.getElementById("blog-section-2");
  blogPosts.textContent = "";

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentPosts = posts.slice(0, 12);

  recentPosts.forEach((post) => {
    const generatedPosts = generateBlogPosts(post);
    blogPosts.appendChild(generatedPosts);
  });
}
