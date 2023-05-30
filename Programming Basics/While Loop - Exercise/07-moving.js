function moving(input) {

    let index = 3;
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let volume = width * length * height;

    while (input[index] !== 'Done') {
        let takenSpace = Number(input[index]);
        volume -= takenSpace;

        if (volume <= 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            return;
        }
        index++;
    }
    console.log(`${volume} Cubic meters left.`);
}

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]);