import React, { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

export default function Login() {
  const [show, setShow] = useState(true);

  return (
    <main className="login-page">
      {show ? (
        <SignInForm action={() => setShow(false)} />
      ) : (
        <SignUpForm action={() => setShow(true)} />
      )}
    </main>
  );
}
