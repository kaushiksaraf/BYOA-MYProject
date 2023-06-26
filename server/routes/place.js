import express from "express"

import {createPlaces} from "../controllers/places.js"
const route = express.Router();
// route.get("/place/area",getArea)
// route.post("/place/area",createArea)
// route.get("/places",getPlaces)
route.post("/places",createPlaces)


export default route;