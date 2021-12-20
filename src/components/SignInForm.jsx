import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import Icon from "./Icon";

export default function SignInForm() {
  return (
    <div className="signin-form container form">
      <div className="signin-form__top">
        <h3 className="title">Login</h3>
      </div>
      <form className="signin-form__middle">
        <TextInput type="email" placeholder="Email" icon="mail.svg" />
        <TextInput type="password" placeholder="Password" icon="lock.svg" />
        <Button text="Sign in" />
      </form>
      <div className="signin-form__bottom">
        <div className="link">
          Wanna have a new account?
          <span> Register</span>
        </div>
        <div className="auth-section">
          <div className="facebook-auth">
            <Icon src="facebook-auth.svg" />
          </div>
          <div className="github-auth">
            <Icon src="github.svg" />
          </div>
          <div className="google-auth">
            <Icon src="google.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
