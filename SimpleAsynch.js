function getOrders(orderName) {
  console.log("The order is " + orderName);
  sendOrderToServer(function() {
    console.log("Done serving " + orderName);
  });
}

function sendOrderToServer(callback) {
  // simulates the order taking time
  setTimeout(callback, 5000);
}

getOrders("Arun");
getOrders("Santosh");
getOrders("Ramesh");
getOrders("Suresh");