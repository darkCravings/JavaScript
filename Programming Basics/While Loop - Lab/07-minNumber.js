function minNumber(input) {

    let min = Number(input.shift());
    let index = 0;
    let number = 0;

    while (input[index] !== 'Stop') {
        number = Number(input[index]);
        if (number < min) {
            min = number;
        }
        index++;
    }
    console.log(min);
}

minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);
