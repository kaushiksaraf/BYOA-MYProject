import "./navbar.css";
import { Link } from "react-router-dom";


function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
  <Link to="/" className="navbar-brand" >Yatraverse</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
        <Link to="/explore" className="nav-link" >Explore<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/about" className="nav-link" >About Us<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/contact" className="nav-link" >Contact Form</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         SignUP
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/signup" className="dropdown-item" >Signup</Link>
          <Link to="/login" className="dropdown-item" >Login</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" >Something else here</Link>
        </div>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link disabled" >Disabled</a>
      </li> */}
    </ul>
   
  </div>
</nav>
  );
}

export default NavBar;
