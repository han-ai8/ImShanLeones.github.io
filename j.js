
$(document).ready(function() {
    // Set default content when modal is shown
    $('#exampleModal').on('show.bs.modal', function () {
        $('#modalInput').val(''); // Clear previous input
        $('#modalBody').text('This is the default content of the modal. You can edit this content.');
    });

    // Handle save button click
    $('#saveChanges').on('click', function () {
        const userInput = $('#modalInput').val(); // Get the input value
        if (userInput) {
            // Update modal body with user input
            $('#modalBody').text(userInput);
            alert('Changes have been saved!'); // Show feedback to the user
        } else {
            alert('Please enter some content before saving.'); // Alert if no input
        }
    });

    // Add additional event handling or functionality as needed
});
    







