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

userProfile.loginHistory[1].location = "Slavko"
console.log(userProfile.loginHistory)
userProfile.isActive = false
userProfile.name.last = "Popovic"


readline.question('Unesi ulicu: ', (inputStreet) => {

    readline.question('Unesi grad: ', (inputCity) => {

        readline.question("unesi state: ", (inputState) => {

            readline.question("unesi zip: ", (inputZip) => {

                const cityName = inputCity
                const streetName = inputStreet
                const stateName = inputState
                const zipName = inputZip

                console.log("unesen ulica: " + streetName)
                console.log("unsen grad: " + cityName)
                console.log("unesi state: " + stateName)
                console.log("unesi zip: " + zipName)

                if (cityName && stateName && stateName && zipName) {
                    userProfile.address.city = cityName
                    userProfile.address.street = streetName
                    userProfile.address.state = stateName
                    userProfile.address.zip = zipName
                    console.log(userProfile.address)
                }
                else {
                    console.log("niste uneli sve podatke")
                }

                readline.close()
            })
        })
    })
})



//user da da input 
//taj input treba da popuni sreet adres  na liniji 11 ako input ostane prazan posalji poruku useru da pokusa ponovo da napravi upit

//4 inputa i svaki