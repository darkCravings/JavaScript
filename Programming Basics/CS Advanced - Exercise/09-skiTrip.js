function skiTrip(input) {

    let days = Number(input[0]);
    let suite = input[1];
    let feedback = input[2];
    let nights = days - 1;
    let price = 0;


    switch (suite) {
        case 'room for one person':
            price = 18 * nights;
            break;
        case 'apartment':
            price = 25 * nights;
            if (days < 10) {
                price *= 0.7;
            } else if (days <= 15) {
                price *= 0.65;
            } else {
                price *= 0.5;
            }
            break;
        case 'president apartment':
            price = 35 * nights;
            if (days < 10) {
                price *= 0.9;
            } else if (days <= 15) {
                price *= 0.85;
            } else {
                price *= 0.8;
            }
            break;
    }

    switch (feedback) {
        case 'positive':
            price *= 1.25;
            break;

        default:
            price *= 0.9;
            break;
    }

    console.log(price.toFixed(2));
}


skiTrip(["14", "apartment", "positive"]);