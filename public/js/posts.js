
fetch('https://api.github.com/repos/likeamusa/blog/contents/posts')
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
        href="posts/${post.name.replace('.md', '')}"
        >${post.name.replace('.md', '')}</a><br/>
        <small>by likeamusa</small>
      `;
      allPosts.appendChild(postElement);
    });
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
    document.querySelector('#all-posts').innerHTML = '<p>Error loading posts. Please try again later.</p>';
  });
