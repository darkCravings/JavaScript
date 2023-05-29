function comissions(input) {

    let city = input[0];
    let sales = Number(input[1]);
    let comission = 0;
    let result = 0;


    if (city === 'Sofia') {
        if (sales >= 0 && sales <= 500) {
            comission = 0.05;
        } else if (sales > 500 && sales <= 1000) {
            comission = 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            comission = 0.08;
        } else if (sales > 10000) {
            comission = 0.12;
        }
    } else if (city === 'Varna') {
        if (sales >= 0 && sales <= 500) {
            comission = 0.045;
        } else if (sales > 500 && sales <= 1000) {
            comission = 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            comission = 0.10;
        } else if (sales > 10000) {
            comission = 0.13;
        }
    } else if (city === 'Plovdiv') {
        if (sales >= 0 && sales <= 500) {
            comission = 0.055;
        } else if (sales > 500 && sales <= 1000) {
            comission = 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            comission = 0.12;
        } else if (sales > 10000) {
            comission = 0.145;
        }
    }

    if (sales >= 0 && (city === 'Sofia' || city === 'Varna' || city === 'Plovdiv')) {
        console.log((sales * comission).toFixed(2));
    } else {
        console.log(`error`);
    }

}

comissions(["Plovdiv", "-20"]);