function hospital(input) {

    let period = Number(input[0]);
    let patients = 0;
    let treated = 0;
    let untreated = 0;
    let doctors = 7;


    for (let index = 1; index <= period; index++) {

        patients = Number(input[index]);

        if ((index % 3 === 0) && (untreated > treated)) {
            doctors += 1;
        }

        if (patients >= doctors) {
            treated += doctors;
            untreated += (patients - doctors);
        } else {
            treated += patients;
        }

    }

    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}

hospital([6,
    25,
    25,
    25,
    25,
    25,
    2]);