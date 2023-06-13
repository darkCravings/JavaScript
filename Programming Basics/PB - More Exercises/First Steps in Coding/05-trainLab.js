function trainLab(input) {

    let length = Number(input[0]) * 100;
    let width = Number(input[1]) * 100;

    let deskLength = 120;
    let deskWidth = 70;

    let columns = Math.floor((width - 100) / deskWidth);
    let rows = Math.floor(length / deskLength);

    let totalDesks = columns * rows - 3;

    console.log(totalDesks);
}

trainLab([8.4, 5.2]);