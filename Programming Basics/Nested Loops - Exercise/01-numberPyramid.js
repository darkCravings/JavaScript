function pyramid(input) {

    let number = Number(input[0]);

    let current = 1;
    let isBigger = false;

    for (let rows = 1; rows <= number; rows++) {

        let output = '';

        for (let cols = 1; cols <= rows; cols++) {

            if (current > number) {
                isBigger = true;
                break;
            }

            output += current + ' ';
            current++;
        }

        console.log(output);
        if (isBigger) {
            break;
        }

    }

}

pyramid(['20']);