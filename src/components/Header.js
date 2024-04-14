import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const IsOnline = useOnlineStatus();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li> <Link to ="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li>Contact</li>
          <li>Cart</li>
          <li><Link to ="/profile">Profile</Link></li>
          <li>{IsOnline ? '✅' : '❌'}</li>
          <li><Link to ="/instamart">Instamart</Link></li>
        </ul>
      </div>

      {isLoggedIn ? <button className="logout" onClick={() => {setIsLoggedIn(!isLoggedIn)}}>Logout</button> : <button className="login" onClick={() => {setIsLoggedIn(!isLoggedIn)}}>Login</button>}

    </div>
  );
};
export default Header;
