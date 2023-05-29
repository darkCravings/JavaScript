function time(input) {

    let initialHour = Number(input[0]);
    let initialMins = Number(input[1]);

    let totalMins = (initialHour * 60) + initialMins + 15;
    let hour = Math.trunc(totalMins / 60);
    let mins = totalMins % 60;

    if (hour === 24) {
        hour = 0;
    }
    if (mins < 10) {
        console.log(`${hour}:0${mins}`);
    } else {
        console.log(`${hour}:${mins}`);
    }
}

time(["0", "01"]);