function pipes(input) {

    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let volume = (p1 + p2) * h;

    if (volume <= v) {
        let volumePercent = (volume / v) * 100;
        let p1Percent = (p1 * h) / volume * 100;
        let p2Percent = (p2 * h) / volume * 100;

        console.log(`The pool is ${volumePercent.toFixed(2)}% full. Pipe 1: ${p1Percent.toFixed(2)}%. Pipe 2: ${p2Percent.toFixed(2)}%.`);
    } else {
        console.log(`For ${h} hours the pool overflows with ${(volume - v).toFixed(2)} liters.`);
    }
}

pipes([100, 100, 100, 2.5]);