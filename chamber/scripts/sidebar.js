document.addEventListener("DOMContentLoaded", function() {
    const sidebarContent = document.getElementById('sidebarContent');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();
    let message;

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDiff = now - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (timeDiff < 24 * 60 * 60 * 1000) {
            message = "Back so soon! Awesome! Arigatou";
        } else {
            message = `You last visited ${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago.`;
        }
    }

    sidebarContent.textContent = message;
    localStorage.setItem('lastVisit', now);
});
