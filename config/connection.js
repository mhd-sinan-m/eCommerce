const mongoose = require("mongoose")

async function dbConnect() {
    await mongoose.connect(process.env.MONGO_URL,{
        dbName:"ecommerce"
    })
    .then( ()=>{
        console.log("MongoDb Successfully Connected")
    })
    .catch((err)=>{
        console.log('Error When Connecting MongoDb',err)
    })
}
module.exports=dbConnect