function shopping(input) {

    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let totalSum = (gpu * 250) + (cpu * (gpu * 250) * 0.35) + (ram * (gpu * 250) * 0.1);

    if (gpu > cpu) {
        totalSum = 0.85 * totalSum
    }

    if (budget >= totalSum) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"]);