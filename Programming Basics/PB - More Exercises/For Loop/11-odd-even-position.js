function positions(input) {

    let totalNumbers = Number(input[0]);
    let [number, index] = [0, 1];
    let [oddSum, oddMin, oddMax, evenSum, evenMin, evenMax] = [0, 1000000000, -1000000000, 0, 1000000000, -1000000000];

    while (index <= totalNumbers) {

        number = Number(input[index]);

        if (index % 2 === 0) {

            evenSum += number;

            if (number > evenMax) {
                evenMax = number;
            }

            if (number < evenMin) {
                evenMin = number;
            }

        } else {

            oddSum += number;

            if (number > oddMax) {
                oddMax = number;
            }

            if (number < oddMin) {
                oddMin = number;
            }

        }

        index++;
    }

    if (totalNumbers > 1) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    } else if (totalNumbers === 1) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    } else {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }

}

positions([0]);