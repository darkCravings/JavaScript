function step(number) {

    for (let index = 1; index <= Number(number); index += 3) {       // Повтаря цикъла, докато индекс е < от дадено число и всеки път добавя +3;
        console.log(index);
    }
}

step('1');