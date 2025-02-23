const postContent = document.getElementById('post-content');
const postName = window.location.pathname.split('/posts/')[1];

async function loadPost() {
  try {
    const response = await fetch(`/api/posts/${postName}`);
    const post = await response.json();

    const converter = new showdown.Converter();
    const meta = `
    <div class="text-sm text-gray-500">
    <div class="flex items-center">
    <span class="mr-2">${new Date(post.data.date).toLocaleDateString()}</span>
    <span class="mr-2">${post.data.author}</span>
    ${post.data.tags.map(tag => `<span class="mr-2">${tag}</span>`).join('')}
    </div>
    </div>`;
    const html = converter.makeHtml(post.content);
    
    postContent.innerHTML = html + meta;

    document.title = `${post.data.author} | ${post.data.title}`;

  } catch (error) {
    console.error('Error loading post:', error);
    postContent.innerHTML = '<div class="text-red-500">Post not found</div>';
  }
}

loadPost();
