import React, { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <div className="login-page">
      {show ? (
        <SignInForm action={() => setShow(false)} />
      ) : (
        <SignUpForm action={() => setShow(true)} />
      )}
    </div>
  );
}
