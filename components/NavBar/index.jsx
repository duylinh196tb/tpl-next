import React, { Component } from "react";
import Link from "next/link";
import "./Navbar.scss";
class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <span className="badge">Hello!!!</span>
      </nav>
    );
  }
}

export default NavBar;
