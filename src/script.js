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



function linkedin() {
    window.location.replace("https://www.linkedin.com/in/vennilasooben");
}


function addNumbersProject(){
  const projectElements = document.querySelectorAll('.projectnumber');
  
  console.log(projectElements)

  projectElements.forEach((element, index) => {
   
    const projectNumber = index + 1;

    element.textContent += ` ${projectNumber}`;
});
}








