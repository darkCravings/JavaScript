function bills(input) {

    let months = Number(input[0]);

    let [internet, water] = [15, 20];
    let [electricity, totalElectricity, others, totalSum] = [0, 0, 0, 0];

    for (let i = 1; i <= months; i++) {
        electricity = Number(input[i]);
        totalElectricity += electricity;
        others += (electricity + internet + water) * 1.2;
    }

    totalSum = (totalElectricity + (internet * months) + (water * months) + others);

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${(water * months).toFixed(2)} lv`);
    console.log(`Internet: ${(internet * months).toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${(totalSum / months).toFixed(2)} lv`);
}

bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22]);