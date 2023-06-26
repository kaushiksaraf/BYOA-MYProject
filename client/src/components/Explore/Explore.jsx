import Card from "../Card/Card.jsx";
import Footer from "../Footer/Footer.jsx";
import NavBar from "../Navbar/Navbar";
import "./explore.css";
import img from "../../assets/1.jpg";

function Explore() {
  return (
    <>
      <NavBar />
      <img alt="image" className="image" src={img} />

      <form className="form-inline my-2 my-lg-0  search">
        <input type="search" className="input" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <Card/>

      <Footer />
    </>
  );
}

export default Explore;
