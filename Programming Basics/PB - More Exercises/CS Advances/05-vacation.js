function vacation(input) {

    let [budget, season] = [Number(input[0]), input[1]];
    let [location, place, totalSum] = ['', '', 0];


    if (budget <= 1000) {
        place = 'Camp';

        switch (season) {
            case 'Summer':
                location = 'Alaska';
                totalSum = 0.65 * budget;
                break;
            case 'Winter':
                location = 'Morocco';
                totalSum = 0.45 * budget;
                break;
        }

    } else if (budget <= 3000) {
        place = 'Hut';

        switch (season) {
            case 'Summer':
                location = 'Alaska';
                totalSum = 0.80 * budget;
                break;
            case 'Winter':
                location = 'Morocco';
                totalSum = 0.60 * budget;
                break;
        }

    } else {
        place = 'Hotel';
        totalSum = 0.90 * budget;

        switch (season) {
            case 'Summer':
                location = 'Alaska';
                break;
            case 'Winter':
                location = 'Morocco';
                break;
        }
    }

    console.log(`${location} - ${place} - ${totalSum.toFixed(2)}`);
}

vacation(['800', 'Summer']);