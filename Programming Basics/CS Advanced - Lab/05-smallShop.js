function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let qty = Number(input[2]);
    let finalSum = 0;

    if (city === 'Sofia') {

        switch (product) {
            case 'coffee': finalSum = qty * 0.50; break;
            case 'water': finalSum = qty * 0.80; break;
            case 'beer': finalSum = qty * 1.20; break;
            case 'sweets': finalSum = qty * 1.45; break;
            case 'peanuts': finalSum = qty * 1.60; break;
        }

    } else if (city === 'Plovdiv') {

        switch (product) {
            case 'coffee': finalSum = qty * 0.40; break;
            case 'water': finalSum = qty * 0.70; break;
            case 'beer': finalSum = qty * 1.15; break;
            case 'sweets': finalSum = qty * 1.30; break;
            case 'peanuts': finalSum = qty * 1.50; break;
        }

    } else if (city === 'Varna') {

        switch (product) {
            case 'coffee': finalSum = qty * 0.45; break;
            case 'water': finalSum = qty * 0.70; break;
            case 'beer': finalSum = qty * 1.10; break;
            case 'sweets': finalSum = qty * 1.35; break;
            case 'peanuts': finalSum = qty * 1.55; break;
        }

    }

    console.log(finalSum);
}

smallShop(["coffee", "Varna", "2"]);