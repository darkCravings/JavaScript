function readText(input) {

    let index = 0;
    let word = '';

    while (input[index] !== 'Stop') {
        word = input[index];
        console.log(word);
        index++;
    }
}

readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);
