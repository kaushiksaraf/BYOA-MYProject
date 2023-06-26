import NavBar from "../Navbar/Navbar.jsx";

import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import Carousal from "../Carousal/Carousal.jsx";
import img from "../../assets/10.jpg";
import "./home.css";
import Hero from "../Hero/Hero.jsx";
import Footer from "../Footer/Footer.jsx";
import img1 from "../../assets/4.jpg"

function Home() {
  return (
    <>
      <NavBar />
      <Carousal/>
    {/* <img src={img1} className="homeimg" alt="homeimg"/> */}
      <div id="box">
        <Heading>"Discover the World with Yatraverse"</Heading>

        <Text fontSize="xl" noOfLines={[1, 2]}>
          Are you tired of the same old routine? Feeling like you need a change
          of scenery? Look no further than Yatraverse! We understand the desire
          to explore the world beyond the typical tourist spots. Yatraverse
          offers a curated selection of destinations that are truly unique.
        </Text>

        <div className="animated-text">
          <span></span>
        </div>
      </div> 
      <Footer />

      {/* <section>
      <Carousal />
      </section> */}
    </>
  );
}

export default Home;
