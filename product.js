document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    const listCard = document.querySelector(".listCard");
    const total = document.querySelector(".total");
    const quantity = document.querySelector(".quantity");
    const shopping = document.querySelector(".shopping");
    const closeShopping = document.querySelector(".closeShopping");

    let cartItems = [];

    function addToCart(product) {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
        updateCart();
        showToast("Added to cart");
    }

    function updateCart() {
        listCard.innerHTML = "";
        let totalPrice = 0;
        let totalQuantity = 0;
        cartItems.forEach(item => {
            totalPrice += item.price * item.quantity;
            totalQuantity += item.quantity;
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <div><img src="${item.image}" alt="${item.name}"/></div>
                <div>${item.name}</div>
                <div>Price: Kes.${item.price.toLocaleString()}</div>
                <div>Quantity: ${item.quantity}</div>`;
            listCard.appendChild(listItem);
        });
        total.innerText = `Total: Kes.${totalPrice.toLocaleString()}`;
        quantity.innerText = totalQuantity;
    }

    function showToast(message) {
        alert(message);
    }

    // Show the checkout modal
    function showCheckoutModal() {
        document.getElementById("checkout-modal").style.display = "block";
        document.getElementById("checkout-total").innerText = total.innerText; // Assuming total is the element showing the total price
    }

    // Hide the checkout modal
    function hideCheckoutModal() {
        document.getElementById("checkout-modal").style.display = "none";
    }

    // Handle checkout button click
    document.getElementById("checkout").addEventListener("click", showCheckoutModal);

    // Handle close button click
    document.querySelector(".close").addEventListener("click", hideCheckoutModal);

    document.getElementById("close-checkout").addEventListener("click", hideCheckoutModal);

    shopping.addEventListener("click", () => {
        document.body.classList.add("active");
    });

    closeShopping.addEventListener("click", () => {
        document.body.classList.remove("active");
    });

    // Handle "Complete Purchase" button click
    document.getElementById("complete-purchase").addEventListener("click", function() {
        // Retrieve checkout details from the cart
        const total_price = parseFloat(total.innerText.split("Kes.")[1].replace(/,/g, ""));
        const total_quantity = parseInt(quantity.innerText);
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        function clearCartAndCloseModal() {
            // Clear the cart items array
            cartItems = [];
            // Update the cart display
            updateCart();
            // Hide the checkout modal
            hideCheckoutModal();
        }

        // Send checkout details to the server
        fetch("product.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                total_price,  // Use the total_price from the cart
                total_quantity,
                address,
                phone,
                email
            })
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Failed to complete purchase");
            }
        })
        .then(data => {
            // Handle success message
            alert(data);
            // Clear the cart and hide the modal
            clearCartAndCloseModal();
        })
        .catch(error => {
            // Handle error message
            alert("Failed to complete purchase. Please try again later.");
        });
    });

    fetch("product.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("item");

                const img = document.createElement("img");
                img.src = product.image;
                img.alt = product.name;

                const name = document.createElement("div");
                name.classList.add("title");
                name.textContent = product.name;

                const price = document.createElement("div");
                price.classList.add("price");
                price.textContent = "Price: Kes." + product.price.toLocaleString();

                const button = document.createElement("button");
                button.textContent = "Add To Cart";
                button.addEventListener("click", () => addToCart(product));

                productDiv.appendChild(img);
                productDiv.appendChild(name);
                productDiv.appendChild(price);
                productDiv.appendChild(button);

                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});
