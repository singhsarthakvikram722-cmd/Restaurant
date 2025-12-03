// Get the form and the message paragraph elements
const reservationForm = document.getElementById('reservation-form');
const reservationMessage = document.getElementById('reservation-message');

// Add an event listener for when the form is submitted
reservationForm.addEventListener('submit', function(event) {
    // 1. Stop the form from doing its default action (reloading the page)
    event.preventDefault();

    // 2. Get the values from the form inputs
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // 3. Create a simple confirmation message
    const message = `Thank you, **${name}**! Your reservation for **${guests}** guests on **${date}** at **${time}** has been confirmed. We look forward to seeing you!`;

    // 4. Display the message on the page
    reservationMessage.innerHTML = message;
    reservationMessage.style.color = '#a03c3c'; // Make the message stand out

    // 5. Clear the form fields after successful submission (Optional)
    reservationForm.reset();
});