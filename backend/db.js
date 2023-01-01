const mongoose=require('mongoose')
//const mongoURI="mongodb://localhost:27017/?tls=false&directConnection=true&readPreference=primary"
const mongoURI="mongodb+srv://imyogi1:hWK7xnB7ADWzjDgb@cluster0.tqph1gu.mongodb.net/inotebook?retryWrites=true&w=majority"
const connectToMongo=async()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully")
    })
}

module.exports=connectToMongo;