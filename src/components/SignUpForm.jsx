import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    email: yup
      .string()
      .email("This is not a valid email")
      .required("Email is required"),
    displayName: yup.string().required("Display name is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches("^[A-Za-z\\d]{6,}$", "At least 6 characters"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must matches"),
  })
  .required();

export default function SignUpForm({ action }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="signin-form container form">
      <div className="signin-form__top">
        <h3 className="title">Register</h3>
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
          error={errors.displayName?.message}
          name="displayName"
          type="text"
          placeholder="Display Name"
          icon="account.svg"
        />
        <TextInput
          register={register}
          error={errors.password?.message}
          name="password"
          type="password"
          placeholder="Password"
          icon="lock.svg"
        />
        <TextInput
          register={register}
          error={errors.passwordConfirm?.message}
          name="passwordConfirm"
          type="password"
          placeholder="Confirm Password"
          icon="circle-lock.svg"
        />
        <button type="submit">
          <Button text="Sign up" />
        </button>
      </form>
      <div className="signin-form__bottom">
        <div className="link">
          Already have an account?
          <span onClick={action}> Login</span>
        </div>
      </div>
    </div>
  );
}
