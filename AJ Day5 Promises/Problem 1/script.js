let currentOrderId = 1;

document.getElementById("order-button").addEventListener("click", orderFood);

function orderFood() {
    const foodItems = document.querySelectorAll("input[name='food']:checked");

    if (foodItems.length === 0) {
        alert("No food items selected");
        return;
    }

    orderCreate(foodItems).then(orders => {
        const ordersDiv = document.querySelector(".orders");
        ordersDiv.innerHTML = "";

        orders.forEach(order => {
            const itemDiv = document.createElement("div");
            const img = document.createElement("img");
            const id = document.createElement("p");

            img.src = order.imgSrc;
            id.innerText = `Order ID: ${order.orderId}`;

            itemDiv.appendChild(img);
            itemDiv.appendChild(id);
            ordersDiv.appendChild(itemDiv);
        });
    });
}

function orderCreate(foodItems) {
    return new Promise(function(resolve) {
        const orders = Array.from(foodItems).map(item => {
            const imgSrc = item.getAttribute("data-image");
            const orderId = currentOrderId++; // Increment order ID for each item
            return { imgSrc, orderId };
        });

        setTimeout(function() {
            resolve(orders);
        }, Math.floor(Math.random() * 5000) + 1000);
    });
}
