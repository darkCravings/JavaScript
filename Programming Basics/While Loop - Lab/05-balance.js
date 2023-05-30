function balance(input) {

    let i = 0;
    let totalSum = 0;

    while (input[i] !== 'NoMoreMoney') {
        let increase = Number(input[i]);

        if (increase < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        console.log(`Increase: ${increase.toFixed(2)}`);
        totalSum += increase;
        i++;
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}

balance(["120",
    "45.55",
    "-150"]);