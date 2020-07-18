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
        <input type="text" placeholder="Username" maxLength="75" name="username" autoCapitalize="off" autoCorrect="off" aria-required="true" />
        <input type="password" placeholder="Password" autoCapitalize="off" autoCorrect="off" name="password" aria-required="true" />
        <button>Sign In</button>
      </form>
    </header>
  );
};

export default Header;
