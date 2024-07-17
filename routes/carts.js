const express = require('express');
const router = express.Router();

// Simulate a cart (in a real scenario, you would fetch from a database)
const cartItems = [
    { id: 1, name: 'Shoe 1', price: 50.00, quantity: 2 },
    { id: 2, name: 'Shoe 2', price: 75.00, quantity: 1 }
];

// Route to get cart page
router.get('/', (req, res) => {
    res.render('carts');
});

// Route to get cart items (for AJAX requests)
router.get('/items', (req, res) => {
    res.json(cartItems);
});

module.exports = router;
