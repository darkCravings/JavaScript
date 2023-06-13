function fishland(input) {

    let mackerelPrice = Number(input[0]);
    let tsatsaPrice = Number(input[1]);
    let bonitoQty = Number(input[2]);
    let safridQty = Number(input[3]);
    let musselsQty = Number(input[4]);

    let bonitoPrice = mackerelPrice * 1.6;
    let safridPrice = tsatsaPrice * 1.8;
    let musselsPrice = 7.50;

    let totalSum = (bonitoQty * bonitoPrice) + (safridQty * safridPrice) + (musselsQty * musselsPrice);

    console.log(totalSum.toFixed(2));
}

fishland([5.55, 3.57, 4.3, 3.6, 7]);