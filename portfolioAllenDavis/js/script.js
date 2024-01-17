/* ========== toggle icon navbar ==========*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* ========== scroll sections active link ==========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    /* ========== sticky navbar ==========*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ========== remove toggle icon and navbar when click navbar link (scroll) ==========*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ========== scroll reveal ==========*/

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* ========== typed js  ==========*/

const typed = new Typed('.multiple-text', {
    strings: ['Crisis Clinician', 'Counsler', 'Army Soldier', 'Therapist', 'Crisis Clinician'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
})
function sendEmail() {
  var email = document.getElementById('email').value;

  // You can perform further validation here before processing the email
    function validateEmail(email) {
      // Regular expression for a basic email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Test the email against the regular expression
      return emailRegex.test(email);
    }

    // Example usage:
    var userEmail = 'user@example.com';
    if (validateEmail(userEmail)) {
      console.log('Valid email address');
    } else {
      console.log('Invalid email address');
    }


  // Display the entered email
  alert('Email submitted: ' + email);
}

document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Client-side validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      event.preventDefault();
    }
  });

