// Select the button element by its ID (assuming the button has an ID).
const button = document.getElementById('checkout-button');
const errors = document.getElementById('errors');

const orderId = 14;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJiZWRvOTBAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTI1Njg5NzgsImV4cCI6MTcxMjU3MjU3OH0.JbZP38luw91bkXkTixlD_fWlMWykkb-tqZnYkVrfI88';
button.addEventListener('click', async () => {
  try {
    // Send a POST request to create a checkout session.
    const response = await fetch(`/payment/${orderId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Correct the header field name
        authorization:
          'Bearer ' + token,
      },
    });

    if (!response.ok) {
      // Handle errors by parsing the JSON response.
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    // Parse the successful response.
    const { url } = await response.json();

    // Redirect the user to the generated URL.
    window.location.href = url;
  } catch (error) {
    errors.innerHTML = error.message;
    console.error(error);
  }
});