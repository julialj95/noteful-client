import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={"/"}>Noteful</Link>
    </header>
  );
}
export default Header;
