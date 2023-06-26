import NavBar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";
import Footer from "../Footer/Footer.jsx"
 import "./contact.css";
 import img2 from "../../assets/contact.avif"

function Contact() {
  return (
    <>
      <NavBar />
<img src={img2}  className="cntimg"  alt="contactimg"/>
      

      <div className="contact">
        <label>Name</label>
        <input type="text" className="" placeholder="name" />

        <label>Email</label>
        <input type="text" className="" placeholder="email" />

        <label>Message</label>
        <input type="text" className="msg" placeholder="write your message here" />
        <button>Submit</button>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
