// document.getElementById('videoImage').addEventListener('click', function(){
//     console.log('image is clicked');
// })
window.addEventListener('DOMContentLoaded', () => {
    $("a[href*='#']").on("click", function(e){
      const anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
    });
  })
  
  const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);

document.addEventListener("DOMContentLoaded", function() {
  let index = 0;
  const testimonials = document.querySelectorAll('.testimonial');

  function showTestimonial() {
      testimonials.forEach((testimonial, i) => {
          testimonial.classList.remove('active');
          if (i === index) {
              testimonial.classList.add('active');
          }
      });
      index = (index + 1) % testimonials.length;
  }

  showTestimonial(); // Initial call
  setInterval(showTestimonial, 3000); // Change testimonial every 3 seconds
});


document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 200) { // Show button after scrolling down 200px
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  });

  scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});
