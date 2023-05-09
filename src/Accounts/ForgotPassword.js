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
  email: yup
    .string()
    .email("please try again")
    .required("email canot be empty"),
  userName:yup
    .string(),  
  password: yup.string()
    .min(8)
    .max(12)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("password cannot be empty"),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

export default function ForgotPassword() {
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

  const checkAccount = (data) => {

    const acc = accounts.find((account) =>account.email === data.email);
    acc.password =  data.password;
    acc.confirmPassword = data.confirmPassword

    axios
    .put(`http://localhost:4000/accounts/${acc.id}`, acc)
    .then((res) =>{

      setAccounts((prevState)=>
      [...prevState.filter((account)=> account.id === res.data.id ),res.data]
      )
      console.log("oooooooooo", accounts)}
      )
    navigate("/")
  };

  const navigate = useNavigate(-1); 

  const SignInSubmit = (data) => {
    // reset();
    checkAccount(data);
    console.log(data);
    // navigate("/signIn")
  };



  return (
    <>
      <div className="container-fluid row  bg-warning">
        <form
          className="col-11 col-sm-11 col-md-4 col-lg-4 p-3 shadow-lg bg-white rounded "
          onSubmit={handleSubmit(SignInSubmit)}
        >
          <h3>Forgotten Password</h3> 

          <input
            className="col-12 my-2"
            name="email"
            type="email"
            placeholder="email"
            {...register("email") }
          />
          <p className="text-danger font-strong">
            {errors.email?.message}
          </p>
          <div className="col-12 my-2 passBox ">
            <div className="row px-2">
              <input
                className="col-10 pass"
                type={passwordType} 
                onChange={handlePasswordChange} 
                name="password"
                placeholder="password"
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

          <div className="col-12 my-2 passBox ">
            <div className="row px-2">
              <input
                className="col-10 pass"
                type={passwordType} 
                onChange={handlePasswordChange} 
                name="confirmPassword"
                placeholder="confirm password"
                {...register("confirmPassword")}
              />
              <button className="col-2 eyebtn " onClick={togglePassword}>
                { passwordType==="password"? <i className="bi bi-eye-slash"><AiFillEye/></i> :<i className="bi bi-eye"><AiFillEyeInvisible/></i> }
              </button>
            </div>            
          </div>
          <p className="text-danger font-strong">
            {errors.confirmPassword?.message}
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
