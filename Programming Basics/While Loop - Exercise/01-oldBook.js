function oldBook(input) {

    let [searchedBook, isFound, index, counter] = [input[0], false, 1, 0];

    while (input[index] !== 'No More Books') {
        if (input[index] === searchedBook) {
            isFound = true;
            break;
        }
        counter++;
        index++;
    }

    if (isFound) {
        console.log(`You checked ${counter} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }
}

oldBook(["Troy",
    "Stronger",
    "Life Style",
    "Troy"]);