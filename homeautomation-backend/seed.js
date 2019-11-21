//const faker = require("faker/local/de");
const Status = require("./models/schemaStatus");
const Temperature = require("./models/schemaTemp");

const mongoose = require("mongoose");

mongoose.connect(
    'mongodb://127.0.0.1:27017/homeautomationtest', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
const db = mongoose.connection;

db.on("error", function () {
    process.exit(1);
})
db.once("open", function () {
    console.log("Inserting data...");
    seed();
})

function seed() {
    let rawStatus = {
        Light: [],
        Door: [],
        Window: []
    };
    for (const key in rawStatus) {
        console.log(key);

        for(let i = 0; i < 10; i++) {
            let rawStat = {
                Name: `${key} ${i}`,
                Status: ""
            }
    rawStatus[key].push(rawStat)
        }
        console.log(rawStatus);
    };
    let rawTemps = {
        indoor: [],
        outdoor: []
    };
    for (const key in rawTemps) {
        console.log(key);

        for(let i = 0; i < 5; i++) {
            let rawTemp = {
                name: `${key} ${i}`,
                temp: `${i + 10}`,
                humidity: `${i + 60}`,
                timeStamp: Date()
            }
    rawTemps[key].push(rawTemp)
        }
        console.log('hello', rawTemps);
    };
    // let rawUsers = [];
    // for (let i = 0; i < 20; i++) {
    //     let rawUser = {
    //         login: {
    //             username: faker.internet.userName(),
    //             password: faker.internet.password()
    //         },
    //         contact: {
    //             name: {
    //                 firstName: faker.name.firstName(),
    //                 lastName: faker.name.lastName()
    //             },
    //             birthday: faker.date.past(90),
    //             address: {
    //                 street: {
    //                     name: faker.address.streetName(),
    //                     number: faker.random.number(60)
    //                 },
    //                 city: faker.address.city(),
    //                 zipCode: faker.address.zipCode()
    //             },
    //             email: faker.internet.email(),
    //             phone: faker.phone.phoneNumber()
    //         },
    //         borrowedBooks: [{}],
    //         openFees: [{}],
    //     };
    //     rawUsers.push(rawUser);
    // };
    // Temperature.insert(rawTemps, function (error, docs) {
    //     console.log(`${docs.length} docs(Temps) inserted!`);
    //     console.log(docs[0]);
    //     process.exit(0);
    // })
    Temperature.create(rawTemps/* , function (error, docs) {
    //     console.log(`${docs.length} docs(Status) inserted!`);
    //     console.log(docs[0]); */

    /* } */).then(res=>console.log(res))
    Status.create(rawStatus/* , */ /* function (error, docs) {
        console.log(`${docs.length} docs(Status) inserted!`);
        console.log(docs[0]);


    } */).then(res=>console.log(res)

    ).then (() => process.exit(0))

}

