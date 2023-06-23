import NavBar from "../Navbar/Navbar";
import "./contact.css"

function Contact() {
  return (
<>
    <NavBar/>
    <form className="group">
  <div class="form-group">
    <label for="formGroupExampleInput">Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="name"/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Email</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="email"/>
  
  </div>
  <div className="form-group ">
    <label for="formGroupExampleInput2">Message</label>
    <input type="text" className="form-control msg"  placeholder="write your message here"/>
  
  </div>
</form>
    </>
  );
}

export default Contact;
