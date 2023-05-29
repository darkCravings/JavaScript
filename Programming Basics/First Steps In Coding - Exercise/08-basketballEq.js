function basketball(input) {

    let annualCharge = Number(input[0]);

    let shoes = annualCharge - (annualCharge * 0.40);
    let equip = shoes - (shoes * 0.20);
    let ball = equip * 0.25;
    let accs = ball * 0.20;
    let totalSum = annualCharge + shoes + equip + ball + accs;

    console.log(totalSum);
}

basketball(["550"]);