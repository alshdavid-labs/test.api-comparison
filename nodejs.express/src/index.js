const express = require('express')
const app = express()
const Mongo = require('./data/db');

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/posts', async (req, res) => {
    res.send(await Mongo.find({
        query: {}
    }))
})

app.get('/add-post/:post', async (req, res) => {
    if (!req.params.post) {
        return res.statusCode(400).send({ message: 'invalid entry' })
    }
    res.send(await Mongo.insert({
        query: { 
            content: req.params.post,
            date: new Date()
        }
    }))
})

app.post('/posts', (req, res) => res.send([]))

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))



void async function() {
    const data = await db.find({
        query: '{}'
    })

    console.log(data)
}