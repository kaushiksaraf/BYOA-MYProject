import NavBar from "../Navbar/Navbar";
import "./signup.css"





function SignUP() {
   
   
   
   
   
   
   
    return ( 

      <>
    
<NavBar/>

        <form className="group">
        <h3>SiGN UP</h3>
  <div className="form-group ">
  <label for="exampleInputEmail1">Name</label>
  <input className="form-control form" type="text" placeholder="enter your name"/>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control form" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
     );
}

export default SignUP;