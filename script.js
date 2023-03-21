// Define variables
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const form = document.querySelector('form');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  
  // Validate input fields
  if (name.trim() === '') {
    alert('Please enter your name');
    return;
  }
  
  if (email.trim() === '' || !email.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }
  
  if (message.trim() === '') {
    alert('Please enter a message');
    return;
  }
  
  // Send form data to server
  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      message
    })
  })
  .then(response => {
    if (response.ok) {
      alert('Your message has been sent');
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    } else {
      alert('There was an error sending your message');
    }
  })
  .catch(error => {
    alert('There was an error sending your message');
    console.error(error);
  });
});
