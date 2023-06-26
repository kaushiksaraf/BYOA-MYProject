import Card from "../Card/Card.jsx";
import Footer from "../Footer/Footer.jsx";
import NavBar from "../Navbar/Navbar";
import "./explore.css";
import img from "../../assets/1.jpg";
import { useState } from "react";

function Explore() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    if (searchInput && searchInput.length < 2) {
      setSearch("");
    } else {
      setSearch(searchInput);
    }
  };

  return (
    <>
      <NavBar />
      <img alt="image" className="image" src={img} />

      <form className="form-inline my-2 my-lg-0  search">
        <input type="search"   onChange={(e) => handleSearch(e)} className="input" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <Card />

      <Footer />
    </>
  );
}

export default Explore;
