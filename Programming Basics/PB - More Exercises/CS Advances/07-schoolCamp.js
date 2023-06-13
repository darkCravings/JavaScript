function schoolCamp(input) {

    let [season, groupType, students, nights] = [input[0], input[1], Number(input[2]), Number(input[3])];

    let [totalSum, sport] = [0, ''];

    switch (season) {

        case 'Winter':
            switch (groupType) {
                case 'mixed': totalSum = (students * nights * 10); sport ='Ski'; break;
                case 'girls': totalSum = (students * nights * 9.60); sport = 'Gymnastics'; break;
                case 'boys': totalSum = (students * nights * 9.60); sport = 'Judo'; break;
            }
            break;


        case 'Spring':
            switch (groupType) {
                case 'mixed': totalSum = (students * nights * 9.50); sport ='Cycling'; break;
                case 'girls': totalSum = (students * nights * 7.20); sport = 'Athletics'; break;
                case 'boys': totalSum = (students * nights * 7.20); sport = 'Tennis'; break;
            }
            break;


        case 'Summer':
            switch (groupType) {
                case 'mixed': totalSum = (students * nights * 20); sport ='Swimming'; break;
                case 'girls': totalSum = (students * nights * 15); sport = 'Volleyball'; break;
                case 'boys': totalSum = (students * nights * 15); sport = 'Football'; break;
            }
            break;
    }

    if (students >= 50) {
        totalSum *= 0.50;
    } else if (students >= 20) {
        totalSum *= 0.85;
    } else if (students >= 10) {
        totalSum *= 0.95;
    }

    console.log(`${sport} ${totalSum.toFixed(2)} lv.`);
}

schoolCamp(['Spring',
    'girls',
    '20',
    '7']);