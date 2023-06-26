import "./hero.css"

function Hero(props) {
  return (
    <>
    <div className={props.hero}>
    <h1 >{props.title}</h1>
      <p >{props.para}</p>
      {/* <img
     
        alt={props.altname}
        src={props.heroimg}
      />
 <div className="herotitle">
      <h1 >{props.title}</h1>
      <p >{props.para}</p>
      </div>  */}
    </div>
    </>
  );
}

export default Hero;
