

import City from "../models/city.js";
import Place from "../models/place.js"




const createCity = async (req, res) => {
  try {
    const { city, img, category} = req.body;
   const cities= await City.create({
    city,
    img,
    category
   })

    if(cities){
      res.json(cities)
    }else{
      res.json("error in cities controllers")
    }

  
  } catch (error) {
    console.log("Error in POST method:", error);
    res.json({ message: "Error in POST method" });
  }
};

// const getPlaceByCity=()=> {
//   const {city}=req.params
// }

const createPlaces=async (req,res)=> {
  try {
    const{id}=req.params;
    const{place}=req.body
const places=await Place.create({
 city:id,
  place
})

res.json(places)
    
  } catch (error) {
    console.log(error)
    res.json("error in place controlls")
  }

}


export { createCity ,createPlaces};
