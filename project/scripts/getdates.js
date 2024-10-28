  // Get the current date
  const currentDate = new Date();

  // Format the date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fullDate = currentDate.toLocaleDateString('en-US', options);

  // Display the full date
  document.getElementById('full-date').innerText = fullDate;
  document.getElementById(
    "lastmodified"
  ).innerHTML = `Last modified: ${document.lastModified}`