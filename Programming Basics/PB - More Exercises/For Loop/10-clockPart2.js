function clock2() {

    for (let hh = 0; hh < 24; hh++) {

        for (let mm = 0; mm < 60; mm++) {

            for (let ss = 0; ss < 60; ss++) {

                console.log(`${hh} : ${mm} : ${ss}`);

            }

        }

    }

}

clock2();