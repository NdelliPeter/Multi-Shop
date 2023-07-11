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
        <footer className="container-fluid bg-dark text-white p-5">
                <div className="row  ">
                    <div className="col-11 col-sm-11 col-md-6 col-lg-3 my-2">
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

                    <div className="col-11 col-sm-11 col-md-6 col-lg-3 my-2">
                        <h3>QUICK SHOP</h3>

                        <NavLink className='footerLink d-flex align-items-center' to="/"><MdKeyboardArrowRight /> Home</NavLink>
                        <NavLink className='footerLink d-flex align-items-center' to="shop"><MdKeyboardArrowRight /> Our Shop</NavLink>
                        <NavLink className='footerLink d-flex align-items-center' to="shopDetails"><MdKeyboardArrowRight /> Shop Detail</NavLink>
                        <NavLink className='footerLink d-flex align-items-center' to="shoppingCart"><MdKeyboardArrowRight /> Shopping Cart</NavLink>
                        <NavLink className='footerLink d-flex align-items-center' to="checkOut"><MdKeyboardArrowRight /> Checkout</NavLink>
                        <NavLink className='footerLink d-flex align-items-center' to="contact"><MdKeyboardArrowRight /> Contact Us</NavLink>

                    </div>

                    <div className="col-11 col-sm-11 col-md-6 col-lg-3 my-2">
                        <h3>MY ACCOUNT</h3>

                        <NavLink className='footerLink d-flex align-items-center' to="/"><MdKeyboardArrowRight /> Home</NavLink>
                        <NavLink className='footerLink d-flex align-items-center' to="shop"><MdKeyboardArrowRight /> Our Shop</NavLink>
                        <NavLink className='footerLink d-flex align-items-center' to="shopDetails"><MdKeyboardArrowRight /> Shop Detail</NavLink>
                        <NavLink className='footerLink d-flex align-items-center' to="shoppingCart"><MdKeyboardArrowRight /> Shopping Cart</NavLink>
                        <NavLink className='footerLink d-flex align-items-center' to="checkOut"><MdKeyboardArrowRight /> Checkout</NavLink>
                        <NavLink className='footerLink d-flex align-items-center' to="contact"><MdKeyboardArrowRight /> Contact Us</NavLink>

                    </div>

                    <div className="col-11 col-sm-11 col-md-6 col-lg-3 my-2">
                        <h3>NEWSLETTER</h3>

                        <p>
                            Dou stet tempor ipsum sit <br/> amet magna ipsum tempor est
                        </p>
                        <div className=' my-3 d-flex'>
                            <input className=' px-1 EmailAdress' placeholder='Your Email Address' />
                            <button className='p-1 searchbtn bg-warning text-black'>
                                Sign Up
                            </button>
                        </div>

                        <h5>FOLLOW US</h5>
                        <div className="d-flex gap-1 pt-3">
                            <div className=" d-flex p-3 bg-warning justify-content-center align-items-center">
                                <AiOutlineTwitter className="text-dark" />
                            </div>
                            <div className=" d-flex p-3 bg-warning justify-content-center align-items-center">
                                <GrFacebookOption className="text-dark" />
                            </div>
                            <div className=" d-flex p-3 bg-warning justify-content-center align-items-center">
                                <FaLinkedinIn className="text-dark" />
                            </div>
                            <div className=" d-flex p-3 bg-warning justify-content-center align-items-center">
                                <AiOutlineInstagram className="text-dark" />
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    )
}