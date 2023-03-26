const aprocessOrder = () => {
    console.log('Processing order for customer 1');
    var currentTime = new Date().getTime();

    while (currentTime + 3000 >= new Date().getTime());

    console.log(`Order processed on ${new Date().getTime()}`);
};

console.log('Taking order for customer 1');
aprocessOrder();
console.log('Order processed');