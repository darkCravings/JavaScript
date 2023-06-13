function specialNumbers(input) {

    let randomNumber = Number(input[0]);
    let output = '';

    for (let specialNumber = 1111; specialNumber <= 9999; specialNumber++) {

        let special = true;

        let numAsString = specialNumber.toString();

        for (let i = 0; i < numAsString.length; i++) {

           let digit = Number(numAsString[i]);

            if (randomNumber % digit !== 0) {
                special = false;
                break;
            }

        }

        if (special) {
            output += specialNumber + ' ';
        }

    }

    console.log(output);
}

specialNumbers(["3"]);