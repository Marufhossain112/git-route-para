import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="flex justify-center space-x-2">
        <div>
          <a href="/home">Home</a>
        </div>
        <div>
          <Link to="/home2">Home2</Link>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
        <div>
          <Link to="/about2">About2</Link>
        </div>
        <div>
          <Link to="/friends">Friends</Link>
        </div>
      </nav>
      <p>I am common</p>
    </div>
  );
};

export default Header;
