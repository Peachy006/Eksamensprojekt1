document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form?.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      showCustomAlert('Udfyld venligst alle felter.', 'red');
      return;
    }

    if (!email.includes('@')) {
      showCustomAlert('Indtast en gyldig e-mail.', 'red');
      return;
    }

    showCustomAlert('Din besked er sendt!', 'green');
    form.reset();
  });

  function showCustomAlert(message, color) {
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.style.backgroundColor = color === 'green' ? '#4CAF50' : '#F44336';
    alertBox.style.color = 'white';
    alertBox.style.padding = '10px 20px';
    alertBox.style.position = 'fixed';
    alertBox.style.top = '20px';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translateX(-50%)';
    alertBox.style.zIndex = '1000';
    alertBox.style.borderRadius = '5px';
    alertBox.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    alertBox.style.fontSize = '16px';

    document.body.appendChild(alertBox);

    setTimeout(() => {
      alertBox.remove();
    }, 4000); // Fjern efter 4 sekunder
  }
});
