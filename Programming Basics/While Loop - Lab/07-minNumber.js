function minNumber(input) {

    let i = 0;
    let min = Number(input.shift());

    while (input[i] !== 'Stop') {
        let number = Number(input[i]);
        if (number < min) {
            min = number;
        }
        i++;
    }
    console.log(min);
}

minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])