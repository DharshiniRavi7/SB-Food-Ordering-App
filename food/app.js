let cart = [];
let totalAmount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const itemName = e.target.getAttribute('data-name');
        const itemPrice = parseFloat(e.target.getAttribute('data-price'));

        // Add item to the cart
        cart.push({ name: itemName, price: itemPrice });

        // Update the total amount
        totalAmount += itemPrice;

        // Display updated cart items and total
        updateCart();
    });
});

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');

    // Clear the current cart display
    cartItemsContainer.innerHTML = '';

    // Display each cart item
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = ${item.name} - $${item.price.toFixed(2)};
        cartItemsContainer.appendChild(itemElement);
    });

    // Update the total
    totalAmountElement.textContent = totalAmount.toFixed(2);
}
// Checkout button event listener
const checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before checking out.');
        return;
    }

    // Display a simple order summary (could be more complex)
    let orderSummary = 'Order Summary:\n';
    cart.forEach(item => {
        orderSummary += ${item.name} - $${item.price.toFixed(2)}\n;
    });
    orderSummary += \nTotal Amount: $${totalAmount.toFixed(2)};

    // Show a message that the order will be delivered
    alert("Your order will be delivered shortly!");

    // Optionally, you can show a confirmation message on the page
    const confirmationMessage = document.createElement('div');
    confirmationMessage.classList.add('order-confirmation');
    confirmationMessage.innerHTML = "<h2>Your order will be delivered shortly!</h2>";
    document.body.appendChild(confirmationMessage);  // Display the message at the bottom of the page

    // Reset the cart after checkout (optional)
    cart = [];
    totalAmount = 0;
    updateCart();  // This will clear the cart display
});
