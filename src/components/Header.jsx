import { Link } from "react-router-dom";


function Header() {
  return (
    <div id="heading">
      <div id="headingsContainer">
        <div id="logo">Fake Api Store</div>
        <div id="header">API Project</div>
        <div id="buttonContainer">
          <Link to={'/'}><button className="headerButtons"><p>Home</p></button></Link>
          <Link to={'/store'}><button className="headerButtons"><p>Store</p></button></Link>
          <Link to={'/cart'}><button className="headerButtons" id="cartButton"  >
            <div id="totalQuantity"></div> <p>Cart</p>
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
