import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/">home |</Link>
        <Link to="/about">About |</Link>
        <Link to="terms">terms</Link>
      </div>
      <span>Copyright &copy;2020 Social App</span>
    </div>
  );
};

export default Footer;
