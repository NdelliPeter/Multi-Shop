import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email("please input a valid email")
    .required("email canot be empty"),
  password: yup.string().min(4).max(15).required("password cannot be empty"),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/accounts")
      .then((res) => setAccounts(res.accounts))
      .catch((err) => console.log(err));
  }, [setAccounts]);

  const checkAccount = (data) => {
    const check = accounts.find((account) => {
      if (account.email === data.email) {
        navigate("/home");
        console.log(account);
      } else {
        navigate("/home");
        console.log(data);
      }
    });
    setAccounts(check);
  };

  const SignInSubmit = (data) => {
    reset();
    checkAccount(data);
    console.log(data);
  };

  const navigate = useNavigate(-1);

  const moveToNewPage = () => {
    return( navigate("/signUp")
    )};

  return (
    <>
      <div className="container-fluid p-5 row justify-content-center align-items-center bg-warning">
        <form
          className="col-11 col-xsm-11 col-md-3 col-lg-3 p-3 bg-white rounded "
          onSubmit={handleSubmit(SignInSubmit)}
        >
          <h1>Sign In</h1>

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

          <button className="col-12 mt-4 signInBtn" type="submit">
            {" "}
            SIGN IN
          </button>
          <div className="col-12 my-2 d-flex justify-content-between align-items-center">
            <small>Don't have an account yet?</small>
            <Button onClick={moveToNewPage}>SignUp</Button>
          </div>
        </form>
      </div>
    </>
  );
}
