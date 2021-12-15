import React from "react";
import Image from "./Image";
import NavMobile from "./NavMobile";

export default function Nav() {
  return (
    <nav className="nav container">
      <div className="nav__right">
        <Image src="logo-light.png" alt="Logo" />
      </div>
      <div className="nav__left">
        <NavMobile />
      </div>
    </nav>
  );
}
