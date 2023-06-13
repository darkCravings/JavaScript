function fuelTank(input) {

    let fuelType = input[0];
    let fuelVolume = Number(input[1]);
    let clubCard = input[2];

    let sum = 0;

    if (fuelType === "Gasoline") {
        sum = 2.22 * fuelVolume;
        if (clubCard === "Yes") {
            sum = sum - (0.18 * fuelVolume);
        }
    } else if (fuelType === "Diesel") {
        sum = 2.33 * fuelVolume;
        if (clubCard === "Yes") {
            sum = sum - (0.12 * fuelVolume);
        }
    } else if (fuelType === "Gas") {
        sum = 0.93 * fuelVolume;
        if (clubCard === "Yes") {
            sum = sum - (0.08 * fuelVolume);
        }
    }

    if (fuelVolume >= 20 && fuelVolume <= 25) {
        sum = 0.92 * sum;
    } else if (fuelVolume > 25) {
        sum = 0.9 * sum;
    }

    console.log(`${sum.toFixed(2)} lv.`);
}

fuelTank(["Gas", "30", "Yes"]);