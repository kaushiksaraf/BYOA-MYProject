import express from "express"
import createContact from "../controllers/contact.js"
import { createCity,createPlaces,getCities,getPlaces } from "../controllers/places.js";






const route = express.Router();

route.get("/city",getCities)
route.get("/place/:id",getPlaces)
route.post("/contact",createContact)
route.post("/city",createCity)
route.post("/place/:id",createPlaces)

export default route;