function fuel(input) {

    let fuelType = input[0];
    let fuelVolume = Number(input[1]);

    if (fuelType !== "Gas" && fuelType !== "Gasoline" && fuelType !== "Diesel") {
        console.log(`Invalid fuel!`);
    } else if (fuelVolume >= 25) {
        console.log(`You have enough ${fuelType.toLowerCase()}.`);
    } else {
        console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
    }
}

fuel(["Gas", "200"]);