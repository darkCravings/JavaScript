function sumSeconds(input) {

    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let totalSeconds = first + second + third;
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;

    if (secs < 10) {
        console.log(`${mins}:0${secs}`);
    } else {
        console.log(`${mins}:${secs}`);
    }

}

sumSeconds(["22", "7", "34"]);