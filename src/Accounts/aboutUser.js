import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";




export default function AboutUser() {


    const [file, setFile] = useState([])
    const [accounts, setAccounts] = useState()


    const accountCheck = JSON.parse(localStorage.getItem('logIn user'));
    const email = accountCheck.email

    const account = accounts?.find((acc) => acc.email === email)


    useEffect(() => {
        axios.get('http://localhost:4000/accounts')
            .then((res) => {
                setAccounts(res.data)
            })
    },[])



    return (
        <div className="container-fluid">
            <div className="col-12 bg-white px-4 py-3">
                {(account?.role === 1000) ?
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <h2>Status</h2>
                            <h5>Courstomer</h5>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <h2>Email  </h2>
                            <h5>{account?.email}</h5>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <h2>Name</h2>
                            <h5>{account?.fullname}</h5>
                        </div>
                    </div> :
                    (account?.role === 2468) ?
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <h2>Status</h2>
                            <h5>Vendor</h5>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <h2>Email  </h2>
                            <h5>{account?.email}</h5>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <h2>Name</h2>
                            <h5>{account?.fullname}</h5>
                        </div>
                    </div> :
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <h2>Status</h2>
                            <h5>Admin</h5>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <h2>Email  </h2>
                            <h5>{account?.email}</h5>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <h2>Name</h2>
                            <h5>{account?.fullname}</h5>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}