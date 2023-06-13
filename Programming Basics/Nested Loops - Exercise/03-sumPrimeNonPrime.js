function primeNonPrime(input) {

    let index = 0;
    let number = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;
    let isPrime = '';


    while (input[index] !== 'stop') {
        number = Number(input[index]);
        index++

        if (number < 0) {
            console.log(`Number is negative.`);
            continue;
        }

        isPrime = true;

        for (let devider = 2; devider < number; devider++) {

            if (number % devider === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime === true) {
            sumPrime += number;
        } else {
            sumNonPrime += number;
        }

    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}


primeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);