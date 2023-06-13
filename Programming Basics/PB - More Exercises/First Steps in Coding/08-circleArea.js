function cicrleArea(input) {

    let r = Number(input[0]);

    let s = Math.PI * r * r;
    let p = 2 * Math.PI * r;

    console.log(`${s.toFixed(2)}\n${p.toFixed(2)}`);
}

cicrleArea([4.5]);