function evenPowers(number) {

    for (let index = 0; index <= number; index += 2) {      // Повтаря цикъла докато индекс е <= от дадено число и всеки път добавя +2 за да е четна степен;
        console.log(Math.pow(2, index));                    // Отпечатва 2 на степен индекс;
    }
}

evenPowers('10');