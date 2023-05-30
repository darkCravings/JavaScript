function maxNumber(input) {

    let i = 0;
    let max = Number(input.shift());

    while (input[i] !== 'Stop') {
        let number = Number(input[i]);
        if (number > max) {
            max = number;
        }
        i++;
    }
    console.log(max);
}

maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);