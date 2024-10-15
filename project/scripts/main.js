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

