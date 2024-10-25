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

document.addEventListener("DOMContentLoaded", function() {
  const testimonials = [
      {
          imgSrc: "images/273632618_4887887854625852_3622293801528718570_n.jpg",
          name: "Nutty O",
          text: "Great service! Highly recommend this business."
      },
      {
          imgSrc: "images/321104798_839333530505329_3644603490379534327_n.jpg",
          name: "Seh Calaz",
          text: "Excellent support and fantastic results."
      },
      {
          imgSrc: "images/freeman.jpg",
          name: "Freeman",
          text: "Professional and reliable, will definitely return."
      }
  ];

  const testimonialsContainer = document.getElementById('clientTestimonials');

  testimonials.forEach(testimonial => {
      const testimonialDiv = document.createElement('div');
      testimonialDiv.classList.add('testimonial');
      testimonialDiv.innerHTML = `
          <img src="${testimonial.imgSrc}" alt="${testimonial.name}">
          <h2>${testimonial.name}</h2>
          <p>"${testimonial.text}"</p>
      `;
      testimonialsContainer.appendChild(testimonialDiv);
  });

  let currentIndex = 0;

  function showTestimonial(index) {
      const testimonialElements = document.querySelectorAll('.testimonial');
      testimonialElements.forEach((testimonial, i) => {
          testimonial.classList.remove('active');
          if (i === index) {
              testimonial.classList.add('active');
          }
      });
  }

  function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
  }

  showTestimonial(currentIndex);
  setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
});
