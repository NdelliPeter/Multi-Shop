import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {AiFillEyeInvisible} from "react-icons/ai";
import {AiFillEye} from "react-icons/ai";

const SignInSchema = yup.object().shape({
  email_or_userName: yup.string("Enter your Email/User Name")
  // .email("Enter a valid email")
  .required("Email/User Name is required")
  // .test('test-name', 'Enter Valid User Name/Email', 
  //   function(value) {
  //     const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  //     const userNameRegex = /^[aA-zZ\s]+$/; // Change this regex based on requirement
  //     const isValidEmail = emailRegex.test(value);
  //     const isValidPhone = userNameRegex.test(value);
  //     if (!isValidEmail && !isValidPhone ){
  //       return false;
  //     }
  //     return true;
  //   })
  ,
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
  console.log('sdfdsfsdfdsf', accounts);


  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange =(evnt)=>{
      setPasswordInput(evnt.target.value);
  }
  const togglePassword =()=>{
    if(passwordType==="password")
    {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }
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
    const email = data.email_or_userName
    const password = data.password
    accounts.find((account) =>{if(account.email === email || account.userName === email){
      if(account.password === password){
        navigate("/")
      }else{
        setError("Wrong Password")
      }
    }else{
      setError("Email or password not correct try again or try Signing Up")
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


  const forgotPassword = () => {
    return( navigate("/forgotPassword")
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
            name="email_or_userName"
            type="string"
            placeholder="user name or email"
            {...register("email_or_userName") }
          />
          <span className="text-danger font-strong">
            {errors.email?.message}
          </span>
          <div className="col-12 my-2 passBox ">
            <div className="row px-2">
              <input
                className="col-10 ms-1 pass"
                type={passwordType} 
                onChange={handlePasswordChange} 
                name="password"
                placeholder="password"
                {...register("password")}
              />
              <button className="col-2 eyebtn " onClick={togglePassword}>
                { passwordType==="password"? <i className="bi bi-eye-slash"><AiFillEyeInvisible/></i> :<i className="bi bi-eye"><AiFillEye/></i> }
              </button>
            </div>            
          </div>
                    
          <p className="text-danger font-strong">
            {Error}
          </p>
       
           <button className="forgotbtn" onClick={forgotPassword}>Forgotten password?</button>
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
