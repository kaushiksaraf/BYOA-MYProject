import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";

function Card() {

  const [citydata,setCityData]=useState("")
  const fetchCities=async()=> {
    axios.get("http://localhost:9000/city")
    .then((res)=> {
      console.log(res.data)
      setCityData(res.data)
  })
}

useEffect(()=> {
  fetchCities();
},[])


  console.log(citydata)


  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
         <Link to="/explore/goa"><h2> GOA</h2></Link>
          <img
            className="card-img-top"
            src="https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Goa is a state located on the western coast of India, known for
              its stunning beaches, vibrant culture, and Portuguese colonial
              heritage. It is the smallest state in India by area but is
              immensely popular among tourists from around the world.
            </p>
            {/* <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small className="text-muted">9 mins</small>
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <Link  to="/explore/shimla" ><h2> Shimla</h2></Link>
          <img
            className="card-img-top"
            src="https://images.unsplash.com/photo-1597074866923-dc0589150358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Shimla is a beautiful hill station located in the state of
              Himachal Pradesh, in the northern part of India. Nestled in the
              foothills of the Himalayas, Shimla is known for its scenic
              landscapes, colonial architecture, and pleasant climate.
            </p>
            {/* <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small className="text-muted">9 mins</small>
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <Link to="/explore/kerela" ><h2>  Kerala</h2></Link>
          <img
            className="card-img-top"
            src="https://images.unsplash.com/photo-1575561616684-c82e7ae67e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Kerala, often referred to as "God's Own Country," is a state
              located on the southwestern coast of India. Known for its
              picturesque backwaters, serene beaches, lush greenery, and rich
              cultural heritage, Kerala offers a diverse range of experiences to
              its visitors
            </p>
            {/* <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small className="text-muted">9 mins</small>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
