import NavBar from "../Navbar/Navbar.jsx";
import { Button, ButtonGroup, Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import Carousal from "../Carousal/Carousal.jsx";
import img from "../../assets/10.jpg";
import "./home.css";

function Home() {
  return (
    <>
      <NavBar />
      <div id="img">
       
        <Heading>
          "Discover the World with Yatraverse"
        </Heading>

        

       
         
          <Text fontSize="xl" noOfLines={[1, 2]}>
      
            Are you tired of the same old routine? Feeling like you need a
            change of scenery? Look no further than Yatraverse! We understand
            the desire to explore the world beyond the typical tourist spots.
            Yatraverse offers a curated selection of destinations that are truly
            unique.
          </Text>
       

        <div className="animated-text">
          <span></span>
        </div>
      </div>

      {/* <section>
      <Carousal />
      </section> */}
    
    </>
  );
}

export default Home;
