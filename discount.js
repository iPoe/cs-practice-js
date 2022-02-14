const basePrice = 100;
const baseDiscount = 15;

function getPriceWithDiscount(price, discount) {
    const porcentageWithDiscount = 100 - discount;
    const priceWithDiscount = ( price * porcentageWithDiscount)  / 100;
    return priceWithDiscount;
}






