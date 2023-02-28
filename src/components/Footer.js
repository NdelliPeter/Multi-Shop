import React from "react"
import './Footer.css'
import { NavLink } from "react-router-dom"
import {ImLocation} from 'react-icons/im'
import {FaEnvelope} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'






export default function Footer() {
    return (
        <footer className="bg-dark text-white p-5">
            <div className="container-fluid">
                <div className="row justify-content-center ">
                    <div className="col-3">
                        <h3>GET IN TOUCH</h3>

                        <p>
                            No dolore ipsum accusam no lorem. Invidunt sed clita kasd et dolor sed dolor. Rebum temor no vero est magna amet no
                        </p>
                        <div className="d-flex gap-2">
                            <ImLocation className="text-warning" />
                            <div>123 Street, New York, USA</div>
                        </div>
                        <div className="d-flex gap-2">
                            <FaEnvelope className="text-warning" />
                            <div>mail@domain.com</div>
                        </div>
                        <div className="d-flex gap-2">
                            <BsFillTelephoneFill className="text-warning" />
                            <div>+237 123 456 789</div>
                        </div>
                    </div>

                    <div className="col-3">
                        <h3>QUICK SHOP</h3>

                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Home</NavLink>
                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Our Shop</NavLink>
                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Shop Detail</NavLink>
                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Shopping Cart</NavLink>
                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Checkout</NavLink>
                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Contact Us</NavLink>

                    </div>

                    <div className="col-3">
                        <h3>MY ACCOUNT</h3>

                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Home</NavLink>
                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Our Shop</NavLink>
                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Shop Detail</NavLink>
                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Shopping Cart</NavLink>
                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Checkout</NavLink>
                        <NavLink className='footerLink d-flex align-items-center'><MdKeyboardArrowRight /> Contact Us</NavLink>

                    </div>

                    <div className="col-3">
                        <h3>NEWSLETTER</h3>

                        <p>
                            Dou stet tempor ipsum sit <br/> amet magna ipsum tempor est
                        </p>
                        <div className='row my-3 d-flex px-2'>
                            <input className='col-7 px-1 inputSearch' placeholder='Your Email Address' />
                            <button className='col-4 p-1 searchbtn bg-warning text-black'>
                                Sign Up
                            </button>
                        </div>

                        <h5>FOLLOW US</h5>
                        <div className="row gap-2 p-3">
                            <div className="col-2 d-flex p-3 bg-warning justify-content-center align-items-center">
                                <AiOutlineTwitter className="text-dark" />
                            </div>
                            <div className="col-2 d-flex p-3 bg-warning justify-content-center align-items-center">
                                <GrFacebookOption className="text-dark" />
                            </div>
                            <div className="col-2 d-flex p-3 bg-warning justify-content-center align-items-center">
                                <FaLinkedinIn className="text-dark" />
                            </div>
                            <div className="col-2 d-flex p-3 bg-warning justify-content-center align-items-center">
                                <AiOutlineInstagram className="text-dark" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}