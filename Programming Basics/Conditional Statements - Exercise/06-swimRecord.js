function swimRecord(input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let speed = Number(input[2]);

    let resistance = Math.trunc(distance / 15) * 12.5;
    let totalTime = (distance * speed) + resistance;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}

swimRecord(["10464", "1500", "20"]);