function traveling(input) {

    let [index, transaction, savedMoney, travelPrice, destination] = [0, 0, 0, 0, ''];

    while (input[index] !== 'End') {
        destination = input.shift();
        travelPrice = Number(input.shift());
        savedMoney = 0;

        while (savedMoney < travelPrice) {
            transaction = Number(input.shift());
            savedMoney += transaction;
        }
        console.log(`Going to ${destination}!`);
    }
}

traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);