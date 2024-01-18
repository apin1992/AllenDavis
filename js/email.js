

function sendMail() {
    let params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
      number: document.getElementById('number').value
    };

    emailjs.send('service_lxuxqid', 'template_k7rmfkg',params).then(alert('Email Sent!'));

}

template_k7rmfkg;