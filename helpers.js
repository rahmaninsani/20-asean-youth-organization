export const getPosts = async () => {
  // EDIT HERE
  try {
    const url = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await url.json();
    const filteredResponse = response.filter((item) => item.id < 17);

    return filteredResponse;
  } catch (error) {
    console.log("getPosts", error);
    throw error;
  }
};

export const getPost = async (post_id) => {
  // EDIT HERE
  // try {
  //   const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  //   const response = await url.json();
  //   return response;
  // } catch (error) {
  //   console.log("getPost", error);
  //   throw error;
  // }

  const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  if (!url.ok) {
    return false;
  }

  const response = await url.json();
  return response;
};

export const getPostComments = async (post_id) => {
  // EDIT HERE
  try {
    const url = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`);
    const response = await url.json();
    return response;
  } catch (error) {
    console.log("getPost", error);
    throw error;
  }
};

export const getAuthor = async (user_id) => {
  // EDIT HERE
  try {
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const response = await url.json();
    return response;
  } catch (error) {
    console.log("getPost", error);
    throw error;
  }
};

export const getPostsByAuthor = async (author_id) => {
  // EDIT HERE
};

export const getRandomPic = async () => {
  try {
    const image = await fetch("https://source.unsplash.com/random/720x480");
    return image.url;
  } catch (error) {
    console.log("getRandomPic", error);
    throw error;
  }
};

export const getRandomProfile = async () => {
  try {
    const image = await fetch("https://source.unsplash.com/480x480/?profile");
    return image.url;
  } catch (error) {
    console.log("getRandomProfile", error);
    throw error;
  }
};
