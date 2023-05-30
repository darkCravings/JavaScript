function vacation(input) {

    let vacationMoney = Number(input[0]);
    let accountBalance = Number(input[1]);
    let countDays = 0;
    let countSpendDays = 0;
    let index = 2;


    while (accountBalance < vacationMoney) {

        let operation = input[index];
        let transaction = Number(input[index + 1]);
        index += 2;
        countDays++;

        switch (operation) {
            case 'spend':
                accountBalance -= transaction;
                countSpendDays++;
                if (accountBalance < 0) {
                    accountBalance = 0;
                }
                break;
            case 'save':
                accountBalance += transaction;
                countSpendDays = 0;
                break;
        }

        if (countSpendDays === 5) {
            console.log(`You can't save the money.`);
            console.log(`${countDays}`);
            return;
        }
    }
    console.log(`You saved the money for ${countDays} days.`);
}

vacation(['110',
    '60',
    'spend',
    '10',
    'spend',
    '10',
    'spend',
    '10',
    'spend',
    '10',
    'spend',
    '10']);