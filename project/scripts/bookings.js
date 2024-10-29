document.addEventListener("DOMContentLoaded", function() {
    // Modal functionality
    const modal = document.getElementById("bookingModal");
    const closeBtn = document.querySelector(".close-button");

    const serviceButtons = document.querySelectorAll(".cta-button");
    const modalServiceTitle = document.getElementById("modal-service-title");
    const serviceTypeInput = document.getElementById("serviceType");

    serviceButtons.forEach(button => {
        button.addEventListener("click", function() {
            const service = button.getAttribute("data-service");
            modalServiceTitle.textContent = service;
            serviceTypeInput.value = service;
            modal.style.display = "block";
        });
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
});
