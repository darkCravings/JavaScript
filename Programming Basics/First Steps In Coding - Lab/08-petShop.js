function petShop(input) {

    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let totalSum = (dogFood * 2.50) + (catFood * 4.00);

    console.log(totalSum);
}

petShop(["13", "9"]);