function equalSums(input) {

    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let output = '';

    for (let currentNum = firstNum; currentNum <= lastNum; currentNum++) {

        let evenPossitionSum = 0;
        let oddPossitionSum = 0;

        let currentNumAsStr = currentNum.toString();

        for (let i = 0; i < currentNumAsStr.length; i++) {

            let currentDigit = Number(currentNumAsStr[i]);

            if ((i + 1) % 2 === 0) {
                evenPossitionSum += currentDigit;
            } else {
                oddPossitionSum += currentDigit;
            }
        }

        if (evenPossitionSum === oddPossitionSum) {
            output += currentNumAsStr + ' ';
        }
    }

    console.log(output);
}

equalSums(["100000",
    "100050"]);