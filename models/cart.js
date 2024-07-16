class Cart {
    constructor() {
        this.items = []; // Initialize an empty array to hold cart items
    }

    addItem(product, quantity) {
        this.items.push({ product, quantity }); // Add a new item to the cart
    }

    removeItem(productId) {
        // Filter out the item with the specified productId from the cart
        this.items = this.items.filter(item => item.product._id !== productId);
    }

    getTotalPrice() {
        // Calculate the total price of all items in the cart
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    getItems() {
        return this.items; // Return all items in the cart
    }
}

module.exports = Cart; // Export the Cart class for use in other files
