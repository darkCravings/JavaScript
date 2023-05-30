function walking(input) {

    let index = 0;
    let totalSteps = 0;

    while (input[index] !== 'Going home') {
        let steps = Number(input[index]);
        totalSteps += steps;
        if (totalSteps >= 10000) {
            let stepsOver = totalSteps - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsOver} steps over the goal!`);
            return;
        }
        index++;
    }

    totalSteps += Number(input[index + 1]);

    if (totalSteps >= 10000) {
        let stepsOver = totalSteps - 10000;
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsOver} steps over the goal!`);
    } else {
        let neededSteps = 10000 - totalSteps;
        console.log(`${neededSteps} more steps to reach goal.`);
    }

}


walking(['1000',
    '1500',
    '2000',
    '6500']);