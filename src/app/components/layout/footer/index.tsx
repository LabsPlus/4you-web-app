import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">
              <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
              <Link to="/contact">Contact</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;