function truckDriver(input) {

    let [season, distance, totalSum] = [input[0], Number(input[1]), 0];

    if (distance <= 5000) {

        switch (season) {
            case 'Spring':
            case 'Autumn': totalSum = (distance * 0.75) * 4; break;
            case 'Summer': totalSum = (distance * 0.90) * 4; break;
            case 'Winter': totalSum = (distance * 1.05) * 4; break;
        }

    } else if (distance <= 10000) {

        switch (season) {
            case 'Spring':
            case 'Autumn': totalSum = (distance * 0.95) * 4; break;
            case 'Summer': totalSum = (distance * 1.10) * 4; break;
            case 'Winter': totalSum = (distance * 1.25) * 4; break;
        }

    } else if (distance <= 20000) {

        totalSum = (distance * 1.45) * 4;

    }

    console.log((totalSum * 0.9).toFixed(2));
}

truckDriver(['Summer', '3455']);