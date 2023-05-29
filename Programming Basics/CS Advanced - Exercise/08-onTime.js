function exam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrHour = Number(input[2]);
    let arrMin = Number(input[3]);

    let totalExamMins = (examHour * 60) + examMin;
    let totalArrMins = (arrHour * 60) + arrMin;


    if (totalArrMins > totalExamMins) {
        console.log(`Late`);
        if ((totalArrMins - totalExamMins) < 60) {
            console.log(`${totalArrMins - totalExamMins} minutes after the start`);
        } else {
            if ((totalArrMins - totalExamMins) % 60 < 10) {
                console.log(`${Math.trunc((totalArrMins - totalExamMins) / 60)}:0${(totalArrMins - totalExamMins) % 60} hours after the start`);
            } else {
                console.log(`${Math.trunc((totalArrMins - totalExamMins) / 60)}:${(totalArrMins - totalExamMins) % 60} hours after the start`);
            }
        }

    } else if ((totalExamMins - totalArrMins) <= 30) {
        console.log(`On time`);
        console.log(`${(totalExamMins - totalArrMins) % 60} minutes before the start`);

    } else {
        console.log(`Early`);
        if ((totalExamMins - totalArrMins) < 60) {
            console.log(`${totalExamMins - totalArrMins} minutes before the start`);
        } else {
            if ((totalExamMins - totalArrMins) % 60 < 10) {
                console.log(`${Math.trunc((totalExamMins - totalArrMins) / 60)}:0${(totalExamMins - totalArrMins) % 60} hours before the start`);
            } else {
                console.log(`${Math.trunc((totalExamMins - totalArrMins) / 60)}:${(totalExamMins - totalArrMins) % 60} hours before the start`);
            }
        }
    }
}

exam(["9", "00", "10", "30"]);