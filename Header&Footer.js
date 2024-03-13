document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
            document.getElementById('header').innerHTML = data;
       });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
            document.getElementById('footer').innerHTML = data;
       });
});

function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
      }
    
      window.onscroll = function() {
      const scrollToTopButton = document.getElementById('scrollToTop');
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
             scrollToTopButton.style.display = 'block';
          }else {
          scrollToTopButton.style.display = 'none';
          }
      };
