 const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });




  const elements = document.querySelectorAll('.fade-left, .fade-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');  // show animation
      } else {
        entry.target.classList.remove('show'); // reset when out of view
      }
    });
  }, { threshold: 0.2 }); // 20% visible hone par trigger hoga

  elements.forEach(el => observer.observe(el));



  const serviceCards = document.querySelectorAll('.fade-up');

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.2 });

  serviceCards.forEach(el => observer2.observe(el));

const products = document.querySelectorAll('.fade-left');

  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.2 });

  products.forEach(el => observer3.observe(el));