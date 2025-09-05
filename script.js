// Typing Effect
const texts = ["Software & Websites Developer", "AI Chatbots Developer", "Graphics Designer", "Freelancer"];
let count = 0, index = 0, currentText = "", letter = "";
(function type(){
  if(count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typing").textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
    setTimeout(type, 1200);
  } else {
    setTimeout(type, 120);
  }
})();

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// 🔥 Scroll Reveal Effect
function revealOnScroll() {
  const reveals = document.querySelectorAll('.about-image img, .about-text');
  
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120; // how early animation starts

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("show");
    } else {
      el.classList.remove("show"); // remove so it replays on scroll
    }
  });
}

// Run on scroll + on page load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
