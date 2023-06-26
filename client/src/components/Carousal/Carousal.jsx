import img10 from "../../assets/10.jpg";
import img1 from "../../assets/1.jpg";
import img4 from "../../assets/4.jpg";
import "./carousal.css";

function Carousal() {
  $(".carousel").carousel({
    interval: 1000,
  });

  return (
    <div className="carousal">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img10} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Yatraverse</h2>
              <p>Unlock the Adventure in you</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img1} alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h2>Yatraverse</h2>
              <p>Escape The Mundane</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img4} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Yatraverse</h2>
              <p>Your Vaction Starts Here</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousal;
