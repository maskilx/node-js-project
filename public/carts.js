$(document).ready(function() {
    // Initialize an empty cart
    let cartItems = [];

    // Function to load cart items
    function loadCartItems() {
        let cartContent = '';
        let total = 0;

        // Start building the cart content
        cartContent += `
            <div id="cart-container">
                <h2>Shopping Cart</h2>
                <div id="cart-items">
        `;

        // Check if the cart is empty
        if (cartItems.length === 0) {
            cartContent += '<p>Your cart is empty.</p>'; // Display empty cart message
        } else {
            // Loop through cart items and add them to the content
            cartItems.forEach(item => {
                cartContent += `
                    <div class="cart-item">
                        <p>${item.name} (x${item.quantity})</p>
                        <p>$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                `;
                total += item.price * item.quantity; // Update total price
            });
        }

        // Close the cart items container
        cartContent += `
                </div>
        `;

        // If there are items in the cart, add the summary and checkout button
        if (cartItems.length > 0) {
            cartContent += `
                <div id="cart-summary">
                    <p>Total: $<span id="cart-total">${total.toFixed(2)}</span></p>
                    <button id="checkout-button">Checkout</button>
                </div>
            `;
        }

        // Close the cart container
        cartContent += `
            </div>
        `;

        // Update the cart content in the DOM
        $('#cart-content').html(cartContent);
    }

    // Simulate adding items to the cart when the button is clicked
    $('#add-item-button').click(function() {
        const newItem = {
            id: cartItems.length + 1,
            name: `Shoe ${cartItems.length + 1}`,
            price: Math.floor(Math.random() * 100) + 1,
            quantity: 1
        };
        cartItems.push(newItem); // Add new item to the cart
        loadCartItems(); // Reload the cart items
    });

    // Initial empty cart load
    loadCartItems();
});
