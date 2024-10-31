document.addEventListener('DOMContentLoaded', function() {
    // Service data
    var services = [
        {
            id: 'service1',
            title: 'Music Recording',
            imageUrl: './images/music.jpg',
            modalId: 'musicRecordingModal'
        },
        {
            id: 'service2',
            title: 'Mixing and Mastering',
            imageUrl: './images/mixing.jpg',
            modalId: 'mixingMasteringModal'
        },
        {
            id: 'service3',
            title: 'Video Recording and Podcasts',
            imageUrl: './images/recording.jpg',
            modalId: 'videoPodcastModal'
        }
    ];

    // Get the services section
    var servicesSection = document.getElementById('services');

    // Create service divs dynamically
    services.forEach(function(service) {
        var serviceDiv = document.createElement('div');
        serviceDiv.className = 'service';
        serviceDiv.id = service.id;
        serviceDiv.style.backgroundImage = `url(${service.imageUrl})`;

        var serviceTitle = document.createElement('h3');
        serviceTitle.textContent = service.title;

        var ctaButton = document.createElement('button');
        ctaButton.className = 'cta-button';
        ctaButton.textContent = 'Book Now';
        ctaButton.setAttribute('data-service', service.title);

        serviceDiv.appendChild(serviceTitle);
        serviceDiv.appendChild(ctaButton);
        servicesSection.appendChild(serviceDiv);
    });

    // Get the modal elements
    var musicRecordingModal = document.getElementById('musicRecordingModal');
    var mixingMasteringModal = document.getElementById('mixingMasteringModal');
    var videoPodcastModal = document.getElementById('videoPodcastModal');

    // Get the button that opens the modals
    var serviceButtons = document.querySelectorAll('.cta-button');

    // Get the <span> element that closes the modals
    var closeButtons = document.querySelectorAll('.close');

    // Function to open the correct modal
    function openModal(service) {
        if (service === 'Music Recording') {
            musicRecordingModal.style.display = 'block';
        } else if (service === 'Mixing and Mastering') {
            mixingMasteringModal.style.display = 'block';
        } else if (service === 'Video Recording and Podcasts') {
            videoPodcastModal.style.display = 'block';
        }
    }

    // Attach click event to each service button to open the modal
    serviceButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var service = button.getAttribute('data-service');
            openModal(service);
        });
    });

    // Function to close modals
    function closeModal() {
        musicRecordingModal.style.display = 'none';
        mixingMasteringModal.style.display = 'none';
        videoPodcastModal.style.display = 'none';
    }

    // Attach click event to each close button
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            closeModal();
        });
    });

    // Close modal when user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === musicRecordingModal ||
            event.target === mixingMasteringModal ||
            event.target === videoPodcastModal) {
            closeModal();
        }
    });

    // Scroll to top button
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
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    function handleFormSubmission(formId, hiddenNameId, modalId) {
        const form = document.getElementById(formId);

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const name = form.querySelector(`#${hiddenNameId}`).value;
            form.querySelector(`#${hiddenNameId}`).value = name; // Pass the name to the hidden input
            
            // Redirect to the thank you page with the customer's name as a query parameter
            window.location.href = `thanks.html?name=${encodeURIComponent(name)}`;
        });

        const modal = document.getElementById(modalId);
        const closeBtn = modal.querySelector('.close');

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Handle Mixing and Mastering Form
    handleFormSubmission('mixingMasteringForm', 'nameMixing', 'mixingMasteringModal');

    // Handle Video and Podcasts Form
    handleFormSubmission('videoPodcastForm', 'nameVideo', 'videoPodcastModal');
    handleFormSubmission('musicrecordingForm', 'nameMusic', 'musicRecordingModal');
});

