const user = {
    firstName: "Ron",
    lastName: "Erlichman",
    address: {
        city: "Ashdod",
        zipCode: 1234
    },
    id: 1
}

const {address: {city, zipCode}, address, firstName, lastName} = user;
console.log(firstName)  // Ron
console.log(lastName)   // Erlichman
console.log(address)    // address OBJ
console.log(city)       // Ashdod
console.log(zipCode)    // 1234

const user2 = {
    firstName: "Ron",
    lastName: "Erlichman",
    id: 2
}

const {firstName: first, lastName: last} = user2;
console.log(first)  // Ron
console.log(last)   // Erlichman