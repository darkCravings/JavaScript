function equalPairs(input) {

    let totalPairs = Number(input.shift());

    let sum1 = Number(input.shift()) + Number(input.shift());
    let [sum2, difference, maxDiff, equals] = [0, 0, 0, true];

    for (let i = 1; i < totalPairs; i++) {

        sum2 = Number(input.shift()) + Number(input.shift());

        if (sum1 !== sum2) {
            difference = Math.abs(sum1 - sum2);
            sum1 = sum2;
            equals = false;
        }

        if (difference > maxDiff) {
            maxDiff = difference;
        }
    }

    if (equals) {
        console.log(`Yes, value=${sum1}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

equalPairs([4,
    1,
    1,
    3,
    1,
    2,
    2,
    0,
    0]);