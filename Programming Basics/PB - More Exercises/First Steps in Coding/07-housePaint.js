function housePaint(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let walls = ((2 * x * x) - (1.2 * 2)) + (2 * x * y) - (2 * 1.5 * 1.5);
    let greenPaint = walls / 3.4;

    let roof = 2 * (x * y) + 2 * (x * h / 2);
    let redPaint = roof / 4.3;

    console.log(`${greenPaint.toFixed(2)}\n${redPaint.toFixed(2)}`);
}

housePaint([10.25, 15.45, 8.88]);