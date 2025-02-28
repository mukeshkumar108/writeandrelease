const writeBox = document.getElementById('writeBox');
const releaseBtn = document.getElementById('releaseBtn');
const wordCount = document.getElementById('wordCount');
let timeout;

writeBox.addEventListener('input', () => {
  clearTimeout(timeout);
  const text = writeBox.value.trim();
  const words = text.split(/\s+/).filter(word => word.length > 0).length;
  wordCount.textContent = `${words} words`;

  if (words >= 250) {
    releaseBtn.style.display = 'block';
  } else {
    releaseBtn.style.display = 'none';
    timeout = setTimeout(() => {
      writeBox.value = '';
      wordCount.textContent = '0 words';
      releaseBtn.style.display = 'none';
    }, 30000); // 30 seconds
  }
});

releaseBtn.addEventListener('click', () => {
  writeBox.value = '';
  wordCount.textContent = '0 words';
  releaseBtn.style.display = 'none';
});

window.onload = () => {
  writeBox.value = '';
  wordCount.textContent = '0 words';
  releaseBtn.style.display = 'none';
};