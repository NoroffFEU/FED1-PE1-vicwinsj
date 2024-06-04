import { postUrl } from "../urls/postUrl.mjs";

function generateCarousel(post) {
  const postContainer = document.createElement("a");
  postContainer.classList = "carousel-item hide";
  postContainer.href = `post/index.html?id=${post.id}`;
  const imgContainer = document.createElement("div");
  imgContainer.className = "carousel-img";
  const img = document.createElement("img");
  img.src = post.media.url;
  img.alt = post.media.alt;
  img.onclick = function () {
    postUrl(post);
  };
  const overlay = document.createElement("div");
  overlay.className = "carousel-img-overlay";

  const title = document.createElement("p");
  title.classList = "carousel-img--text helvetica m-font italic bold";
  title.innerText = post.title;

  const button = document.createElement("a");
  button.innerText = "Read";
  button.classList = "carousel-img--button cta cta-blue";
  button.href = `post/index.html?id=${post.id}`;

  imgContainer.append(img, overlay);
  postContainer.append(imgContainer, title, button);
  return postContainer;
}

export function displayCarousel(posts) {
  const carousel = document.getElementById("carousel");
  carousel.textContent = "";

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentPosts = posts.slice(0, 3);

  recentPosts.forEach((post) => {
    const generatedPost = generateCarousel(post);
    carousel.appendChild(generatedPost);
  });

  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");

  carouselActions(items, currentIndex);
  updateCarousel(items, currentIndex);
}

function updateCarousel(items, currentIndex) {
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

function carouselActions(items, currentIndex) {
  const totalItems = items.length;

  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel(items, currentIndex);
  });

  prevButton.addEventListener("click", (event) => {
    event.preventDefault();
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel(items, currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel(items, currentIndex);
  }, 10000);
}
