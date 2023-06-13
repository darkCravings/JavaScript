function shop(input) {

    let magnolia = Number(input[0]);
    let hyacinth = Number(input[1]);
    let rose = Number(input[2]);
    let cactus = Number(input[3]);
    let giftPrice = Number(input[4]);

    let totalSum = ((3.25 * magnolia) + (4.00 * hyacinth) + (3.50 * rose) + (8.00 * cactus)) * 95 / 100;

    if (totalSum >= giftPrice) {
        console.log(`She is left with ${Math.floor(totalSum - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - totalSum)} leva.`);
    }
}

shop(["2", "3", "5", "1", "50"]);