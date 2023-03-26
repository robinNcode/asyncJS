const processOrder = (customer) => {
    console.log(`Processing order for customer 1`);
    setTimeout(() => {
        console.log(`Cooking completed`);
    }, 3000);
    console.log(`Customer 1 order will be ready in 3 seconds`);
}

console.log('Taking order for customer 1');
processOrder();
console.log('Order processed');