function Hero(props) {
  return (
    <div>
      <img
      className={props.className}
        alt={props.altname}
        src={props.heroimg}
      />
<div className={props.herotitlebox}>
      <h1 className={props.heading}>{props.title}</h1>
      <p className={props.para}>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Hero;
