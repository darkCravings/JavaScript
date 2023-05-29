function mania(input) {

    let musala = 0;
    let monblan = 0;
    let klimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let sum = 0;

    for (let i = 1; i < input.length; i++) {
        let group = Number(input[i]);
        sum += group;

        if (group <= 5) {
            musala += group;
        } else if (group <= 12) {
            monblan += group;
        } else if (group <= 25) {
            klimandjaro += group;
        } else if (group <= 40) {
            k2 += group;
        } else {
            everest += group;
        }
    }

    console.log(`${(musala / sum * 100).toFixed(2)}%`);
    console.log(`${(monblan / sum * 100).toFixed(2)}%`);
    console.log(`${(klimandjaro / sum * 100).toFixed(2)}%`);
    console.log(`${(k2 / sum * 100).toFixed(2)}%`);
    console.log(`${(everest / sum * 100).toFixed(2)}%`);
}

mania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);