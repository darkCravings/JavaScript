function harvest(input) {

    let area = Number(input[0]);
    let grapes = Number(input[1]);
    let neededWine = Number(input[2]);
    let staff = Number(input[3]);

    let totalGrapes = area * grapes;
    let wine = 0.4 * totalGrapes / 2.5;

    if (wine < neededWine) {
        console.log(`It will be a tough winter! More ${Math.trunc(neededWine - wine)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.trunc(wine)} liters.`);
        console.log(`${Math.ceil(wine - neededWine)} liters left -> ${Math.ceil((wine - neededWine) / staff)} liters per person.`);
    }
}

harvest([650, 2, 175, 3]);