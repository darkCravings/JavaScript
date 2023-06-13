function building(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    let currentFloor = '';

    for (let f = floors; f >= 1; f--) {

        for (let r = 0; r < rooms; r++) {

            if (f === floors) {
                currentFloor += `L${f}${r}` + ' ';
            } else if (f % 2 === 0) {
                currentFloor += `O${f}${r}` + ' ';
            } else {
                currentFloor += `A${f}${r}` + ' ';
            }

        }

        console.log(currentFloor);
        currentFloor = '';
    }

}

building(['6', '4']);