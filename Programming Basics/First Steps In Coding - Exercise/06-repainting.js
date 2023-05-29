function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursWork = Number(input[3]);

    let Sum = ((nylon + 2) * 1.50) + ((paint + paint * 0.10) * 14.50) + (thinner * 5.00) + 0.40;
    let staffPayment = Sum * 0.30;
    let totalSum = Sum + hoursWork * staffPayment;

    console.log(totalSum);
}

repainting(["5", "10", "10", "1"]);