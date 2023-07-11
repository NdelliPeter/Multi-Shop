import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import whiteLogo from "../assets/whiteLogo.png";

// import "../App.css";
import "./HomeLayout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { SlMagnifier } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Footer from "../components/Footer";
import axios from "axios";

export default function HomeLayout() {

  const [basket, setBasket] = useState();
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState('')



  useEffect(() => {
    axios
      .get("http://localhost:4000/baskets")
      .then((res) => {
        const respo = res.data;
        setBasket(respo);
        setCount(respo?.length)
        console.log(respo);
      })
      .catch((err) => console.log(err));

  }, [])

  const moveToCart = () => {
    navigate('/shoppingCart')
  }

  const navigate = useNavigate(1)


  return (
    <>
      <div className="container-fluid">
        {/* middle header */}
        <div className="row d-none d-sm-none d-lg-flex px-5 py-4 align-items-center">
          <div className="col-4 d-flex px-0 align-items-center">
            <img
              className="logo"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="col-5 d-flex justify-content-center align-items-center">
            <input
              className="px-1 inputSearch"
              placeholder="Search for product"
            />
            <button className="p-1 serchbtn bg-white">
              <SlMagnifier className="text-warning SlMagnifier" />
            </button>
          </div>

          <div className="col-3 px-0 d-flex flex-column justify-content-end align-items-end">
            <div>Customer Service</div>
            <div>
              <b>+237 612 345 678</b>
            </div>
          </div>
        </div>

        {/* Bottom header */}
        <div className="bg-dark row justify-content-between align-items-center px-5">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 d-flex px-0 gap-4 align-items-center">
            <div className="row justify-content-sm-between align-items-center">
              <div className="col-5 col-sm-5 col-md-5 d-lg-none midlogo">
                <img
                  className=" img-fluid px-0 align-items-center"
                  src={logo}
                  alt="logo"
                />
              </div>


              <div className="col-5 d-none d-sm-none d-md-none d-lg-block">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger className="bg-warning dropdown-categories py-4 px-3 text-dark">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <GiHamburgerMenu className="mx-2 bolder" />
                        <b>Categories</b>
                      </div>
                      <AiFillCaretDown />
                    </div>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content className="DropdownMenuContent">
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item
                        href="painting"
                       className="DropdownMenuItem">
                        Paintings
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item 
                      href="sculptur"
                      className="DropdownMenuItem">
                        Sculptures
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Fabrics
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>

              <div className="col-3 col-sm-3 d-flex d-sm-flex d-md-flex d-lg-none position">
                <button
                  className="  togglebtn"
                  onClick={() => setToggle(!toggle)}>
                  <GiHamburgerMenu />
                </button>
              </div>

              {toggle && (<div className=" col-7 d-flex flex-column gap-3">
                <NavLink className=" nestedlink" to="/">
                  Home
                </NavLink>
                <NavLink className=" nestedlink" to="shop">
                  Shop
                </NavLink>
                <NavLink className=" nestedlink" to="shopDetails">
                  Shop Detail
                </NavLink>
                <Dropdown className="">
                  <Dropdown.Toggle variant="light" id="pagesBtn">
                    Pages
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="shoppingCart">
                      Shopping Cart
                    </Dropdown.Item>
                    <Dropdown.Item href="checkOut">Checkout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <NavLink className=" nestedlink" to="contact">
                  Contact
                </NavLink>
              </div>)
              }
              <div className=" col-7 d-none d-sm-none d-md-none d-lg-flex gap-3">

                <NavLink className=" nestedlink" to="/">
                  Home
                </NavLink>
                <NavLink className=" nestedlink" to="shop">
                  Shop
                </NavLink>
                <NavLink className=" nestedlink" to="shopDetails">
                  Shop Detail
                </NavLink>
                <Dropdown className="">
                  <Dropdown.Toggle variant="light" id="pagesBtn">
                    Pages
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="shoppingCart">
                      Shopping Cart
                    </Dropdown.Item>
                    <Dropdown.Item href="checkOut">Checkout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <NavLink className=" nestedlink" to="contact">
                  Contact
                </NavLink>


              </div>
            </div>
          </div>

          <div className="col-2 d-none d-sm-none d-lg-flex px-0 justify-content-end gap-3">
            <div className="d-flex align-items-center">
              <AiFillHeart className="text-warning" />
              <div className="text-white circle">0</div>
            </div>

            <div className="d-flex align-items-center" onClick={moveToCart}>
              <FaShoppingCart className="text-warning" />
              <div className="text-white circle "> {count }</div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      <Footer />
    </>
  );
}
