const processOrder = () => {
    console.log(`Processing order for customer 1`);

    /**
     * setTimeout is a function that takes a callback function and a time in milliseconds
     * The callback function is executed after the time specified in milliseconds
     * The callback function is executed asynchronously
     */
    setTimeout(() => {
        console.log(`Cooking completed`);
    }, 3000);
    console.log(`Customer 1 order will be ready in 3 seconds`);
}

console.log('Taking order for customer 1');
processOrder();
console.log('Order processed');