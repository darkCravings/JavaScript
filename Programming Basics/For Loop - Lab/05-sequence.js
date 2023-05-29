function sequence(input) {

    let word = input[0];
    let length = word.length;

    for (let index = 0; index < length; index++) {      // След всяко повторение към индекс се +1 за да отпечата символите от текста, докато индекс е < от броя символи;
        console.log(word[index]);
    }
}

sequence(["softuni"]);