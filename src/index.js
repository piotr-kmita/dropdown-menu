import './style.css'

// Prevent showing animation on window resize
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


// Menu toogle on mobile
const navToggle = document.querySelector('.nav-toggle');
const menuToggle = document.querySelector('.menu-toggle');

navToggle.addEventListener('click', function (e) {
  this.classList.toggle('open');
  menuToggle.classList.toggle('active');
  e.stopPropagation();
});



// Dropdown toogle on mobile

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".dropdown a, .second-level a").forEach(el => {
    el.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('show');
      this.parentNode.classList.toggle('active');
    });
  });
});







