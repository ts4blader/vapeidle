import React, { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

export default function Login() {
  const [show, setShow] = useState(true);
  const width = window.innerWidth;

  return (
    <main
      className="login-page"
      style={
        width >= 768 ? { backgroundImage: `url(/images/background.jpg)` } : null
      }
    >
      {show ? (
        <SignInForm action={() => setShow(false)} />
      ) : (
        <SignUpForm action={() => setShow(true)} />
      )}
    </main>
  );
}
