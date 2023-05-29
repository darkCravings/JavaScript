function lunchBreak(input) {

    let episodeName = input[0];
    let episodeTime = Number(input[1]);
    let relaxTime = Number(input[2]);

    let freeTime = relaxTime - (relaxTime * 0.125) - (relaxTime * 0.25);

    if (freeTime >= episodeTime) {
        console.log(`You have enough time to watch ${episodeName} and left with ${Math.ceil(freeTime - episodeTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${episodeName}, you need ${Math.ceil(episodeTime - freeTime)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);