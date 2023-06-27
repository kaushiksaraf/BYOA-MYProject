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
});

const City = mongoose.model("City", citySchema);

export default City;
