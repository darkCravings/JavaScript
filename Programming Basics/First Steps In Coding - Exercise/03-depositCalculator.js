function depositCalculator(input) {

    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterest = Number(input[2]);
    let totalSum = depositSum + depositPeriod * (depositSum * annualInterest / 100) / 12;

    console.log(totalSum);
}

depositCalculator(["2350", "6", "7"]);