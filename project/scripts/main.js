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
  
  



document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 100) { // Show button after scrolling down 200px
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
            text: "The studio's atmosphere is inspiring and the staff is incredibly knowledgeable. The equipment is top-notch, and I left with a track that sounds exactly like I imagined. Can't wait to come back!."
        },
        {
            imgSrc: "images/321104798_839333530505329_3644603490379534327_n.jpg",
            name: "Seh Calaz",
            text: "The producer helped bring my vision to life in ways I hadn't even considered. Their technical skills and creative insights made the recording process smooth and enjoyable."
        },
        {
            imgSrc: "images/freeman.jpg",
            name: "Freeman",
            text: "From the moment I walked in, I felt welcome. The team went above and beyond to accommodate my needs, and the final product exceeded all my expectations. This studio is a gem!"
        }
    ];

    const testimonialsContainer = document.getElementById('clientTestimonials');

    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');
        testimonialDiv.innerHTML = `
            <img src="${testimonial.imgSrc}" alt="${testimonial.name}">
            <p>"${testimonial.text}"</p>
            <h2>${testimonial.name}</h2>
            
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

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    showTestimonial(currentIndex);
    setInterval(nextTestimonial, 5000); // Auto-rotate every 5 seconds

    document.getElementById('nextBtn').addEventListener('click', nextTestimonial);
    document.getElementById('prevBtn').addEventListener('click', prevTestimonial);
});
document.addEventListener("DOMContentLoaded", function() {
    const services = [
        {
            name: "Music Recording",
            imgSrc: "./images/music.jpg",
            description: "Capture your sound with high-quality equipment and professional guidance."
        },
        {
            name: "Mixing and Mastering",
            imgSrc: "./images/mixing.jpg",
            description: "Get your tracks mixed and mastered by experienced engineers."
        },
        {
            name: "Video Recording and Podcasts",
            imgSrc: "./images/recording.jpg",
            description: "Produce professional videos and podcasts with our state-of-the-art facilities."
        }
    ];

    const servicesContainer = document.getElementById('services');

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service');
        serviceDiv.style.backgroundImage = `url(${service.imgSrc})`;
        serviceDiv.innerHTML = `
            <div class="service-text">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
            </div>
        `;
        servicesContainer.appendChild(serviceDiv);
    });
});
