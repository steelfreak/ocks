const express = require('express')
const bodyparser = require('body-parser')

const app = express()
const port = 4100
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

const {person} = require('sequelize')


app.get('/persons',(req, res)=>{
    person.findAll()
    .then (persons =>{
        res.send(persons)
    })
    
})

app.post('/persons/nuevo', (req, res) =>{
    console.log(req.body)
    person.create({
        FirstName:req.body.FirstName,
        SecondName:req.body.SecondName,
        Sex:req.body.Sex,
        Telephone:req.body.Telephone
    }).then (person =>{
        res.send('Person Created')
    })
    
})

app.get('/persons/:id', (req, res) =>{
    let personId = req.body.id
    person.findOne({where:{id:personId}})
    .then(person =>{
        res.json(person)
    })
    
})

app.put('/persons/:id', (req, res) =>{
    let personId = req.body.id
    let nuevoDatos = req.body
    person.findOne({where:{id:personId}})
    .then(person =>{
        person.update(nuevoDatos)
        .then(nuevaperson =>{
            res.json(nuevaperson)
        })
    })
   
})

app.delete('/persons/:id', (req, res) =>{
    let personId = req.params.id
    person.destroy({
        where:{id:personId}
    }).then(() =>{
        res.send('Person Eliminated...')
    })
    
})




app.listen(port, () =>{
    console.log(`App listening at port ${port}`)
})