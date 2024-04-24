import { useContext, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Title = () => (
  <a href="/">
    <img
      className="w-20 h-20"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const IsOnline = useOnlineStatus();
  const {user} = useContext(userContext);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between items-center border border-pink-800 bg-pink-200 pr-5">
      <Title />
      <div className="">
        <ul className="flex gap-4"> 
          <li> <Link to ="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li>Contact</li>
          <li><Link to ="/cart">🛒-{cartItems.length}</Link></li>
          <li><Link to ="/profile">Profile</Link></li>
          <li>{IsOnline ? '✅' : '❌'}</li>
          <li><Link to ="/instamart">Instamart</Link></li>
        </ul>
      </div>
      <div>
      <div>{user.name}- {user.email}</div>
      {isLoggedIn ? <button className="logout" onClick={() => {setIsLoggedIn(!isLoggedIn)}}>Logout</button> : <button className="login" onClick={() => {setIsLoggedIn(!isLoggedIn)}}>Login</button>}
      </div>
      

    </div>
  );
};
export default Header;
