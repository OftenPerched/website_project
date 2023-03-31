async function getAccessToken() {
  const clientId = '21BFBezUCBRAyWqljQpp8w';
  const clientSecret = 'V1dRfYWFvrcmQCVfmFDYUee2c3GETg';
  const username = 'OftenPerched';
  const password = 'V1dRfYWFvrcmQCVfmFDYUee2c3';
  const basicAuth = btoa(`${clientId}:${clientSecret}`);
  const response = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=password&username=${username}&password=${password}`
  });
  const data = await response.json();
  return data.access_token;
}
function fetchLatestPost() {
  const subreddit = 'Warhammer40k';
  const url = `https://oauth.reddit.com/r/${subreddit}/new`;

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'User-Agent': 'web:myRedditClient:v1.0.0 (by /u/myRedditUsername)'
  };

  fetch(url, { headers })
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

function displayPost(post) {
  const postTitle = post.title;
  const postLink = `https://www.reddit.com${post.permalink}`;
  
  const postElement = document.createElement("div");
  postElement.innerHTML = `<a href="${postLink}" target="_blank">${postTitle}</a>`;
  
  const container = document.getElementById("left-container");
  container.appendChild(postElement);
}

fetchLatestPost(); // Call the function when the page loads
