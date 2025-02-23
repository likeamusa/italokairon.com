// https://github.com/likeamusa/italokairon.com
// Fetch and render README.md content
fetch('https://raw.githubusercontent.com/likeamusa/italokairon.com/main/README.md', {
  method: 'GET',
  headers: {
    'Content-Type': 'text/plain',
  }
})
  .then(response => response.text())
  .then(text => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(text);
    document.getElementById('about').innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching README:', error);
    document.getElementById('about').innerHTML = `<p>Falha ao carregar, por favor tente de novo mais tarde.</p> <p>Error fetching README: ${error}</p>`;
  });
