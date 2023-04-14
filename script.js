const input = document.getElementById('input');
const convertBtn = document.getElementById('convertBtn');
const output = document.getElementById('output');

convertBtn.addEventListener('click', () => {
  const text = input.value.trim();

  if (text) {
    const lines = text.split('\n');
    let html = '';
    lines.forEach((line) => {
      html += `<li>${line}</li>`;
    });
    output.innerHTML = html;
  } else {
    output.innerHTML = '';
  }
});
