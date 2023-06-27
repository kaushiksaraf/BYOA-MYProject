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
            <div className="carousel-caption d-none d-md-block  titlebox">
              <h1>Yatraverse</h1>
              <h2>Unlock the Adventure in you</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img1} alt="Second slide" />
            <div class="carousel-caption d-none d-md-block  titlebox">
              <h1>Yatraverse</h1>
              <h2>Escape The Mundane</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img4} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block  titlebox">
              <h1>Yatraverse</h1>
              <h2>Your Vaction Starts Here</h2>
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
