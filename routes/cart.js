const express = require('express');
const router = express.Router(); // Create a new router instance

// Get cart page
router.get('/', (req, res) => {
    res.render('cart'); // Render the cart view
});

module.exports = router; // Export the router for use in other files
