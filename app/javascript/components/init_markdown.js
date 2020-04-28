import MarkdownIt from 'markdown-it';

const initMarkdown = () => {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const markdown = new MarkdownIt();
  if (textarea) {
  textarea.addEventListener('keyup', (event) => {
    const html = markdown.render(textarea.value);
    preview.innerHTML = html;
  });
  }
};

const renderMarkdown = () => {
  const text = document.getElementById('markup-text');
  console.log(text);
  if (text) {
    const markdown = new MarkdownIt();
    const html = markdown.render(text.innerText);
    text.innerHTML = html
  }

}

export { initMarkdown, renderMarkdown };
