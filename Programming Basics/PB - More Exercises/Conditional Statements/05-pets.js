function pets(input) {

    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]);

    let neededFood = (days * dogFood) + (days * catFood) + (days * turtleFood / 1000);

    if (totalFood >= neededFood) {
        console.log(`${Math.floor(totalFood - neededFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(neededFood - totalFood)} more kilos of food are needed.`);
    }
}

pets([2, 10, 1, 1, 1200]);