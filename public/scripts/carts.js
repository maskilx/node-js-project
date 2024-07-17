$(document).ready(function() {
    // Initialize an empty cart
    let cartItems = [];

    // Function to load cart items
    function loadCartItems() {
        let cartContent = '';
        let total = 0;

        cartContent += `
            <div id="cart-container">
                <h2>Shopping Cart</h2>
                <div id="cart-items">
        `;

        if (cartItems.length === 0) {
            cartContent += '<p>Your cart is empty.</p>';
        } else {
            cartItems.forEach(item => {
                cartContent += `
                    <div class="cart-item">
                        <p>${item.name} (x${item.quantity}) - Size: ${item.size}</p>
                        <p>$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                `;
                total += item.price * item.quantity;
            });
        }

        cartContent += `
                </div>
        `;

        if (cartItems.length > 0) {
            cartContent += `
                <div id="cart-summary">
                    <p>Total: $<span id="cart-total">${total.toFixed(2)}</span></p>
                    <button id="checkout-button">Checkout</button>
                </div>
            `;
        }

        cartContent += `
            </div>
        `;

        $('#cart-content').html(cartContent);
    }

    // Function to add item to cart
    function addItemToCart(item) {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id && cartItem.size === item.size);
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity if item already in cart with same size
        } else {
            cartItems.push(item); // Add new item to cart
        }
        loadCartItems();
    }

    // Handle click on add-to-cart button
    $(document).on('click', '.add-to-cart', function() {
        const itemId = $(this).data('id');
        const itemName = $(this).siblings('h1').text();
        const itemPrice = parseFloat($(this).siblings('.price').text().replace('$', ''));
        const itemSize = $(this).siblings('.size-selector').find('select').val();
        
        if (!itemSize) {
            alert("Please select a size.");
            return;
        }

        const newItem = {
            id: itemId,
            name: itemName,
            price: itemPrice,
            size: itemSize,
            quantity: 1
        };

        addItemToCart(newItem);
    });

    // Initial empty cart load
    loadCartItems();
});
