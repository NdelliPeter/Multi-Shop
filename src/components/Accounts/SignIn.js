import React from "react";
import './SignIn.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';


const SignInSchema = yup.object().shape({
    email: yup.string().email("please input a valid email").required("email canot be empty"),
    password: yup.string().min(4).max(15).required("password cannot be empty"),

})



export default function SignIn () {

    const { register, handleSubmit, reset,formState: {errors} } = useForm({
        resolver: yupResolver(SignInSchema)
    });

    const SignInSubmit = (data) => {
        // reset()
        console.log(data);
    }

   return (
       <>
            <div className="container-fluid p-5 row justify-content-center align-items-center bg-light">
                <form className="col-11 col-sm-11 col-md-3 col-lg-3 p-3 bg-warning rounded " onSubmit={handleSubmit(SignInSubmit)}>
                    <h1>Sign In</h1>

                    <input
                    className="col-12 my-2 bg-warning  "
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
                    type="string"
                    placeholder="password"
                    // ref={register}
                    {...register("password")}
                    />
                    <span className='text-danger font-strong'>{errors.password?.message}</span>

                    <button
                    className="col-12 mt-4 signInBtn"
                    type="submit"
                    > SIGN IN</button>
                </form>
            </div>
       </>
   )
}