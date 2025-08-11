
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

function updateButtonText() {
  if (body.classList.contains('dark')) {
    toggleButton.textContent = 'Light Mode';
  } else {
    toggleButton.textContent = 'Dark Mode';
  }
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  updateButtonText();
});

// Initialize button text on load
updateButtonText();
