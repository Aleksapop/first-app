
const { read } = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});




const userProfile = {
    id: 12345,
    name: {
        first: "John",
        last: "Doe"
    },
    email: "john.doe@example.com",
    isActive: true,
    interests: ["coding", "hiking", "photography"],
    address: {
        street: "123 Main St",
        city: "Miami",
        state: "FL",
        zip: "33101"
    },
    loginHistory: [
        { date: "2025-04-24", location: "Miami" },
        { date: "2025-04-22", location: "Orlando" }
    ],
    getFullName: function () {
        return `${this.name.first} ${this.name.last}`;
    }
};



readline.question("unesi ime: ", (inputIme) => {
    const ime = parseInt(inputIme) ? "" : inputIme
    userProfile.address.city = ime

    readline.question("unesi prezime: ", (inputPrezime) => {
        const prezime = parseInt(inputPrezime) ? "" : inputPrezime
        userProfile.address.street = prezime

        readline.question("unesi broj: ", (inputBroj) => {
            const broj = parseInt(inputBroj) ? inputBroj : ""
            userProfile.address.zip = broj

            readline.question("unesi grad: ", (inputGrad) => {
                const grad = parseInt(inputGrad) ? "" : inputGrad
                userProfile.address.state = grad



                console.log(userProfile.address)
                console.log(parseInt(inputIme) ? "ime nije dobro pojusajte ponovo" : "")
                console.log(parseInt(inputPrezime) ? "prezime nije dobro pokusajte ponovo" : '')
                console.log(parseInt(inputBroj) ? "" : "broj nije dobar pokusaj opet")
                console.log(parseInt(inputGrad) ? "grad nije dobar pokusaj opet" : "")
                readline.close()
            })

        })
    })
})


