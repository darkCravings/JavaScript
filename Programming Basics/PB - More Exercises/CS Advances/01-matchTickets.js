function matchTickets(input) {

    let [budget, category, group] = [Number(input[0]), input[1], Number(input[2])];

    if (group <= 4) {
        budget *= 0.25;
    } else if (group <= 9) {
        budget *= 0.4;
    } else if (group <= 24) {
        budget *= 0.5;
    } else if (group <= 49) {
        budget *= 0.6;
    } else {
        budget *= 0.75;
    }

    switch (category) {
        case 'VIP':
            budget -= (group * 499.99);
            break;
        case 'Normal':
            budget -= (group * 249.99);
            break;
    }

    if (budget >= 0) {
        console.log(`Yes! You have ${budget.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(budget).toFixed(2)} leva.`);
    }

}


matchTickets(['30000', 'VIP', '49']);