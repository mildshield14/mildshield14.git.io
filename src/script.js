$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
  event.preventDefault();
  $('html, body').stop().animate({
  scrollTop: target.offset().top
  }, 1000);
  }
  });
  });

  

function toggleNav() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}




function displayResume(){
  location.replace("/src/resume.html");
}

function linkedin() {
    window.location.replace("https://www.linkedin.com/in/vennilasooben");
}








