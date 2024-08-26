import { LOGO_URL } from "../utils/constants";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const {loggedInUser} = useContext(UserContext);

  // Subscribing to the store using Selector

  const cartIems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg  sm:bg-green-50 ">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-xl">
          <li className="px-4">
            <Link to="/" >Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about" >About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact" >Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" >Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
          <Link to="/cart" >Cart ({cartIems.length} items)</Link>
          </li>
          <button 
            className="px-4 bg-gray-200 rounded-lg"
            onClick={() => {
              btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
