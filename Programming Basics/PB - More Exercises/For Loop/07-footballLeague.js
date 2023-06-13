function football(input) {

    let capacity = Number(input[0]);
    let totalFans = Number(input[1]);
    let [sectorA, sectorB, sectorV, sectorG, fan] = [0, 0, 0, 0, ''];

    for (let i = 2; i <= (totalFans + 1); i++) {

        fan = input[i];

        switch (fan) {
            case 'A': sectorA++; break;
            case 'B': sectorB++; break;
            case 'V': sectorV++; break
            case 'G': sectorG++; break
        }
    }

    console.log(`${(sectorA / totalFans * 100).toFixed(2)}%`);
    console.log(`${(sectorB / totalFans * 100).toFixed(2)}%`);
    console.log(`${(sectorV / totalFans * 100).toFixed(2)}%`);
    console.log(`${(sectorG / totalFans * 100).toFixed(2)}%`);
    console.log(`${(totalFans / capacity * 100).toFixed(2)}%`);
}

football(['76',
    '10',
    'A',
    'V',
    'V',
    'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B']);