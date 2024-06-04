import { editButton, toggleEditButton } from "../edit/editButton.mjs";
import { post } from "../utils/fetchPost.mjs";
import { creationDate, updateDate } from "../utils/formatDate.mjs";
import { isUpdated } from "./checkStatus.mjs";
import { checkRedirect } from "../account/loginRedirect.mjs";

window.addEventListener("pageshow", checkRedirect);

async function generatePostContent(post) {
  document.title = `${post.title} | Spasiba`;

  const imageContainer = document.getElementById("blog-post-img-container");
  const img = document.createElement("img");
  img.src = post.media.url;
  img.alt = post.media.alt;
  imageContainer.appendChild(img);

  const heading = document.getElementById("post-heading");
  heading.innerText = post.title;

  const author = document.getElementById("author");
  author.innerText = post.author.name;

  const publishedDate = document.getElementById("created");
  publishedDate.innerText = creationDate(post);

  const updatedDate = document.getElementById("updated");
  updatedDate.innerText = updateDate(post);

  isUpdated(post);

  const content = document.getElementById("blog-content");
  content.innerText = post.body;

  editButton.href = `edit.html?id=${post.id}`;

  const tagsContainer = document.getElementById("tags");
  const tags = post.tags;
  tags.forEach((tag) => {
    const tagElement = document.createElement("p");
    tagElement.innerText = tag;
    tagsContainer.appendChild(tagElement);
  });
}

async function renderBlogpost() {
  generatePostContent(post);
  toggleEditButton(editButton);
}

renderBlogpost();
