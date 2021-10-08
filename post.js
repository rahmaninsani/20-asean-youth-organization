import { getPost, getPostComments, getAuthor, getRandomPic, getRandomProfile } from "./helpers.js";

// const params; // tempat menampung parameter yang ada

const elLoading = document.querySelector("#loading");
const elNotFound = document.querySelector("#not-found");
const elDetailBerita = document.querySelector("#detail-berita");
const elPageTitle = document.querySelector("#page-title");
const elCardImg = document.querySelector(".card-img-top");
const elCardText = document.querySelector(".card-text");
const elCardAuthorImg = document.querySelector("#author-img");
const elCardAuthorName = document.querySelector("#author-name");
const elCardAuthorEmail = document.querySelector("#author-email");
const elListGroup = document.querySelector("#list-group");

const createListElement = (comment) => {
  const elListItem = document.createElement("div");
  const elListItemContainer = document.createElement("div");
  const elListItemTitle = document.createElement("div");
  const elListItemText = document.createElement("span");

  elListItem.classList.add("list-group-item");
  elListItemContainer.classList.add("ms-2", "me-auto");
  elListItemTitle.classList.add("fw-bold");

  elListItemTitle.innerHTML = comment.email;
  elListItemText.innerHTML = comment.body;

  elListItemContainer.appendChild(elListItemTitle);
  elListItemContainer.appendChild(elListItemText);
  elListItem.appendChild(elListItemContainer);

  return elListItem;
};

const renderPost = async () => {
  // EDIT HERE
  const url = window.location.toString();
  const post_id = url.split("=")[1];

  const post = await getPost(post_id);
  const thumbnail = await getRandomPic();
  const user_id = post.userId;
  const author = await getAuthor(user_id);
  const profilePicture = await getRandomProfile();

  //logic error

  elLoading.classList.add("d-none");
  elDetailBerita.classList.remove("d-none");

  elPageTitle.innerHTML = post.title;
  elCardImg.setAttribute("src", thumbnail);
  elCardText.innerHTML = post.body;
  elCardAuthorImg.setAttribute("src", profilePicture);
  elCardAuthorName.innerHTML = author.name;
};

renderPost();
