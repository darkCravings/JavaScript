function forecast(input) {

    let deg = Number(input[0]);

    if (deg >= 26 && deg <= 35) {
        console.log(`Hot`);
    } else if (deg >= 20.1 && deg <= 25.9) {
        console.log(`Warm`);
    } else if (deg >= 15.00 && deg <= 20.00) {
        console.log(`Mild`);
    } else if (deg >= 12.00 && deg <= 14.9) {
        console.log(`Cool`);
    } else if (deg >= 5.00 && deg <= 11.9) {
        console.log(`Cold`);
    } else {
        console.log(`unknown`);
    }
}

forecast(['5']);