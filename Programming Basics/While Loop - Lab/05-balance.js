function balance(input) {

    let i = 0;
    let totalSum = 0;
    let increase = input[i];

    while (input[i] !== 'NoMoreMoney') {
        increase = Number(input[i]);
        i++;

        if (increase < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        console.log(`Increase: ${increase.toFixed(2)}`);
        totalSum += increase;
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}

balance(["120",
    "45.55",
    "-150"]);
