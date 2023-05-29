function vowels(input) {

    let word = input[0];
    let length = word.length;
    let sum = 0;

    for (let index = 0; index < length; index++) {      // Проверява докато индекс < от броя на символите на даден стринг като всеки път добавя +1 на индекс;
        let currentSymbol = word[index];                // Взима определен символ от стринга според индекс и проверява дали съвпада с кейсовете;
        switch (currentSymbol) {
            case 'a': sum += 1; break;
            case 'e': sum += 2; break;                  // Когато определен символ съвпадне със символа от кейса се изпълнява кодът в кейса;
            case 'i': sum += 3; break;
            case 'o': sum += 4; break;
            case 'u': sum += 5; break;
        }
    }
    console.log(sum);
}

vowels(["hello"]);