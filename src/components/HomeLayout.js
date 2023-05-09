import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/whiteLogo.png";

// import "../App.css";
import "./HomeLayout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Outlet } from "react-router-dom";
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
  const [toggle, setToggle] = useState(false)

   

  useEffect(() => {
    axios
    .get("http://localhost:4000/basket")
    .then((res) => {
      const respo = res.data;
      setBasket(respo);
      console.log(respo);
    })
    .catch((err) => console.log(err));
  }, [])


  return (
    <>
      <div className="container-fluid">
        {/* middle header */}
        <div className="row d-none d-sm-none d-lg-flex px-5 py-4 align-items-center">
          <img
            className="col-4 d-flex px-0 align-items-center"
            src={logo}
            alt="logo"
          />
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
            <div className="row justify-content-between align-items-center">
              <img
                className="col-4 d-lg-none px-0 align-items-center"
                src={whiteLogo}
                alt="logo"
              />

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
                      <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger className="DropdownMenuItem">
                          <di className="d-flex justify-content-between align-items-center">
                            Dresses
                            <AiFillCaretRight />
                          </di>
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                          <DropdownMenu.SubContent className="DropdownMenuSubContent">
                            <DropdownMenu.Item className="DropdownMenuItem">
                              Men's Dresses
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator className="DropdownMenuSeparator" />
                            <DropdownMenu.Item className="DropdownMenuItem">
                              Women's Dresses
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator className="DropdownMenuSeparator" />
                            <DropdownMenu.Item className="DropdownMenuItem">
                              Baby's Dresses
                            </DropdownMenu.Item>
                          </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                      </DropdownMenu.Sub>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Shirts
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className="DropdownMenuItem">
                        {" "}
                        Jeans
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Swimwear
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Sleepwear
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Jumpsuits
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Blazers
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Jackets
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Shoes
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>

              <button 
              className="col-3 col-sm-3 d-block d-sm-block d-md-block d-lg-none togglebtn"
              onClick={() => setToggle(!toggle)}>
                <GiHamburgerMenu />
              </button>
              {toggle && (<div className=" col-7 d-flex flex-column gap-3">
                <NavLink className="col-2 nestedlink" to="/">
                  <b>Home</b>
                </NavLink>
                <NavLink className="col-2 nestedlink" to="shop">
                  <b>Shop</b>
                </NavLink>
                <NavLink className="col-2 nestedlink" to="shopDetails">
                  <b>Shop Detail</b>
                </NavLink>
                <Dropdown className="col-2">
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

                <NavLink className="col-2 nestedlink" to="contact">
                  <b>Contact</b>
                </NavLink>
              </div>) 
              }
              <div className=" col-7 d-none d-sm-none d-md-none d-lg-flex gap-3">
                <NavLink className="col-2 nestedlink" to="/">
                  <b>Home</b>
                </NavLink>
                <NavLink className="col-2 nestedlink" to="shop">
                  <b>Shop</b>
                </NavLink>
                <NavLink className="col-2 nestedlink" to="shopDetails">
                  <b>Shop Detail</b>
                </NavLink>
                <Dropdown className="col-2">
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

                <NavLink className="col-2 nestedlink" to="contact">
                  <b>Contact</b>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-2 d-none d-sm-none d-lg-flex px-0 justify-content-end gap-3">
            <div className="d-flex align-items-center">
              <AiFillHeart className="text-warning" />
              <div className="text-white circle">0</div>
            </div>

            <div className="d-flex align-items-center">
              <FaShoppingCart className="text-warning" />
              <div className="text-white circle "> {basket?.length}</div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      <Footer />
    </>
  );
}
