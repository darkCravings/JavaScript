function suppliesForSchool(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let discount = Number(input[3]);

    let Sum = (pens * 5.80 + markers * 7.20 + cleaner * 1.20);
    let totalSum = Sum - (Sum * discount / 100);

    console.log(totalSum);
}

suppliesForSchool(["4", "2", "5", "13"]);