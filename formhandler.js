document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const userName = document.getElementById('userName').value;
        const userEmail = document.getElementById('userEmail').value;
        const userReview = document.getElementById('userReview').value;
        console.log('Name:', userName, 'Email:', userEmail, 'Review:', userReview);
        
    });
});