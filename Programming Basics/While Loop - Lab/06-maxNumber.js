function maxNumber(input) {

    let max = Number(input.shift());
    let index = 0;
    let number = 0;

    while (input[index] !== 'Stop') {
        number = Number(input[index]);
        if (number > max) {
            max = number;
        }
        index++;
    }
    console.log(max);
}

maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);
