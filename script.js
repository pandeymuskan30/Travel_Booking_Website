document.getElementById('search-button').addEventListener('click', function() {
    // Get user input
    const destinationInput = document.getElementById('destination').value.toLowerCase();
    const budgetInput = parseFloat(document.getElementById('budget').value);

    // Get all package items
    const packageItems = document.querySelectorAll('.package-item');

    // Loop through package items and filter based on input
    packageItems.forEach(item => {
        const packageName = item.querySelector('h3').textContent.toLowerCase();
        const packagePrice = parseFloat(item.querySelector('.price').textContent);

        // Check if the package matches the destination and budget
        if ((destinationInput === '' || packageName.includes(destinationInput)) && 
            (isNaN(budgetInput) || packagePrice <= budgetInput)) {
            item.style.display = 'block'; // Show the package
        } else {
            item.style.display = 'none'; // Hide the package
        }
    });
});
