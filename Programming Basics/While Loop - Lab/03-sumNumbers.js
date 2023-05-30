function sumNumbers(input) {

    let goalNumber = Number(input[0]);
    let index = 2;
    let numbers = Number(input[1]);
    let sum = 0;

    while (true) {
        sum += numbers;
        numbers = Number(input[index]);
        index++;
        if (sum >= goalNumber) {
            break;
        }
    }
    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);