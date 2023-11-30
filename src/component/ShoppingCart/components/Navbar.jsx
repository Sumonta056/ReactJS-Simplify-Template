import "../styles/navbar.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Navbar = ({ size, setShow }) => {
  return (
    <nav className="nav">
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Book Shopping Cart
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <ShoppingCartOutlined
              style={{ fontSize: "36px", color: "#feffff" }}
            />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
