import React from "react";
import Image from "./Image";
import NavMobile from "./NavMobile";
import { useHistory } from "react-router-dom";

export default function Nav() {
  const history = useHistory();

  return (
    <nav className="nav container">
      <div className="nav__right" onClick={() => history.push("/")}>
        <Image src="logo-light.png" alt="Logo" />
      </div>
      <div className="nav__left">
        <NavMobile />
      </div>
    </nav>
  );
}
