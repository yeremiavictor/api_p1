const express = require('express')
const app = express()
const port = 3000
// import body parser
const bodyParser = require('body-parser')


app.get('/',(req,res) =>{
    res.send('Halo YVR')
})

//insert, edit, delete
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//import route post
const postsRouter = require('./routes/posts')
app.use('/api/posts', postsRouter)


app.listen(port,()=>{
    console.log(`aplikasi ini berjalan di http://localhost:${port}`)
})