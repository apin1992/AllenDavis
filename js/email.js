function sendMail() {
  let parms = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    number: document.getElementById('number').value,
  };

  emailjs
    .send('service_f9hown5', 'template_nqkomyv', parms)
    .then(alert('Email Sent Successfully! Have a blessed day.'));
}
