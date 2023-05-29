function strong(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;

    for (let index = num1; index <= num2; index++) {
        if (index % 9 === 0) {
            sum += index;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let index = num1; index <= num2; index++) {
        if (index % 9 === 0) {
            console.log(index);
        }
    }
}

strong(["100", "200"]);