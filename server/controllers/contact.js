import Contact from "../models/contact.js"

const createContact= async(req,res)=> {
    try {
        const{name,email,message}=req.body;
        const contact={
            name,
            email,
            message,
        }
        await Contact.create(contact) 
        console.log(contact)
        res.json(contact)
    
    } catch (error) {
        res.send("error in contact post")
    }
 

}
export default createContact;