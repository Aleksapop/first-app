//naisaces mi program koji ce da bira dva broja ta 2 broja ce se saberu i ako je taj deljiv broj deljiv sa 3 da pise da je deljiv sa 3 ako nije da pise da nije deljiv sa 3

const { parse } = require('path');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Unesi prvi broj: ', (input) => {
    const number = isNaN(parseInt(input)) ? input : parseInt(input)

    readline.question('Unesi drugi broj: ', (input) => {
        const number1 = isNaN(parseInt(input)) ? input : parseInt(input)

        if (isNaN(number) && isNaN(number1)) {
            console.log(`Broj 1 nije broj ${number}, Broj dva nije broj ${number1}`);
        }
        else if (isNaN(number)) {
            console.log(`Broj 1 nije broj ${number}`);
        }
        else if (isNaN(number1)) {
            console.log(`Broj 2 nije broj ${number1}`);
        }
        else if ((number + number1) % 3 == 0) {
            console.log(`Zbir dva broja je deljiv sa 3! ${number + number1}`);
        }
        else {
            console.log(`Zbir dva broja nije deljiv sa 3! ${number + number1}`);
        }

        readline.close();
    })

})


