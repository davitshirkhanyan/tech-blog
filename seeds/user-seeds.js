const { User } = require('../models');

const userData = [
    {
        username: "dmatinez",
        email: "martinez_d@gmail.com",
        password: "Mart1234*"
    },
    {
        username: "johnsmith",
        email: "js965@gmail.com",
        password: "p@ssword23"
    },
    {
        username: "davshir",
        email: "dddshir@gmail.com",
        password: "password35"
    },
    {
        username: "barbra_al",
        email: "bar_alvarez@gmail.com",
        password: "password4**"
    },
    {
        username: "jas_gas",
        email: "gas123@gmail.com",
        password: "p*ssword566"
    },
    {
        username: "edmurph",
        email: "murph222@gmail.com",
        password: "p@ssword61"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;