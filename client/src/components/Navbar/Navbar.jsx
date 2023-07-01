import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  header">
      <Link to="/" className="navbar-brand">
        Yatraverse
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

      <div className="collapse navbar-collapse text-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto  list   ">
          <li className="nav-item active">
            <Link to="/explore" className="nav-link">
              Explore<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/about" className="nav-link">
              About Us<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
           {isAuthenticated && (
            <li>
              <img className="profile" src={user.picture} alt={user.name} />
       
            </li>
          )} 

          {isAuthenticated ? (
           
               
              <button
                type="button"
                className="btn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            
          ) : (
            <button
              type="button"
              className="btn"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}

          {/* <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         SignUP
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/signup" className="dropdown-item" >Signup</Link>
          <Link to="/login" className="dropdown-item" >Login</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" >Something else here</Link>
        </div>
      </li> */}
          {/* <li className="nav-item">
        <a className="nav-link disabled" >Disabled</a>
      </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
