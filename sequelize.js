const Sequelize = require('sequelize')
const personModel = require('./models/person')
const DBURL = 'mysql://kinen:kinen123@localhost:3306/api-agenda'

const sequelize = new Sequelize(DBURL)
const person = personModel(sequelize, Sequelize)

sequelize.sync()
.then(() =>{
    console.log('Table Created..')
})

module.exports = {
    person
}