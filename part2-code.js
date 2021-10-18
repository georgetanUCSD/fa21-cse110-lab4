// function discountPrices(prices,discount){
//     var discounted = [];
//     var finalPrice = 0;
//     for (var i =0;i < prices.length; i++ ){
//         var discountedPrice = prices[i]*(1 - discount);

//         finalPrice = Math.round(discountedPrice * 100)/100;
//         discounted.push(finalPrice);
//     }
//     console.log(i);
//     console.log(discountedPrice);
//     console.log(finalPrice);


//     return discounted;
// }

// discountPrices([100,200,300], 0.5);

function discountPrices(prices,discount){
    const discounted = [];
    const finalPrice = 0;
    const length = prices.length;
    for (let i =0;i < prices.length; i++ ){
        const discountedPrice = prices[i]*(1 - discount);

        finalPrice = Math.round(discountedPrice * 100)/100;
        discounted.push(finalPrice);
    }
    // console.log(i);
    // console.log(discountedPrice);
    // console.log(finalPrice);
    console.log(length);


    return discounted;
}

discountPrices([100,200,300], 0.5);