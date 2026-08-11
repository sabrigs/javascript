function calculateDiscount(price, discount) {
    let calculatePrice = price - (price * discount/100);
    return calculatePrice;
}

const finalPrice = calculateDiscount(200, 15);

console.log(finalPrice);