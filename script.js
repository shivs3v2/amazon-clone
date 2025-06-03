const products = [
    {id:1, name:"Wireless Headphone", price:2000, image:"images/wireless.webp"},
    {id:2, name:"iPhone 16 Pro Max", price:15000, image:"images/phone.jpg"},
    {id:3, name:"iWatch", price:89000, image:"images/iwatch.jpg"},
    {id:4, name:"Speaker", price:10000, image:"images/speaker.jpg"},
    {id:5, name:"Mackbook Pro M4", price:249999,image:"images/laptop.webp"},
    {id:6, name:"Bluetooth Speaker", price:5000, image:"images/bs.jpg"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
    const list = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src ="${product.image}" alt = "${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick = "addToCart(${product.id})">Add to Cart</button>
        `;
        list.appendChild(div);
    });
}

function addToCart(id){
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount(){
    document.getElementById("cart-count").textContent = cart.length;
}

renderProducts();
updateCartCount();