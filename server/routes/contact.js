import express from "express"
import createContact from "../controllers/contact.js"
const route = express.Router();

route.post("/contact",createContact)

export default route;