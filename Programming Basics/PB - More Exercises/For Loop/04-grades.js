function grades(input) {

    let students = Number(input[0]);
    let [grade, fail, noBad, good, top, total] = [0, 0, 0, 0, 0, 0];

    for (let i = 1; i <= students; i++) {

        grade = Number(input[i]);
        total += grade;

        if (grade < 3) {
            fail++;
        } else if (grade < 4) {
            noBad++;
        } else if (grade < 5) {
            good++;
        } else {
            top++;
        }

    }

    console.log(`Top students: ${(top / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(good / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(noBad / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(fail / students * 100).toFixed(2)}%`);
    console.log(`Average: ${(total / students).toFixed(2)}`);
}


grades([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5]);