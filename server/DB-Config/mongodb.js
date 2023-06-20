import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const DBConnect = ()=> {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("connected to MONGODB")
    })
    .catch((err)=> {
        console.log("error connecting to Database")
    })
}

export default DBConnect;