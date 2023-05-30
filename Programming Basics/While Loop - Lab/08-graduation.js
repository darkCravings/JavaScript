function graduation(input) {

    let name = input[0];
    let i = 1;
    let rating = 0;
    let total = 0;

    while (i < input.length) {
        rating = Number(input[i]);

        if (rating < 4) {
            break;
        }

        total += rating;
        i++;
    }

    if (rating < 4) {
        console.log(`${name} has been excluded at ${i} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(total / (input.length - 1)).toFixed(2)}`);
    }
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);