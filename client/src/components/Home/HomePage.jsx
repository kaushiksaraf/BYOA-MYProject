import NavBar from "../Navbar/Navbar.jsx";
import { Button, ButtonGroup, Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import Carousal from "../Carousal/Carousal.jsx";
import img from "../../assets/10.jpg";
import "./home.css";
import Hero from "../Hero/Hero.jsx";
import Footer from "../Footer/Footer.jsx";

function Home() {
  return (
    <>
      <NavBar />
      <Hero
      herotitlebox="titebox"
        className="hero"
        altname="herohomeimg"
        title="Yatraverse"
        paragraph="Esacpe To Mundane"
        heroimg="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      />
      <div id="img">
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
