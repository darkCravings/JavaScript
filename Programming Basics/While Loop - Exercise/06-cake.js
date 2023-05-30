function cake(input) {

    let index = 2;
    let width = Number(input[0]);
    let length = Number(input[1]);
    let totalPieces = width * length;

    while (input[index] !== 'STOP') {
        let takenPieces = Number(input[index]);
        totalPieces -= takenPieces;

        if (totalPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            return;
        }
        index++;
    }

    console.log(`${totalPieces} pieces are left.`);
}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);