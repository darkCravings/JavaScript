function projectsCreation(input) {

    let name = input[0];
    let projects = Number(input[1]);
    let sum = projects * 3;

    console.log(` The architect ${name} will need ${sum} hours to complete ${projects} project/s. `);
}

projectsCreation(["Sanya", "9"]);