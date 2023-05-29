function toyShop(input) {

    let holiday = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalPrice = (puzzles * 2.6) + (dolls * 3.00) + (bears * 4.10) + (minions * 8.20) + (trucks * 2.00);
    let totalCount = puzzles + dolls + bears + minions + trucks;

    if (totalCount >= 50) {
        totalPrice = totalPrice * 0.75;
    }

    let finalPirce = 0.9 * totalPrice;

    if (finalPirce >= holiday) {
        let money = finalPirce - holiday;
        console.log(`Yes! ${money.toFixed(2)} lv left.`);
    } else {
        let money = holiday - finalPirce;
        console.log(`Not enough money! ${money.toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);