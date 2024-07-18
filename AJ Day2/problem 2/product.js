document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products-container");
    const counter = document.getElementById("counter");

    function updateCounter() {
        const products = JSON.parse(localStorage.getItem("Products")) || [];
        counter.textContent = `Total Products: ${products.length}`;
    }

    function renderProducts() {
        const products = JSON.parse(localStorage.getItem("Products")) || [];
        productsContainer.innerHTML = "";

        products.forEach((product, index) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const img = document.createElement("img");
            img.src = product.image;

            const name = document.createElement("div");
            name.textContent = `Name: ${product.name}`;

            const category = document.createElement("div");
            category.textContent = `Category: ${product.category}`;

            const price = document.createElement("div");
            price.textContent = `Price: ${product.price}`;

            const gender = document.createElement("div");
            gender.textContent = `Gender: ${product.gender}`;

            const sold = document.createElement("button");
            sold.textContent = `Sold: ${product.sold}`;
            sold.id = "sold";
            sold.style.backgroundColor = product.sold ? "red" : "green";
            sold.addEventListener("click", () => toggleSold(index));

            const remove = document.createElement("button");
            remove.textContent = "Remove";
            remove.id = "remove";
            remove.addEventListener("click", () => removeProduct(index));

            productDiv.appendChild(img);
            productDiv.appendChild(name);
            productDiv.appendChild(category);
            productDiv.appendChild(price);
            productDiv.appendChild(gender);
            productDiv.appendChild(sold);
            productDiv.appendChild(remove);

            productsContainer.appendChild(productDiv);
        });

        updateCounter();
    }

    function toggleSold(index) {
        const products = JSON.parse(localStorage.getItem("Products")) || [];
        products[index].sold = !products[index].sold;
        localStorage.setItem("Products", JSON.stringify(products));
        renderProducts();
    }

    function removeProduct(index) {
        let products = JSON.parse(localStorage.getItem("Products")) || [];
        products.splice(index, 1);
        localStorage.setItem("Products", JSON.stringify(products));
        renderProducts();
    }

    renderProducts();
});
