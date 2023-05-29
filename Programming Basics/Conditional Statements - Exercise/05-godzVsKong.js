function photos(input) {

    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothing = Number(input[2]);

    if (extras >= 150) {
        clothing = 0.9 * clothing;
    }

    let totalSum = (extras * clothing) + 0.1 * budget;

    if (totalSum > budget) {
        let money = totalSum - budget;
        console.log(`Not enough money!
Wingard needs ${money.toFixed(2)} leva more.`);
    } else {
        let money = budget - totalSum;
        console.log(`Action!
Wingard starts filming with ${money.toFixed(2)} leva left.`);
    }
}

photos(["20000", "120", "55.5"]);