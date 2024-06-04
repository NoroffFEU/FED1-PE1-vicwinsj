import { post } from "../utils/fetchPost.mjs";
import { showImgInputs } from "./imgInputs.mjs";
import { triggerUpdate } from "./updatePost.mjs";
import { triggerDelete } from "./deletePost.mjs";

const editTitle = document.getElementById("edit-title");
const editBody = document.getElementById("edit-body");
const urlInput = document.getElementById("img-input");
const altInput = document.getElementById("alt-input");

function generateEditPostContent(post) {
  document.title = `Editing "${post.title}" | Spasiba`;

  const backToPost = document.getElementById("back-to-post");
  backToPost.href = `index.html?id=${post.id}`;

  const headingTitle = document.getElementById("post-title");
  headingTitle.innerText = post.title;

  editTitle.value = post.title;

  editBody.value = post.body;

  const img = document.getElementById("edit-img");
  img.src = post.media.url;
  img.alt = post.media.alt;

  const uploadImgLink = document.getElementById("upload-img-link");
  const urlFieldset = document.getElementById("url-fieldset");
  urlInput.value = post.media.url;

  const altFieldset = document.getElementById("alt-fieldset");
  altInput.value = post.media.alt;

  uploadImgLink.addEventListener("click", () =>
    showImgInputs(uploadImgLink, urlFieldset, altFieldset)
  );
}

async function editPost() {
  generateEditPostContent(post);
  triggerUpdate(editTitle, editBody, urlInput, altInput);
  triggerDelete();
}

editPost();
