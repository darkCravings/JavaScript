function fishing(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);

    let rent = 0;

    switch (season) {
        case 'Spring': rent = 3000; break;
        case 'Summer':
        case 'Autumn': rent = 4200; break;
        case 'Winter': rent = 2600; break;
    }

    if (fisherman <= 6) {
        rent *= 0.9;
    } else if (fisherman <= 11) {
        rent *= 0.85;
    } else {
        rent *= 0.75;
    }

    if (fisherman % 2 === 0 && season !== 'Autumn') {
        rent *= 0.95;
    }

    if (budget >= rent) {
        let moneyLeft = budget - rent;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeded = rent - budget;
        console.log(`Not enough money! You need ${moneyNeded.toFixed(2)} leva.`);
    }

}


fishing(["3000", "Summer", "11"]);