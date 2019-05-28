const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
//Define paths for Express config
const pubDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handbars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup statuc public directory
app.use(express.static(pubDirPath))

app.get('',(req, res) => {
    res.render('index',{
        title: 'Weather app',
        name: 'Kumar'
    })
})
// app.get('',(req, res) => {
//     res.send('Hello express!')
// })

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>')
})

app.get('/weather',(req, res) =>{
    if(!req.query.address){
        return res.send({
            error: 'Provide an address and try again'
        })
    }
    res.send({
        forcast: 'It is raining',
        location: 'Mysore',
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'Provide the search key and try again'
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('*',(req, res) => {
    res.send('My 404 page')
})

app.listen(8080, () =>{
    console.log('Server is up on port 8080')
})