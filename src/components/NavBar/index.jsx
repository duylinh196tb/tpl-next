import React from "react";
import Link from "next/link";
import "./Navbar.scss";

const NavBar = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <span className="badge">2eqw!!!</span>
  </nav>
);

export default NavBar;
