
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
    const modal = document.getElementById("producerModal");
    const modalBtn = document.getElementById("producerModalBtn");
    const closeBtn = document.querySelector(".close-button");

    // Open the modal
    modalBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Close the modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

