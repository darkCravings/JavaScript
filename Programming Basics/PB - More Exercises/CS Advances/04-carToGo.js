function carToGo(input) {

    let [budget, season] = [Number(input[0]), input[1]];
    let [clas, type, price] = ['', '', 0];


    if (budget <= 100) {
        clas = 'Economy class';

        switch (season) {
            case 'Summer':
                type = 'Cabrio';
                price = budget * 0.35;
                break;
            case 'Winter':
                type = 'Jeep';
                price = budget * 0.65;
                break;
        }

    } else if (budget <= 500) {
        clas = 'Compact class';

        switch (season) {
            case 'Summer':
                type = 'Cabrio';
                price = budget * 0.45;
                break;
            case 'Winter':
                type = 'Jeep';
                price = budget * 0.80;
                break;
        }

    } else {
        clas = 'Luxury class';
        type = 'Jeep';
        price = budget * 0.90;
    }

    console.log(clas);
    console.log(`${type} - ${price.toFixed(2)}`);
}

carToGo(['450', 'Summer']);