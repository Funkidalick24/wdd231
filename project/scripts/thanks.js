
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Extract the customer's name from the URL and display it
    const urlParams = new URLSearchParams(window.location.search);
    const customerName = urlParams.get('name');
    document.getElementById('customerName').textContent = customerName;



