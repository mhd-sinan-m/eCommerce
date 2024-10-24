const express = require("express")
require('dotenv').config()
const dbConnect = require("./config/connection")

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./pubic"))

// const client = require("./routers/clientRouter.js") ;

// app.use("/client", client)


dbConnect()
.then( ()=> {
    app.listen(port, ()=>{
        console.log(`Sever Running On ${port}`);
    })
})
.catch( (err)=>{
    console.error(`Database Connection Failed ${err}`)
})
console.log("hi")