function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let spent = 0;


    if (budget <= 100) {

        switch (season) {
            case 'summer':
                spent = budget * 0.3;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Camp - ${spent.toFixed(2)}`);
                break;
            case 'winter':
                spent = budget * 0.7;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Hotel - ${spent.toFixed(2)}`);
                break;
        }

    } else if (budget <= 1000) {

        switch (season) {
            case 'summer':
                spent = budget * 0.4;
                console.log(`Somewhere in Balkans`);
                console.log(`Camp - ${spent.toFixed(2)}`);
                break;
            case 'winter':
                spent = budget * 0.8;
                console.log(`Somewhere in Balkans`);
                console.log(`Hotel - ${spent.toFixed(2)}`);
                break;
        }

    } else {

        spent = budget * 0.9;
        console.log(`Somewhere in Europe`);
        console.log(`Hotel - ${spent.toFixed(2)}`);

    }
}

journey(["50", "summer"]);