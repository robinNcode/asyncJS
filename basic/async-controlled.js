const takeOrder = (customer, callback) => {
    console.log(`Take order for ${customer}`);
    callback(customer);
}

const processOrderAsync = (customer, callback) => {
    console.log(`Processing order for ${customer}`);

    setTimeout(() => {
        console.log(`Cooking completed`);
        console.log(`Order processed for ${customer}`);
        callback(customer);
    }, 3000);
}

const completeOrder = (customer) => {
    console.log(`Completed order for ${customer}`);
}

// Nested callbacks are called callback hell
takeOrder('Customer 1', (customer) => {
    processOrderAsync(customer, (customer) => {
        completeOrder(customer);
    });
});

console.log("Hey there!");
