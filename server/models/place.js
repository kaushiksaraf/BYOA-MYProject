import mongoose from "mongoose"


const placeSchema = mongoose.Schema({
    city:{
    
     type:String,
      required:true,
    },
    place:{
  
      type:String,
      required:true,
    }
  });

  const Place=mongoose.model("Place",placeSchema)
  export default Place;