function sumOfNums(number) {

    let asString = number.toString();                           // Преобразуваме число към стринг;
    let sum = 0;

    for (let index = 0; index < asString.length; index++) {     // Повтаря се операцията, докато индекс е < от символите на стринга, добавяйки се +1;
        let currentSymbol = Number(asString[index]);            // Взима се символ от стринга според номера на индекс и се преобразува в цифра;
        sum += currentSymbol;                                   // Цифрата се добавя към сумата;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNums(["9999"]);