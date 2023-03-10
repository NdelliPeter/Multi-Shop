import React from "react";
import logo from "../assets/logo.png";
import "../App.css";
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

export default function HomeLayout() {
  return (
    <>
      {/* middle header */}
      <div className="row container-fluid py-4 align-items-center">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <img src={logo} alt="logo" />
        </div>

        <div className="col-4 d-flex justify-content-center align-items-center">
          <input
            className="px-1 inputSearch"
            placeholder="Search for product"
          />
          <button className="p-1 serchbtn bg-white">
            <SlMagnifier className="text-warning SlMagnifier" />
          </button>
        </div>

        <div className="col-4 d-flex justify-content-center align-items-center">
          <div>
            <div>Customer Service</div>
            <div>
              <b>+237 612 345 678</b>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom header */}
      <div className="container-fluid bg-dark row justify-content-between align-items-center px-5">
        <div className="col-8 d-flex gap-4 align-items-center">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="bg-warning dropdown-categories py-4 px-3 mx-4 text-dark">
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

          <div className="d-flex gap-3">
            <NavLink className="nestedlink text-warning" to="/">
              Home
            </NavLink>
            <NavLink className="nestedlink" to="shop">
              Shop
            </NavLink>
            <NavLink className="nestedlink" to="shopDetails">
              Shop Detail
            </NavLink>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="pagesBtn">
                Pages
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="shoppingCart">Shopping Cart</Dropdown.Item>
                <Dropdown.Item href="checkOut">Checkout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <NavLink className="nestedlink" to="contact">
              Contact
            </NavLink>
          </div>
        </div>

        <div className="col-2 d-flex gap-3">
          <div className="d-flex align-items-center">
            <AiFillHeart className="text-warning" />
            <div className="text-white circle">0</div>
          </div>

          <div className="d-flex align-items-center">
            <FaShoppingCart className="text-warning" />
            <div className="text-white circle ">0</div>
          </div>
        </div>
      </div>

      <Outlet />

      <Footer />
    </>
  );
}
