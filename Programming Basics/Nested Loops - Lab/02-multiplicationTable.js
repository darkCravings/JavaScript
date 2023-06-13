function multiplicationTable() {

    let result = 0;

    for (let x = 1; x <= 10; x++) {

        for (let y = 1; y <= 10; y++) {
            result = x * y;
            console.log(`${x} * ${y} = ${result}`);
        }

    }

}

multiplicationTable();