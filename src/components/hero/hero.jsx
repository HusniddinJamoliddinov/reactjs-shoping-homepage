import "./hero.scss";
import cardImg from "./card-img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="info">
        <h1 className="title">Shop in style</h1>
        <p className="description">With this shop hompeage template</p>
      </div>
      <div className="cards">
        <div className="card">
          <img src={cardImg} alt="" />
          <div className="card-info">
            <h4 className="card-title">Fancy Product</h4>
            <p className="cost">$120.00 - $280.00</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImg} alt="" />
          <div className="card-info">
            <h4 className="card-title">Fancy Product</h4>
            <p className="cost">$120.00 - $280.00</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImg} alt="" />
          <div className="card-info">
            <h4 className="card-title">Fancy Product</h4>
            <p className="cost">$120.00 - $280.00</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImg} alt="" />
          <div className="card-info">
            <h4 className="card-title">Fancy Product</h4>
            <p className="cost">$120.00 - $280.00</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImg} alt="" />
          <div className="card-info">
            <h4 className="card-title">Fancy Product</h4>
            <p className="cost">$120.00 - $280.00</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImg} alt="" />
          <div className="card-info">
            <h4 className="card-title">Fancy Product</h4>
            <p className="cost">$120.00 - $280.00</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImg} alt="" />
          <div className="card-info">
            <h4 className="card-title">Fancy Product</h4>
            <p className="cost">$120.00 - $280.00</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImg} alt="" />
          <div className="card-info">
            <h4 className="card-title">Fancy Product</h4>
            <p className="cost">$120.00 - $280.00</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>

      <p className="subtitle">Copyright © Your Website 2022</p>
    </div>
  );
};

export default Hero;
