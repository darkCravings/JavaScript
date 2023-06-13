function vegMarket(input) {

    let vegKg = Number(input[0]);
    let fruitKg = Number(input[1]);
    let vegWeight = Number(input[2]);
    let fruitWeight = Number(input[3]);

    let totalPrice = ((vegWeight * vegKg) + (fruitWeight * fruitKg)) / 1.94;

    console.log(totalPrice.toFixed(2));
}

vegMarket([1.5, 2.5, 10, 10]);