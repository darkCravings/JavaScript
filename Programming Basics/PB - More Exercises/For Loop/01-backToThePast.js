function backToThePast(input) {

    let accountBalance = Number(input[0]);
    let year = Number(input[1]);
    let age = 17;

    for (let i = 1800; i <= year; i++) {

        age++;

        if (i % 2 === 0) {
            accountBalance -= 12000;
        } else {
            accountBalance -= (12000 + (50 * age));
        }

    }

    if (accountBalance >= 0) {

        console.log(`Yes! He will live a carefree life and will have ${accountBalance.toFixed(2)} dollars left.`);

    } else {

        console.log(`He will need ${Math.abs(accountBalance).toFixed(2)} dollars to survive.`);

    }

}

backToThePast([50000, 1802]);