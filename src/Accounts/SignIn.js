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
    .email("please try again")
    .required("email canot be empty"),
  userName:yup
    .string(),  
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
  const [Error, setError] = useState()


  useEffect (() =>  {
    axios
      .get("http://localhost:4000/accounts")
      .then((res) => {
        const respo =res.data
        setAccounts(respo)
        console.log(respo);
      })
      .catch((err) => console.log(err));
    // console.log(setAccounts);
  }, []);

  const checkAccount = (data) => {
    const email = data.email
    const password = data.password
    accounts.find((account) =>{if(account.email === email){
      if(account.password === password){
        navigate("/")
      }else{
        setError("Wrong Password")
      }
    }else{
      setError("Email dose not exist please check email again or try Signing Up")
    }
    })

  };

  const SignInSubmit = (data) => {
    // reset();
    checkAccount(data);
    console.log(data);
    // navigate("/")
  };

  const navigate = useNavigate(-1); 

  const moveToNewPage = () => {
    return( navigate("/signUp")
    )};

  return (
    <>
      <div className="container-fluid row  bg-warning">
        <form
          className="col-11 col-sm-11 col-md-4 col-lg-4 p-3 shadow-lg bg-white rounded "
          onSubmit={handleSubmit(SignInSubmit)}
        >
          <h1>Sign In</h1> 

          <input
            className="col-12 my-2"
            name="email"
            type="email"
            placeholder="userName or email"
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
          <p className="text-danger font-strong">
            {errors.password?.message}
          </p>
          <input 
           type="checkbox"
           {...register("password")}
           />
           <span className="mx-2">Forgotten password</span>
          <button className="col-12 mt-4 signInBtn" type="submit">
            {" "}
            SIGN IN
          </button>
          <span className="text-danger font-strong">
            {Error}
          </span>
          <div className="col-12 my-2 d-flex justify-content-between align-items-center">
            <small>Don't have an account yet?</small>
            <Button onClick={moveToNewPage}>SignUp</Button>
          </div>
        </form>
      </div>
    </>
  );
}
