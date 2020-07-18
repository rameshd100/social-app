import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="avatar">
        <h4>
          <Link to="/">Social App</Link>
        </h4>
      </div>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </header>
  );
};

export default Header;
