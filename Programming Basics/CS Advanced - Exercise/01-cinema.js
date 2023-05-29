
function cinema(input) {

    let project = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let places = rows * cols;
    let sum = 0;

    switch (project) {
        case 'Premiere':
            sum = places * 12;
            break;

        case 'Normal':
            sum = places * 7.5;
            break;

        case 'Discount':
            sum = places * 5;
            break;
    }

    console.log(`${sum.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);