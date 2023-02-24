import React from "react";
import './SignUp.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const Schema = yup.object().shape({
    firstName:yup.string().required("Please input first name"),
    lastName:yup.string().required("Please input last name"),
    email: yup.string().emali("please input a valid email").required("email canot be empty"),
    password: yup.string().required("password cannot be empty"),
    confirm_password: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
})



export default function SignUp () {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(Schema)
    });

    const SignInSubmit = (data) => {
        console.log(data);
    }

   return (
       <>
            <div className="container-fluid row justify-content-center align-items-center bg-warning">
                <form className="col-4 bg-white rounded " onSubmit={handleSubmit(SignInSubmit)}>
                    <h1>Sign Up</h1>


                    <input
                    className="col-12 my-2"
                    name="firstName"
                    type="string"
                    placeholder="FirstName"
                    {...register("firstName")}
                    />
                    {errors.firstName ? (
                        <span className="text-danger">{errors.firstName.message}</span>
                    ) :(
                        <></>
                    )}
                    <input
                    className="col-12 my-2"
                    name="lastName"
                    type="string"
                    placeholder="LastName"
                    {...register("lastName")}
                    />
                    {errors.firstName ? (
                        <span className="text-danger">{errors.firstName.message}</span>
                    ) :(
                        <></>
                    )}
                    <input
                    className="col-12 my-2"
                    name="email"
                    type="email"
                    placeholder="email"
                    {...register("email")}
                    />
                    {errors.firstName ? (
                        <span className="text-danger">{errors.firstName.message}</span>
                    ) :(
                        <></>
                    )}
                    <input
                    className="col-12 my-2"
                    name="password"
                    type="string"
                    placeholder="password"
                    {...register("password")}
                    />
                    {errors.firstName ? (
                        <span className="text-danger">{errors.firstName.message}</span>
                    ) :(
                        <></>
                    )}
                    <input
                    name="cofirmPassword"
                    className="col-12 my-2"
                    type="string"
                    placeholder="confirm password"
                    {...register("cofirmPassword")}
                    />
                    {errors.firstName ? (
                        <span className="text-danger">{errors.firstName.message}</span>
                    ) :(
                        <></>
                    )}

                    <input
                    className="col-12 my-2"
                    type="submit"
                    />
                </form>
            </div>
       </>
   )
}