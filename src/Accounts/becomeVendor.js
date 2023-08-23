import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ImCheckboxUnchecked } from 'react-icons/im'
import { BsCheckSquareFill } from 'react-icons/bs'




export default function BecomeVendor() {


    const [become, setBecome] = useState(false)
    const [accounts, setAccounts] = useState()


    const accountCheck = JSON.parse(localStorage.getItem('logIn user'));
    const email = accountCheck.email

    const account = accounts?.find((acc) => acc.email === email)
// console.log(account);

    useEffect(() => {
        axios.get('http://localhost:4000/accounts')
            .then((res) => {
                setAccounts(res.data)
            })
    }, [])

    const vendor = () => {
        console.log('lajnffkjnvjvnjfk', account);
        account.role = 2468
        axios.put(`http://localhost:4000/accounts/${account?.id}`, account)
            .then((res) => {
                console.log(res.data);
                window.location.reload(false)
            }).catch((err)=>{
                console.log(err);
            })
    }


    return (
        <div className="container-fluid">
            <div className="col-12 bg-white px-4 py-3">
                {(account?.role === 2468) ?
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                            <h2>Become A Vendor</h2>
                            <button className="border-0 bg-transparent" onClick={() => { vendor(account); setBecome(!become) }}>
                                {!become ? <BsCheckSquareFill className="text-warning bg-black round" />
                                    : <BsCheckSquareFill className="text-warning bg-black round" />
                                }
                            </button>
                        </div>
                    </div> :
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                            <h2>Become A Vendor</h2>
                            <button className="border-0 bg-transparent" onClick={() => { vendor(setBecome(!become)) }}>
                                {!become ? <ImCheckboxUnchecked className='text-black' />
                                    : <BsCheckSquareFill className="text-warning bg-black round" />
                                }
                            </button>
                        </div>
                    </div>}

            </div>
        </div>
    )
}