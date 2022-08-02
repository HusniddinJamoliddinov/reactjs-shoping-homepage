import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container px-15 d-flex align-items-center">
        <div className="navbar">
          <h4 className="logo-title">start bootstrap</h4>
          <ul className="nav-list d-flex align-items-center ">
            <li className="nav-item">home</li>
            <li className="nav-item">about</li>
            <li className="nav-item">show</li>
          </ul>
        </div>
        <button className="btn">
          Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
