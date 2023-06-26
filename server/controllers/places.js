import mongoose from "mongoose";

import Place from "../models/place.js";
import placeSchema from "../models/place.js";
// import Area from "../models/area.js";

// const createArea = async (req, res) => {
//   try {
//     const { area1, area2, area3, area4, area5 } = req.body;

//     let area = { area: [{ area1, area2, area3, area4, area5 }] };
//     console.log(area);
//     const result = await Area.create(area);
//     console.log(result);

//     res.json(result);
//   } catch (error) {
//     console.log(error);
//     res.send("err in area data");
//   }
// };
// const getArea = async (req, res) => {
//   const getareas = await Area.find();
//   res.send(getareas);
// };



const createPlaces = async (req, res) => {
  try {
    const { title, img, category, visitplaces} = req.body;
   let place={
    title,
    img,
    category,
    visitplaces,
   }

    await Place.create(place);

    res.send("Place created");
  } catch (error) {
    console.log("Error in POST method:", error);
    res.json({ message: "Error in POST method" });
  }
};

// const getPlaces = async (req, res) => {
//   const places = await Place.find();
//   res.send(places);
// };
export { createPlaces };
