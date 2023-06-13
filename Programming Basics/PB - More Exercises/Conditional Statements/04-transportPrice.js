function transport(input) {

    let distance = Number(input[0]);
    let time = input[1];

    if (distance < 20) {
        let taxi = 0.7 + (0.79 * distance);
        if (time === "night") {
            taxi = 0.7 + (0.9 * distance);
        }
        console.log(taxi.toFixed(2));
    } else if (distance < 100) {
        let bus = 0.09 * distance;
        console.log(bus.toFixed(2));
    } else {
        let train = 0.06 * distance;
        console.log(train.toFixed(2));
    }
}

transport(["5", "day"]);