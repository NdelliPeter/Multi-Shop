import React from "react";
import "./SignUp.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import SignUpSchema from "../Schema/SignUpSchema";
// import { v4 as uuid} from 'uuid'
import * as yup from "yup";
import axios from "axios";
// import signIn from "./SignIn.js"
// import SignIn from "./SignIn.js";
import { Button } from "react-bootstrap";
import {AiFillEyeInvisible} from "react-icons/ai";
import {AiFillEye} from "react-icons/ai";


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const SignUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim("Please input cannot contain just spaces")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Please input first name"),
  lastName: yup
    .string()
    .trim("Please input cannot contain just spaces")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Please input last name"),
  userName: yup
    .string()
    .max(10)
    .trim("Please input cannot contain just spaces")
    .required("Please User name last name"),
  email: yup
    .string()
    .email("please input a valid email")
    .matches(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, "input a valid email")
    .required("email canot be empty"),
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

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
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

  const addAccount = (data) => {

    if(accounts.length === 0){
      return (
        axios
        .post("http://localhost:4000/accounts", data)
        .then((res) => {
        console.log(res);
        })
        .catch((err) => {
          console.log(err);
        }) ,
      navigate("/")
    )
    }else if( accounts.find((account) =>(account.email === data.email))){
      setError("This email already exist please try Signing In")
    }else{
      return (
        axios
        .post("http://localhost:4000/accounts", data)
        .then((res) => {
        console.log(res);
        })
        .catch((err) => {
          console.log(err);
        }) ,
      navigate("/")
    )
    }
    console.log(data);

  };

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

  function func() {
    function ff(s) {
      var pt = (Math.random().toString(16) + "000000000").substr(2, 8);
      return s ? "-" + pt.substr(0, 4) + "-" + pt.substr(4, 4) : pt;
    }
    return ff() + ff(true) + ff(true) + ff();
  }
  const id = func();

  const SignUpSubmit = (data) => {
    data.id = id;
    addAccount(data);
    reset();
  };

  const navigate = useNavigate(-1);

  const moveToNewPage = () => {
    return( navigate("/signIn")
    )};

  return (
    <>
      <div className="container-fluid warning">
        <div className="row">
        <form
          className="col-11 col-sm-11 col-md-4 col-lg-4 shadow-lg bg-white rounded"
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
            name="userName"
            type="string"
            placeholder="userName"
            {...register("userName")}
          />
          <span className="text-danger font-strong">
            {errors.userName?.message}
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
          <span className="text-danger font-strong">
            {errors.password?.message}
          </span>

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
          <span className="text-danger font-strong">
            {errors.confirmPassword?.message}
          </span>

          <button className="col-12 mt-4 signUpBtn" href="home" type="submit">
            SIGN UP
          </button>
          <span className="text-danger font-strong">
            {Error}
          </span>
          <div className="col-12 my-2 d-flex justify-content-between align-items-center">
            <small>Already have an account</small>
            <Button onClick={moveToNewPage}>SignIn</Button>
          </div>
        </form>
        </div>

      </div>
      {/* <Outlet /> */}
    </>
  );
}
