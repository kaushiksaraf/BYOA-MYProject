import Footer from "../Footer/Footer.jsx";
import NavBar from "../Navbar/Navbar.jsx";
import "./place.css"

function Place(props) {
    return ( 
        <div>
         

<h4>{props.title}</h4>
<div className="box">

<img className="img" src={props.img} alt={props.alt}/>
<p>{props.desc}</p>
</div>



        </div>
     );
}

export default Place;