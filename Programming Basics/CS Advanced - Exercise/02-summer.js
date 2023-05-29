function summer(input) {

    let deg = Number(input[0]);
    let period = input[1];
    let outfit = '';
    let shoes = '';

    switch (period) {
        case 'Morning':
            if (deg <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if (deg <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            break;

        case 'Afternoon':
            if (deg <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (deg <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            }
            break;

        case 'Evening':
            outfit = 'Shirt';
            shoes = 'Moccasins';
            break;
    }

    console.log(`It's ${deg} degrees, get your ${outfit} and ${shoes}.`);
}


summer(["9", "Afternoon"]);