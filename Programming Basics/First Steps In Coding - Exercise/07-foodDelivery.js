function foodDelivery(input) {

    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let veg = Number(input[2]);

    let sum = (chicken * 10.35) + (fish * 12.40) + (veg * 8.15);
    let desert = sum * 0.20;
    let delCharge = 2.50;
    let totalPrice = sum + desert + delCharge;

    console.log(totalPrice);
}

foodDelivery(["9", "2", "6"]);