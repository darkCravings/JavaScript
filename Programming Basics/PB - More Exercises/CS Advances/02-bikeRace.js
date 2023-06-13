function bikeRace(input) {

    let [juniors, seniors, route, donatedSum] = [Number(input[0]), Number(input[1]), input[2], 0];

    switch (route) {
        case 'trail':
            donatedSum = (juniors * 5.5) + (seniors * 7);
            break;

        case 'cross-country':
            donatedSum = (juniors * 8) + (seniors * 9.5);
            if ((juniors + seniors) >= 50) {
                donatedSum *= 0.75;
            }
            break;

        case 'downhill':
            donatedSum = (juniors * 12.25) + (seniors * 13.75);
            break;

        case 'road':
            donatedSum = (juniors * 20) + (seniors * 21.50);
            break;
    }

    console.log((donatedSum * 0.95).toFixed(2));
}

bikeRace(['10', '20', 'trail']);