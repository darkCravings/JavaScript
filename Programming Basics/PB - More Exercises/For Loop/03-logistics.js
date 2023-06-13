function logistics(input) {

    let cargos = Number(input[0]);
    let [minibus, truck, train, weight, totalWeight, totalSum] = [0, 0, 0, 0, 0, 0];


    for (let i = 1; i <= cargos; i++) {

        weight = Number(input[i]);
        totalWeight += weight;

        if (weight <= 3) {
            minibus += weight;

        } else if (weight <= 11) {
            truck += weight;
        } else {
            train += weight;
        }

    }

    totalSum = ((minibus * 200) + (truck * 175) + (train * 120)) / totalWeight;

    console.log(`${totalSum.toFixed(2)}`);
    console.log(`${(minibus / totalWeight * 100).toFixed(2)}%`);
    console.log(`${(truck / totalWeight * 100).toFixed(2)}%`);
    console.log(`${(train / totalWeight * 100).toFixed(2)}%`);
}

logistics([4,
    1,
    5,
    16,
    3]);