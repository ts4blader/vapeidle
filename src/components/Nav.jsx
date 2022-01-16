import React from "react";
import Image from "./Image";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import NavList from "./NavList";
import { useHistory } from "react-router-dom";

export default function Nav() {
  const history = useHistory();

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__right" onClick={() => history.push("/")}>
          <Image src="logo-light.png" alt="Logo" />
        </div>

        <div className="nav__middle hide show-on-md">
          <NavList />
        </div>

        <div className="nav__left">
          <NavMobile />
          <NavDesktop />
        </div>
      </div>
    </nav>
  );
}
