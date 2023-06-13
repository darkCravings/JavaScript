function trainTheTrainers(input) {

    let index = 0;
    let counter = 0;
    let currGrade = 0;
    let totalAvgGrade = 0;

    let judges = Number(input[index]);
    index++;

    while (input[index] !== 'Finish') {

        let presentation = input[index];
        index++;

        let avgGrade = 0;

        for (let i = 1; i <= judges; i++) {
            currGrade = Number(input[index]);
            totalAvgGrade += currGrade;
            avgGrade += currGrade;
            counter++;
            index++;
        }

        console.log(`${presentation} - ${(avgGrade / judges).toFixed(2)}.`);
    }

    console.log(`Student's final assessment is ${(totalAvgGrade / counter).toFixed(2)}.`);
}

trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"]);