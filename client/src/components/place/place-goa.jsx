import NavBar from "../Navbar/Navbar.jsx";
import Place from "./Place.jsx";
import Footer from "../Footer/Footer.jsx";
import "./place.css"

function PlaceGoa() {
  return (
    <>
      <NavBar />
      <h2> GOA</h2>
      <Place
        title="DUDSAGAR FALLS"
        img="https://img.veenaworld.com/wp-content/uploads/2021/07/Dudhsagar-Waterfalls-Goa-How-to-Reach-Timings-Tickets.jpeg"
        desc="The falls are located in the Bhagwan Mahaveer Sanctuary and Mollem National Park among the Western Ghats. The falls are a punctuation mark in the journey of the Mandovi River from the Western Ghats to Panjim where it meets the Arabian sea. The area is surrounded by deciduous forests with rich biodiversity. This waterfall is also known as Tambdi Surla to some of the local people. The falls are not particularly spectacular during the dry season but during the monsoon season, however, the falls are fed by rains and form a huge force of water."
      />
      <Place
        title="Basilica of Bom Jesus"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Basilica_of_bom_jesus_-_Front_View.jpg/250px-Basilica_of_bom_jesus_-_Front_View.jpg"
        desc='The Basilica of Bom Jesus (Portuguese: Basílica do Bom Jesus; Konkani: Borea Jezuchi Bajilika) is a Catholic basilica located in Goa, in the Konkan region of India. The iconic church is a pilgrimage centre and recognised by UNESCO as a World Heritage Site.[1][2] The basilica is located in Old Goa, the former capital of Portuguese India, and holds the mortal remains of St Francis Xavier.[3]

        Bom Jesus (meaning, "Good/ Infant Jesus" in Portuguese) is the name used for the Ecce Homo in countries of the Lusosphere. This Jesuit church is India s first minor basilica, and is considered to be one of the best examples of baroque architecture and Portuguese Colonial architecture in India. It is one of the Seven Wonders of Portuguese Origin in the World.
        
        Pope Pius XII raised this sanctuary to the status of basilica via the Pontifical decree “Priscam Goae” on 20 March 1946. The decree was signed and notarized by Cardinal Giovanni Battista Montini.'
      />
      <Place
        title="Sinquerim Beach"
        img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/bc/96/c7/caption.jpg?w=200&h=100&s=1"
        desc="One of the best beaches in North Goa. Scenic panoramic view from the Lower Aguada Fort - one of the best sunset points. The beach can get busy during evenings and weekends. The best time to visit is before 9am in the morning when the sun is not too harsh and you can have the beach for yourself (very few people visit at that time). Parking can become quite messy during evenings and weekends. There are various water sporting options but beware of the high tides. We saw families neglecting the coast guard warnings and venturing into the sea, which is not safe at all! The beach is immaculately clean, soft sand, clear water. Definitely recommend multiple visits during your stay (if you pick a hotel in North Goa)"
      />
      <Place
        title="Palolem Beach"
        img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/9c/palolem-sea-beach.jpg?w=800&h=-1&s=1"
        desc="
        Palolem Beach Goa  Attractions, Adventure, Water Sports ...
        It's known for its beautiful crescent  shape which makes it possible to see both the ends from the centre of the beach. Featured in Matt Damon English Movie The Bourne Supremacy; it's another kind of beach with Green Island; its definitely one of the places to be in."
      />
      <Place
        title="Shanta Durga Temple"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Shantadurga_temple.jpg/220px-Shantadurga_temple.jpg"
        desc="Shri Shantadurga Saunsthan is a private temple complex belonging to the Goud Saraswat Brahman Samaj located 30 km (19 mi) from Panaji at the foothill of Kavalem village in Ponda Taluka, Goa, India.

        Shrimad Swamiji of Shri Kavale Math is spiritual head Of Shree Shantadurga Saunsthan, Kavale (Shrimat Shivananda Saraswati Swami Gauḍapādāchārya of Shri Kavale Math is spiritual chief Of Shree Shantadurga Saunsthan).
        
        Shree Shantadurga is the Kuldevi (family deity) of many Goud Saraswat Brahman. On 4 December 2016, (Margashirsh Shuddh Panchmi). Shree Shantadurga Devasthan, Kavale has completed its 450th year of existence."
      />
      <Footer />
    </>
  );
}

export default PlaceGoa;
