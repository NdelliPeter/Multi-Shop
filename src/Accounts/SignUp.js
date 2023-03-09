import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import SignUpSchema from "../Schema/SignUpSchema";

import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim("Please input cannot contain just spaces")
    .required("Please input first name"),
  lastName: yup
    .string()
    .trim("Please input cannot contain just spaces")
    .required("Please input last name"),
  email: yup
    .string()
    .email("please input a valid email")
    .required("email canot be empty"),
  password: yup.string().min(4).max(15).required("password cannot be empty"),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const SignUpSubmit = (data) => {
    reset();
    AddAccounts(data)
    console.log(data);
  };

  const [accounts, setAccounts] = useState([])



  const AddAccounts=(data)=>{
      const currentAccount = [data, ...accounts]
      console.log(currentAccount);
      setAccounts(currentAccount) 
      const accountURL = "http://localhost:4000"
      accountURL.setItem("SignUp", JSON.stringify(currentAccount))
    }





  return (
    <>
      <div className="container-fluid row justify-content-center align-items-center bg-warning">
        <form
          className="col-11 col-sm-11 col-md-4 col-lg-3 p-3 bg-white rounded "
          onSubmit={handleSubmit(SignUpSubmit)}
        >
          <h1>Sign Up</h1>

          <input
            className="col-12 my-2"
            name="firstName"
            type="string"
            placeholder="FirstName"
            {...register("firstName")}
          />
          <span className="text-danger font-strong">
            {errors.firstName?.message}
          </span>
          <input
            className="col-12 my-2"
            name="lastName"
            type="string"
            placeholder="LastName"
            {...register("lastName")}
          />
          <span className="text-danger font-strong">
            {errors.lastName?.message}
          </span>

          <input
            className="col-12 my-2"
            name="email"
            type="email"
            placeholder="email"
            {...register("email")}
          />
          <span className="text-danger font-strong">
            {errors.email?.message}
          </span>

          <input
            className="col-12 my-2"
            name="password"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <span className="text-danger font-strong">
            {errors.password?.message}
          </span>

          <input
            name="confirmPassword"
            className="col-12 my-2"
            type="password"
            placeholder="confirm password"
            {...register("confirmPassword")}
          />
          <span className="text-danger font-strong">
            {errors.confirmPassword?.message}
          </span>

          <button className="col-12 mt-4 signUpBtn" type="submit">
            SIGN UP
          </button>
          <div className="col-12 my-2 d-flex justify-content-between align-items-center">
            <small>Already have an account</small>
            <NavLink to="./signIn">SignIn</NavLink>
          </div>

        </form>
      </div>
    </>
  );
}
