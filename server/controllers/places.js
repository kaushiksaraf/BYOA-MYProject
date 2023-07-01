

import City from "../models/city.js";
import Place from "../models/place.js"




const createCity = async (req, res) => {
  try {
    const { city, img, category,desc} = req.body;
   const cities= await City.create({
    city,
    img,
    category,
    desc
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

const getCities=async (req,res)=> {
  try {
    const cities=await City.find()
    console.log(cities)
    res.json(cities)
  } catch (error) {
    console.log(error)
    res.json("error in getting cities")
  }
 

}

const createPlaces=async (req,res)=> {
  try {
    const{id}=req.params;
    const{place,img,desc}=req.body
const places=await Place.create({
 city:id,
  place,
  img,
  desc,
})

res.json(places)
    
  } catch (error) {
    console.log(error)
    res.json("error in place controlls")
  }

}

const getPlaces=async(req,res)=> {
  try {
   const{id}=req.body;
    const places=await Place.find({_id:id})
    console.log(places)
    res.json(places)
  } catch (error) {
    console.log(error)
    res.json("error in getting places")
  }
}

export { createCity ,createPlaces,getPlaces,getCities};



