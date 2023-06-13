function tomCat(input) {

    let offDays = Number(input[0]);
    let workDays = 365 - offDays;

    let playTime = (workDays * 63) + (offDays * 127);

    if (playTime > 30000) {
        let overPlay = playTime - 30000;
        let hours = overPlay / 60;
        let mins = overPlay % 60;

        console.log(`Tom will run away`);
        console.log(`${Math.trunc(hours)} hours and ${mins} minutes more for play`);
    } else {
        let lessPlay = 30000 - playTime;
        let hours = lessPlay / 60;
        let mins = lessPlay % 60;

        console.log(`Tom sleeps well`);
        console.log(`${Math.trunc(hours)} hours and ${mins} minutes less for play`);
    }
}

tomCat([113]);