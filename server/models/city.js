import mongoose from "mongoose";

const citySchema = mongoose.Schema({
  city: {
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
  desc:{
    type: String,
    required: true,
  },
  places:[{type:mongoose.Types.ObjectId,ref:"Place"}]
});

const City = mongoose.model("City", citySchema);

export default City;
