function game(input) {

    let moves = Number(input[0]);
    let [number, result] = [0, 0];
    let [num1, num2, num3, num4, num5, invalid] = [0, 0, 0, 0, 0, 0];

    for (let i = 1; i <= moves; i++) {

        number = Number(input[i]);

        if (number >= 0 && number < 10) {
            result += (number * 0.2);
            num1++;
        } else if (number >= 10 && number < 20) {
            result += (number * 0.3);
            num2++;
        } else if (number >= 20 && number < 30) {
            result += (number * 0.4);
            num3++;
        } else if (number >= 30 && number < 40) {
            result += 50;
            num4++;
        } else if (number >= 40 && number <= 50) {
            result += 100;
            num5++;
        } else {
            result /= 2;
            invalid++;
        }

    }

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${(num1 / moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(num2 / moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(num3 / moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(num4 / moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(num5 / moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalid / moves * 100).toFixed(2)}%`);
}

game([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20]);