const cart = [];
const productPrices = {
  "Laptop": 5000,
  "Tumbler": 350,  // updated price from your HTML
  "Vintage T-shirt": 300
};

function addToCart(productName) {
    cart.push(productName);
    alert(`${productName} added to cart!`);
    updateCartDisplay();
    updateTotal();
}

function donate(productName) {
    alert(`Thank you for donating ${productName}! 🌱`);
}

function swapItem(productName) {
    alert(`Swap request sent for ${productName}.`);
}

function generateStory() {
    const storyOutput = document.getElementById('story-output');
    const products = ["a jacket", "a book", "a gadget", "a toy", "a bag"];
    const actions = [
        "was found by a curious child",
        "made someone's day special",
        "brought joy to a family",
        "changed the course of a day",
        "sparked creativity"
    ];
    
    const product = products[Math.floor(Math.random() * products.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    
    storyOutput.textContent = `Once upon a time, ${product} ${action}.`;
}

function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const p = document.createElement('p');
        p.textContent = `${index + 1}. ${item}`;
        cartItems.appendChild(p);
    });
}

function updateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += productPrices[item] || 0;
    });
    if(document.getElementById('offsetCheck').checked) total += 10;
    document.getElementById('cart-total').innerText = "Total: ₹" + total;
}

function checkout() {
    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }
    const offsetCheck = document.getElementById('offsetCheck').checked;
    let message = `You have purchased: ${cart.join(', ')}.`;
    if(offsetCheck) message += "\nCarbon offset included! 🌱";
    alert(message);
    cart.length = 0;
    updateCartDisplay();
    updateTotal();
}

// 🔗 Attach button events after page load
document.addEventListener("DOMContentLoaded", () => {
    // Select all product cards
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const productName = card.querySelector("h3").innerText;

        // Add to Cart
        card.querySelector(".add-to-cart").addEventListener("click", () => {
            addToCart(productName);
        });

        // Donate
        card.querySelector(".donate").addEventListener("click", () => {
            donate(productName);
        });

        // Swap
        card.querySelector(".swap").addEventListener("click", () => {
            swapItem(productName);
        });
    });

    // Checkout button
    document.getElementById("checkout").addEventListener("click", checkout);
});
