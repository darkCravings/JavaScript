function flowers(input) {

    let [chrysantems, roses, tulips, season, day] = [Number(input[0]), Number(input[1]), Number(input[2]), input[3], input[4]];
    let totalSum = 0;

    switch (season) {
        case 'Spring':
            totalSum = (chrysantems * 2) + (roses * 4.1) + (tulips * 2.5);
            if (day === 'Y') {
                totalSum *= 1.15;
            }
            if (tulips > 7) {
                totalSum *= 0.95;
            }
            break;
        case 'Summer':
            totalSum = (chrysantems * 2) + (roses * 4.1) + (tulips * 2.5);
            if (day === 'Y') {
                totalSum *= 1.15;
            }
            break;
        case 'Autumn':
            totalSum = (chrysantems * 3.75) + (roses * 4.5) + (tulips * 4.15);
            if (day === 'Y') {
                totalSum *= 1.15;
            }
            break;
        case 'Winter':
            totalSum = (chrysantems * 3.75) + (roses * 4.5) + (tulips * 4.15);
            if (day === 'Y') {
                totalSum *= 1.15;
            }
            if (roses >= 10) {
                totalSum *= 0.9;
            }
            break;

    }

    if ((chrysantems + roses + tulips) > 20) {
        totalSum *= 0.8;
    }

    console.log((totalSum + 2).toFixed(2));
}

flowers(['2',
    '4',
    '8',
    'Spring',
    'Y']);