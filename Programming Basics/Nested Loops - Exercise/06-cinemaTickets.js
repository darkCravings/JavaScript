function cinemaTickets(input) {

    let totalTickets = 0;
    let standard = 0;
    let student = 0;
    let kid = 0;
    let index = 0;


    while (input[index] !== 'Finish') {

        let movieName = input[index];
        index++;
        let freeSpaces = Number(input[index]);
        index++

        let takenSpaces = 0;

        while (input[index] !== 'End') {
            let ticket = input[index];
            totalTickets++;
            takenSpaces++;

            switch (ticket) {
                case 'student': student++; break;
                case 'standard': standard++; break;
                case 'kid': kid++; break;
            }

            if (takenSpaces === freeSpaces) {
                break;
            }

            index++;
        }
        console.log(`${movieName} - ${(takenSpaces / freeSpaces * 100).toFixed(2)}% full.`);

        index++;
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(['Shutter Island',
    '9',
    'standard',
    'standard',
    'standard',
    'student',
    'student',
    'student',
    'kid',
    'kid',
    'kid',
    'Rush',
    '9',
    'standard',
    'standard',
    'standard',
    'student',
    'student',
    'student',
    'kid',
    'kid',
    'kid',
    'Deadpool',
    '9',
    'standard',
    'standard',
    'standard',
    'student',
    'student',
    'student',
    'kid',
    'kid',
    'kid',
    'Finish']);