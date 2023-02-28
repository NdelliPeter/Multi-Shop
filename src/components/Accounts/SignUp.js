import React from "react";
import './SignUp.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import SignUpSchema from "../Schema/SignUpSchema";

import * as yup from 'yup';


const Schema = yup.object().shape({
    firstName:yup.string().required("Please input first name"),
    lastName:yup.string().required("Please input last name"),
    email: yup.string().email("please input a valid email").required("email canot be empty"),
    password: yup.string().min(4).max(15).required("password cannot be empty"),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), "password should match"])
})



export default function SignUp () {

    const { register, handleSubmit, reset,formState: {errors} } = useForm({
        resolver: yupResolver(Schema)
    });

    const SignInSubmit = (data) => {
        reset()
        console.log(data);
    }

   return (
       <>
            <div className="container-fluid p-5 row justify-content-center align-items-center bg-warning">
                <form className="col-4 p-3 m-5 bg-white rounded " onSubmit={handleSubmit(SignInSubmit)}>
                    <h1>Sign Up</h1>


                    <input
                    className="col-12 my-2"
                    name="firstName"
                    type="string"
                    placeholder="FirstName"
                    // ref={register}
                    {...register("firstName")}
                    />
                    <span className='text-danger font-strong'>{errors.firstName?.message}</span>
                    <input
                    className="col-12 my-2"
                    name="lastName"
                    type="string"
                    placeholder="LastName"
                    // ref={register}
                    {...register("lastName")}
                    />
                    <span className='text-danger font-strong'>{errors.lastName?.message}</span>

                    <input
                    className="col-12 my-2"
                    name="email"
                    type="email"
                    placeholder="email"
                    // ref={register}
                    {...register("email")}
                    />
                    <span className='text-danger font-strong'>{errors.email?.message}</span>

                    <input
                    className="col-12 my-2"
                    name="password"
                    type="password"
                    placeholder="password"
                    // ref={register}
                    {...register("password")}
                    />
                    <span className='text-danger font-strong'>{errors.password?.message}</span>

                    <input
                    name="confirmPassword"
                    className="col-12 my-2"
                    type="password"
                    placeholder="confirm password"
                    // ref={register}
                    {...register("cofirmPassword")}
                    />
                    <span className='text-danger font-strong'>{errors.confirmPassword && "Paswords should match"}</span>

                    <button
                    className="col-12 mt-4 signUpBtn"
                    type="submit"
                    > SIGN UP</button>
                </form>
            </div>
       </>
   )
}