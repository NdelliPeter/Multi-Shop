import axios from "axios";
import React, { useEffect, useState } from "react";
import {FaUserCircle} from "react-icons/fa";
import "./profile.css"



export default function Profile () {

    const [accounts, setAccounts] = useState()

    const accountCheck = JSON.parse(localStorage.getItem('logIn user'));
    const email= accountCheck.email

    const account = accounts?.find((acc)=>acc.email === email)
    
    useEffect(()=>{
        axios.get("http://localhost:4000/accounts")
            .then((res)=>{
                setAccounts(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })

    })
    return(
        <div className="container-fluid bg-light">
            <div className="row px-5 py-3">
                <div className="col-12 col-sm col-md-4 col-lg-4 bg-white shadow px-2 py-3">
                    <div className="d-flex justify-content-center my-2">
                        <FaUserCircle className=" userIcon" />
                    </div>
                    <h4>Welcome</h4>
                    <h2>{account?.username}</h2>
                </div>
            </div>
        </div>
    )
}