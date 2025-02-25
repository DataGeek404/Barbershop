document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form fields
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Prepare the data to send
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Send the data to the Google Apps Script web app
    fetch('https://script.google.com/macros/s/AKfycbw71KwHjccFtF7OV_e43ZEYrxfB6NuzEWKI2sq6iFzdhG5O1v0yoHW32j3IiXca17qQwA/exec', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Thank you for your message! We will get back to you soon.');
            document.getElementById('contact-form').reset(); // Clear the form
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    });
});