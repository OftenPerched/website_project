function fetchLatestPost() {
  const subreddit = "Warhammer40K";
  const url = `https://www.reddit.com/r/${subreddit}/new.json?sort=new&limit=1`;
  const headers = { "Authorization": "Bearer V1dRfYWFvrcmQCVfmFDYUee2c3GETg" };
  
  fetch(url, { headers })
    .then(response => response.json())
    .then(data => {
      const post = data.data.children[0].data;
      displayPost(post);
    })
    .catch(error => console.error(error));
}
function displayPost(post) {
  const postTitle = post.title;
  const postLink = `https://www.reddit.com${post.permalink}`;
  
  const postElement = document.createElement("div");
  postElement.innerHTML = `<a href="${postLink}" target="_blank">${postTitle}</a>`;
  
  const container = document.getElementById("left-container");
  container.appendChild(postElement);
}
function fetchLatestPost() {
  const subreddit = 'Warhammer40k';
  const url = `https://www.reddit.com/r/${subreddit}/new.json`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const post = data.data.children[0].data;
      const postTitle = post.title;
      const postUrl = `https://www.reddit.com${post.permalink}`;
      const postAuthor = post.author;

      const postContainer = document.getElementById('reddit-post');
      postContainer.innerHTML = `
        <h2>${postTitle}</h2>
        <p>Posted by ${postAuthor}</p>
        <a href="${postUrl}" target="_blank">View Post</a>
      `;
    })
    .catch(error => console.error(error));
}

fetchLatestPost(); // Call the function when the page loads

