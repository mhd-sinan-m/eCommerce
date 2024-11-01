const mongoose = require("mongoose")
const mongoUrl = process.env.MONGOURL

const dbConnect  = async ()=>{
  await mongoose.connect(mongoUrl,{dbName:'ecommerce'})
  .then(()=>{
    console.log('mongoDb connected successfully on',mongoUrl);
  })
  .catch(()=>{
    console.error('mongoDb error ');
    
  })
}
module.exports= dbConnect