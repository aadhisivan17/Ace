// =============================
// CART DATA
// =============================

let cart = [];


// =============================
// ADD TO CART
// =============================

function addToCart(name, price) {

    let existingProduct = cart.find(
        product => product.name === name
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(name + " added to cart!");
}


// =============================
// UPDATE CART
// =============================

function updateCart() {

    let cartItems =
        document.getElementById("cartItems");

    let cartCount =
        document.getElementById("cartCount");

    let cartTotal =
        document.getElementById("cartTotal");


    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    }


    cart.forEach((product, index) => {

        total +=
            product.price *
            product.quantity;

        count += product.quantity;


        let item = document.createElement("div");

        item.className = "cart-item";


        item.innerHTML = `

            <div>

                <strong>
                    ${product.name}
                </strong>

                <br>

                ₹${product.price}

                × ${product.quantity}

            </div>

            <button
                class="remove"
                onclick="removeFromCart(${index})">

                Remove

            </button>

        `;


        cartItems.appendChild(item);

    });


    cartCount.innerText = count;

    cartTotal.innerText =
        total.toLocaleString("en-IN");
}


// =============================
// REMOVE PRODUCT
// =============================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// =============================
// OPEN CART
// =============================

function openCart() {

    document.getElementById("cartBox")
        .style.display = "block";

}


// =============================
// CLOSE CART
// =============================

function closeCart() {

    document.getElementById("cartBox")
        .style.display = "none";

}


// =============================
// FILTER PRODUCTS
// =============================

function filterProducts(category) {

    let products =
        document.querySelectorAll(".product");


    products.forEach(product => {

        let productCategory =
            product.getAttribute(
                "data-category"
            );


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display =
                "block";

        } else {

            product.style.display =
                "none";

        }

    });


    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// =============================
// SEARCH PRODUCTS
// =============================

function searchProducts() {

    let searchValue =
        document
            .getElementById("search")
            .value
            .toLowerCase();


    let products =
        document.querySelectorAll(".product");


    products.forEach(product => {

        let productName =
            product
                .querySelector("h3")
                .innerText
                .toLowerCase();


        if (
            productName.includes(searchValue)
        ) {

            product.style.display =
                "block";

        } else {

            product.style.display =
                "none";

        }

    });

}


// =============================
// CHECKOUT
// =============================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty!"
        );

        return;
    }


    alert(
        "Thank you for shopping with RideParts!"
    );

}
