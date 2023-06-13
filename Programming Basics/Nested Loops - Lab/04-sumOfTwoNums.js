function sumOfNumbers(input) {

    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combination = 0;

    for (let x = firstNum; x <= lastNum; x++) {

        for (let y = firstNum; y <= lastNum; y++) {
            combination++;
            if ((x + y) === magicNum) {
                console.log(`Combination N:${combination} (${x} + ${y} = ${magicNum})`);
                return;
            }

        }

    }
    console.log(`${combination} combinations - neither equals ${magicNum}`);
}

sumOfNumbers(["1",
    "10",
    "5"]);