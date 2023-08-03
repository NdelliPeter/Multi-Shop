import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {AiFillEyeInvisible} from "react-icons/ai";
import {AiFillEye} from "react-icons/ai";


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const SignInSchema = yup.object().shape({
  password: yup.string()
    .min(8)
    .max(12)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("password cannot be empty"),
//   confirmPassword: yup
//     .string()
//     .test("passwords-match", "Passwords must match", function (value) {
//       return this.parent.password === value;
//     }),
});

export default function ResetPassword() {
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

  const accountCheck = JSON.parse(localStorage.getItem('logIn user'));
  const email = accountCheck.email

  const checkAccount = (data) => {

    const acc = accounts.find((account) =>account.email === email);
    // acc.password =  data.password;
    // acc.confirmPassword = data.confirmPassword
    // acc.password = data.confirmPassword
    const a ={
        email: acc.email,
        oldpassword: data.password,
        newpassword: data.confirmPassword
    }

    axios
    .put(`http://localhost:4000/resetpassword/${acc.id}`, a)
    .then((res) =>{
        console.log("oooooooooo", res.data)
        alert(res.data)
        // navigate("/")
    })
  };

  const navigate = useNavigate(-1); 

  const SignInSubmit = (data) => {
    reset();
    checkAccount(data);
    console.log('iefiudvsdib',data);
    // navigate("/signIn")
  };



  return (
    <>
      <div className="container-fluid row justify-content-center ">
        <form
          className="col-12 col-sm-12 col-md-12 col-lg-12 p-3 bg-white "
          onSubmit={handleSubmit(SignInSubmit)}
        >
          <h3>Reset Password</h3> 

          <div className="col-12 my-2 px-2 passBox ">
            <div className="row px-1">
              <input
                className="col-10 pass"
                type={passwordType} 
                onChange={handlePasswordChange} 
                name="password"
                placeholder="Old Password"
                {...register("password")}
              />
              <button className="col-2 eyebtn " onClick={togglePassword}>
                { passwordType==="password"? <i className="bi bi-eye-slash"><AiFillEye/></i> :<i className="bi bi-eye"><AiFillEyeInvisible/></i> }
              </button>
            </div>            
          </div>
          <p className="text-danger font-strong">
            {errors.password?.message}
          </p>

          <div className="col-12 my-2 px-2 passBox ">
            <div className="row px-1">
              <input
                className="col-10 pass"
                type={passwordType} 
                onChange={handlePasswordChange} 
                name="password"
                placeholder="New Password"
                {...register("confirmPassword")}
              />
              <button className="col-2 eyebtn " onClick={togglePassword}>
                { passwordType==="password"? <i className="bi bi-eye-slash"><AiFillEye/></i> :<i className="bi bi-eye"><AiFillEyeInvisible/></i> }
              </button>
            </div>            
          </div>
          <p className="text-danger font-strong">
            {errors.password?.message}
          </p>
          <button className="col-12 mt-4 signInBtn" type="submit">
            {" "}
           submit
          </button>
          <span className="text-danger font-strong">
            {Error}
          </span>
        </form>
      </div>
    </>
  );
}
