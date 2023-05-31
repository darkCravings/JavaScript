function examPreparation(input) {

    let [maxPoorGrades, lastExam, gradesReached, sum, porGrades, totalProblems, index] = [Number(input[0]), '', false, 0, 0, 0, 1];

    while (input[index] !== 'Enough') {

        lastExam = input[index];
        sum += Number(input[index + 1]);

        if (Number(input[index + 1]) <= 4) {
            porGrades++;
        }
        if (porGrades === maxPoorGrades) {
            gradesReached = true;
            break;
        }

        index += 2;
        totalProblems++;
    }

    if (gradesReached) {
        console.log(`You need a break, ${maxPoorGrades} poor grades.`);
    } else {
        console.log(`Average score: ${(sum / totalProblems).toFixed(2)}`);
        console.log(`Number of problems: ${totalProblems}`);
        console.log(`Last problem: ${lastExam}`);
    }
}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);
