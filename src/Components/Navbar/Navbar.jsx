import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/favourite");
  };
  return (
    <>
      <nav>
        <div className="menu-items">
          <h3 onClick={() => navigate("/")}>Estatery</h3>

          <ul className="menu">
            <li>Rent</li>
            <li>Buy</li>
            <li>Sell</li>
            <li className="dropdown">
              Manage Property
              <ul className="option-menu">
                <li>Option1</li>
                <li>Option2</li>
                <li>Option3</li>
                <li>Option4</li>
              </ul>
            </li>
            <li className="dropdown">
              Resources
              <ul className="option-menu">
                <li>Option1</li>
                <li>Option2</li>
                <li>Option3</li>
                <li>Option4</li>
              </ul>
            </li>
            <li className="favourite" onClick={() => handleClick()}>
              Favourite
            </li>
          </ul>
        </div>
        <div className="buttons">
          <button className="btn login">Login</button>
          <button className="btn signup">Signup</button>
        </div>
      </nav>
    </>
  );
};
export { Navbar };
