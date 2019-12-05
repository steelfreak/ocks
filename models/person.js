module.exports = (sequelize, type) =>{
    const person = sequelize.define('person',{
        FirstName: {
            type:type.STRING
        },
        SecondName: {
            type:type.STRING
        },
        Sex: {
            type:type.STRING
        },
        Telephone: {
            type:type.STRING
        }
    },{
        timestamps:true
    })
    return person
}