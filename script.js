let cart = [];
let products = [
    { id: 1, name: "Fried Rice", price: 10.99, image: "fried rice 2024-09-30 at 20.53.44_6da1a935.jpg" },
    { id: 2, name: "Egg Source and Plantain", price: 9.99, image: "eggg 2024-09-30 at 20.53.44_01f9900d.jpg" },
    { id: 3, name: "Healthy Fish with Boiled Rice and Veggies", price: 50.10, image: "rice 2024-09-30 at 20.53.45_55563cb7.jpg" },
    { id: 4, name: "Ewedu Soup with Amala", price: 20.99, image: "amala 2024-09-30 at 21.19.37_4f57805b.jpg" },
    { id: 5, name: "Meat Pie", price: 30.99, image: "meat pie2024-09-30 at 21.19.37_3149a02c.jpg" },
    { id: 6, name: "Chicken Noodles", price: 15.99, image: "noodles 2024-09-30 at 21.19.37_03dd3183.jpg" },
    
];

// Add event listeners to add-to-cart buttons
document.querySelectorAll(".add-to-cart").forEach((button, index) => {
    button.addEventListener("click", () => {
        let product = products[index];
        cart.push(product);
        updateCart();
    });
});

// Update cart list and total
function updateCart() {
    let cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    let total = 0;
    cart.forEach((product) => {
        let li = document.createElement("li");
        li.textContent = `${product.name} - $${product.price}`;
        cartList.appendChild(li);
        total += product.price;
    });
    document.getElementById("total").textContent = `Total: $${total.toFixed(6)}`;
}
document.getElementById("checkout").addEventListener("click", function() {
    this.classList.remove("glow");
}, 500);

// Checkout functionality
document.getElementById("checkout").addEventListener("click", () => {
    alert("Checkout successful!");
    cart = {};
});