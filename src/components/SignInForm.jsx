import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import Icon from "./Icon";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import useAuth from "../libs/useAuth";

const schema = yup
  .object({
    email: yup
      .string()
      .email("This is not a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches("^[A-Za-z\\d]{6,}$", "At least 6 characters"),
  })
  .required();

export default function SignInForm({ action }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Auth
  const { signIn } = useAuth();

  const onSubmit = (data) => {
    signIn(data.email, data.password);

    console.log(data);
    reset();
  };

  return (
    <div className="signin-form container form">
      <div className="signin-form__top">
        <h3 className="title">Login</h3>
      </div>
      <form className="signin-form__middle" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          register={register}
          error={errors.email?.message}
          name="email"
          type="email"
          placeholder="Email"
          icon="mail.svg"
        />
        <TextInput
          register={register}
          error={errors.password?.message}
          name="password"
          type="password"
          placeholder="Password"
          icon="lock.svg"
        />
        <button type="submit">
          <Button text="Sign in" />
        </button>
      </form>
      <div className="signin-form__bottom">
        <div className="link">
          Wanna have a new account?
          <span onClick={action}> Register</span>
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
