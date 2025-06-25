// script.js
const textEl = document.querySelector('.typing-text');
const modeToggle = document.getElementById('mode-toggle');
const phrases = ["a Front End Developer", "a Web Developer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  textEl.textContent = currentPhrase.substring(0, charIndex);

  if (!isDeleting && charIndex === currentPhrase.length) {
    setTimeout(() => {
      isDeleting = true;
      type();
    }, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 100 : 150);
  }
}

document.addEventListener("DOMContentLoaded", type);

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (Form submission would be handled in real deployment)");
});
