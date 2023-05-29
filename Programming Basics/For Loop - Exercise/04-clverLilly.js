function lilly(input) {

    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let savedMoney = 0;
    let moneyGiven = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            savedMoney += toyPrice
        } else {
            savedMoney += (moneyGiven - 1);
            moneyGiven += 10;
        }
    }

    if (savedMoney >= washerPrice) {
        let moneyLeft = savedMoney - washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyneded = washerPrice - savedMoney;
        console.log(`No! ${moneyneded.toFixed(2)}`);
    }
}

lilly(["10", "170.00", "6"]);