import mongoose from "mongoose";


const areaSchema = mongoose.Schema({
  area:{
    type:String,
    required:true,
  }
});

const placeSchema = mongoose.Schema({
  title:{ 
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  visitplaces: [areaSchema],
});

const Place = mongoose.model("Place", placeSchema);

export default {Place,placeSchema};
