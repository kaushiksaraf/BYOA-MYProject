import NavBar from "../Navbar/Navbar.jsx";
import Place from "./Place.jsx";
import Footer from "../Footer/Footer.jsx";
import "./place.css"

function PlaceShimla() {
  return (
    <>
      <NavBar />
      <h2> SHIMLA</h2>
      <Place
        title="Jakhu Temple"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Jakhoo_temple.jpg/220px-Jakhoo_temple.jpg"
        desc="Jakhu Temple (also Jakhoo Temple) is an ancient temple in Shimla, Himachal Pradesh, India, dedicated to the Hindu deity Lord Hanuman.[1] It is situated on Jakhu Hill, Shimla's highest peak, 2.5 km (1.6 mi) east of the Ridge at a height of 2,455 m (8,054 ft) above sea level.Each year, a festival is held on Dussehra, before 1972 the festival used to be held at Annadale.[3] Shri Hanuman Jakhu is a statue situated in the temple premises which is one of the tallest in the world.[4]"
      />
      <Place
        title="Kali Bari, Shimla"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kali_Bari_Shimla%2C_Himacha_Pradesh%2C_India_-_panoramio.jpg/220px-Kali_Bari_Shimla%2C_Himacha_Pradesh%2C_India_-_panoramio.jpg"
        desc="Kali Bari Mandir is a Hindu temple situated on Bantony Hill, Shimla. The temple is dedicated to fearsome reincarnation of Goddess Kali, known as Shyamala, after which the Shimla city is named. The goddess is believed to have existed near Jakhoo."
      />
      <Place
        title="Mall Road, Shimla "
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/The_mall_road_shimla.JPG/250px-The_mall_road_shimla.JPG"
        desc="Mall Road is the major hangout point and shopping center in Shimla, the capital city of Himachal Pradesh, India. Constructed during British colonial rule, the Mall road is located a level below The Ridge. The offices of municipal corporation, fire service and police headquarters are located here. Automobiles, except emergency vehicles are not allowed on this road.

        Mall Road has a number of showrooms, department stores, shops, restaurants and cafes. A Himachal emporium that offers handicraft products of Himachal Pradesh like locally designed woollen clothes, branded clothes, pottery items, wooden products, and jewellery is also located here"
      />
      <Place
        title=" Johnnie's Wax Museum Shimla"
        img="https://shimlatourism.co.in/images/places-to-visit/headers/johnnie-s-wax-museum-shimla-tourism-entry-fee-timings-holidays-reviews-header.jpg"
        desc="Why go to London when you can see a truly unique and an equally fascinating attraction in Shimla? Also known as the first wax museum of Himachal Pradesh, Johnnie’s Wax Museum is a place where you can spend a few hours with the life-size statues of the world-famous personalities. It is a great spot to hang out with your family and has become a must-visit tourist destination of Shimla tour, attracting hundreds of holidaymakers every day."
      />
      <Place
        title="Army Heritage Museum, Shimla "
        img="https://upload.wikimedia.org/wikipedia/commons/d/de/Army_Heritage_Museum%2C_Annadale_Shimla.jpg"
        desc="Annadale is located in Shimla city, and has the Army Heritage Museum. Annadale is located in the close proximity of The Ridge. It serves as the picnic spot. The museum has a collection of items such as ancient weapons, ammunitions and life history of Indian warriors."
      />
      <Footer />
    </>
  );
}

export default PlaceShimla;
