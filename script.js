// Typing Animation for Role
const roles = [
  "Java Full Stack Developer",
  "IT Recruiter",
  "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let pauseAfterTyping = 1500;
const roleElement = document.getElementById("typing-role");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(() => {
      eraseRole();
    }, pauseAfterTyping);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeRole();
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});
