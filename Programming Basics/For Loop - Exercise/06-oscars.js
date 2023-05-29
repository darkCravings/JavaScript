function oscars(input) {

    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let judgesCount = Number(input[2]);

    for (let i = 3; i < input.length; i += 2) {
        let judgeName = input[i];
        let judgPoints = input[i + 1];
        let pointsWon = judgeName.length * judgPoints / 2;
        academyPoints += pointsWon;

        if (academyPoints >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }
    if (academyPoints < 1250.5) {
        let neededPoints = 1250.5 - academyPoints;
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "50",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);