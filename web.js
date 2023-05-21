// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var nameInput = document.querySelector('input[name="name"]');
    var emailInput = document.querySelector('input[name="email"]');
    var messageInput = document.querySelector('textarea[name="message"]');
  
    // Validate form inputs
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Send form data to the server (dummy code)
    var formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };
  
    // Dummy code to simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
  
  // Attach form submission event listener
  var form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  