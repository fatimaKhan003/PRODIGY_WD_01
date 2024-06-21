document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById('navbar');
  const navItems = document.querySelectorAll('.nav-item a');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#222";
    } else {
      navbar.style.backgroundColor = "#333";
    }
  });

  navItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); 

      const targetSection = document.querySelector(item.hash);
      targetSection.scrollIntoView({ behavior: 'smooth' });

      
      document.body.style.backgroundColor = getComputedStyle(targetSection).backgroundColor;
    });
  });
});
