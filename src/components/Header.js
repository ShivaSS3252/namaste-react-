import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInuser } = useContext(UserContext);
  //Subscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? "active" : "inactive"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart-({cartItems.length} Items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnname === "Login" ? setbtnname("Logout") : setbtnname("Login");
            }}
          >
            {btnname}
          </button>
        </ul>
        <li className="px-4 font-bold">{loggedInuser}</li>
      </div>
    </div>
  );
};
export default Header;
