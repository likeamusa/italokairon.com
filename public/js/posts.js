
fetch('/api/posts')
  .then(response => response.json())
  .then(posts => {
    const allPosts = document.querySelector('#all-posts');
    allPosts.innerHTML = '';
    
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <a
        class="cursor-pointer hover:underline hover:text-blue-500 text-xl"
        href="${post.link}"
        >${post.title.replace('_', ' ')}</a><br/>
        <small>by likeamusa, ${new Date().toLocaleDateString()}</small>
      `;
      allPosts.appendChild(postElement);
    });
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
    document.querySelector('#all-posts').innerHTML = '<p>Error loading posts. Please try again later.</p>';
  });
