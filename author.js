// const params;

import { getAuthor, getPostsByAuthor, getRandomPic } from "./helpers.js";

const elPageTitle = document.querySelector("#page-title");
const elPostList = document.querySelector("#post-list");
const elLoading = document.querySelector("#loading");
const elEmptyPost = document.querySelector("#empty-post");

const createPostElement = (thumbnail, post) => {
  const elCol = document.createElement("div");
  elCol.classList.add("col-12");
  elCol.insertAdjacentHTML(
    "beforeend",
    `<div class="card mb-3 w-100">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${thumbnail}" class="img-fluid rounded-start" alt="skilvul" />
        </div>
        <div class="col-md-8 d-flex justify-between">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
            <a href="/post.html?post_id=${post.id}" class="btn btn-primary w-100 stretched-link">Read More</a>
          </div>
        </div>
      </div>
    </div>`
  );
  return elCol;
};

const renderPosts = async () => {
  // EDIT HERE
  const url = window.location.toString();
  const user_id = url.split("=")[1];

  const author = await getAuthor(user_id);
  elLoading.classList.add("d-none");

  if (!author) {
    elEmptyPost.classList.remove("d-none");
    return;
  }

  const posts = await getPostsByAuthor(user_id);

  elPostList.classList.remove("d-none");
  elPageTitle.innerHTML = author.name;

  for (let post of posts) {
    const thumbnail = await getRandomPic();
    const postEl = createPostElement(thumbnail, post);
    elPostList.appendChild(postEl);
  }
};

renderPosts();
