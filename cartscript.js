document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update the cart display
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.title} - Rs${item.price.toFixed(2)} x ${item.quantity}
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(li);
            total += item.price * item.quantity;
        });

        totalElement.textContent = total.toFixed(2); // Display total with 2 decimal places

        // Update localStorage with the updated cart
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Event listener for removing items from the cart
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) {
            const id = e.target.getAttribute('data-id');
            cart = cart.filter(item => item.id !== id); // Remove item from cart
            updateCart(); // Update cart display
        }
    });

    // Initial update of the cart display
    updateCart();
});
// Function to handle adding items to the cart
function addToCart(book) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the item already exists in cart
    const existingItem = cart.find(item => item.id === book.id);
    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item is already in cart
    } else {
        cart.push({ ...book, quantity: 1 }); // Add item to cart with quantity 1
    }
    
    // Update localStorage with the updated cart
    localStorage.setItem('cart', JSON.stringify(cart));
}
