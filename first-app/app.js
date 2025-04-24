//napraviti program koji ce da konzologuje brojeve koji su deljivi sa 3 i 5 kada su brojevi deljivi sa 3 i 5 konzologuje ovaj broj je deljiv sa 3 konzlooguj broj je deljiv sa 5 koznologuj broj je deljiv sa 5 a kad nije deljiv ni sa jednim i ako upisemo nesto sto nije broj da napisemo ovo nije pravilan unos

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Unesi broj: ", (input) => {
    let num = parseInt(input);
    console.log("koji je typof num: ", num)
    if (isNaN(num)) {
        console.log("Ovo nije pravilan unos!", input);
    }
    else if (num % 3 == 0 && num % 5 == 0) {
        console.log("Broj je deljiv i sa 3 i sa 5");
    }
    else if (num % 3 == 0) {
        console.log("Broj je deljiv sa 3 ", num);
    }
    else if (num % 5 == 0) {
        console.log("Broj je deljiv sa 5 ", num);
    }
    else {
        console.log("Broj nije deljiv ni sa 3 ni sa 5!")
    }
    readline.close();
})

