const toggleButton = document.getElementById('dark-mode-toggle');
const bodyElement = document.body;
const iconElement = toggleButton.querySelector('i');

toggleButton.addEventListener('click', function() {
  bodyElement.classList.toggle('dark-mode');
  if (bodyElement.classList.contains('dark-mode')) {
    iconElement.classList.remove('fa-moon');
    iconElement.classList.add('fa-sun');
  } else {
    iconElement.classList.remove('fa-sun');
    iconElement.classList.add('fa-code');
  }
});