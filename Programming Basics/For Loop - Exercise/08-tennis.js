function tennis(input) {

    let turnirs = Number(input[0]);
    let startPoints = Number(input[1]);
    let winner = 0;
    let turnirPoints = 0;

    for (let i = 2; i < input.length; i++) {
        let place = input[i];

        switch (place) {
            case 'W': turnirPoints += 2000; winner++; break;
            case 'F': turnirPoints += 1200; break;
            case 'SF': turnirPoints += 720; break;
        }

    }

    console.log(`Final points: ${startPoints + turnirPoints}`);
    console.log(`Average points: ${Math.trunc(turnirPoints / turnirs)}`);
    console.log(`${(winner / turnirs * 100).toFixed(2)}%`);
}

tennis(['7',
    '1200',
    'SF',
    'F',
    'W',
    'F',
    'W',
    'SF',
    'W']);