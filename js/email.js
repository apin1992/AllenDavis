

function sendMail() {
    let parms = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
      number: document.getElementById('number').value
    };

    emailjs
      .send('service_emailservice', 'template_6nkr9he', parms)
      .then(alert('Email Sent Successfully! Have a blessed day.'));

}

