function shop(input) {

    let fruit = input[0];
    let day = input[1];
    let qty = Number(input[2]);
    let sum = 0;

    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {

        switch (fruit) {
            case 'banana': sum = qty * 2.50; break;
            case 'apple': sum = qty * 1.20; break;
            case 'orange': sum = qty * 0.85; break;
            case 'grapefruit': sum = qty * 1.45; break;
            case 'kiwi': sum = qty * 2.70; break;
            case 'pineapple': sum = qty * 5.50; break;
            case 'grapes': sum = qty * 3.85; break;
            default: console.log(`error`); return;
        }
        console.log(sum.toFixed(2));

    } else if (day === 'Saturday' || day === 'Sunday') {
        switch (fruit) {
            case 'banana': sum = qty * 2.70; break;
            case 'apple': sum = qty * 1.25; break;
            case 'orange': sum = qty * 0.90; break;
            case 'grapefruit': sum = qty * 1.60; break;
            case 'kiwi': sum = qty * 3.00; break;
            case 'pineapple': sum = qty * 5.60; break;
            case 'grapes': sum = qty * 4.20; break;
            default: console.log(`error`); return;
        }
        console.log(sum.toFixed(2));

    } else {
        console.log(`error`);
    }
}

shop(["banana", "Monday", "0.5"]);
