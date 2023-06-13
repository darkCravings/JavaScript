function multiply(input) {

    let index = 0;

    while (input[index] >= 0) {
        console.log(`Result: ${(input[index] * 2).toFixed(2)}`);
        index++;
    }

    console.log(`Negative number!`);
}

multiply([12,
    43.2144,
    12.3,
    543.23,
    -20]);