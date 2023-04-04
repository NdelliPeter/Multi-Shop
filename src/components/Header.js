import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Outlet } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header className="container-fluid ">
        <div className="row ">
          {/* Top header */}
          <nav id="nav" className="col-12 px-5 ">
            <div className="row justify-content-lg-between justify-content-center align-items-center">
              <div className="col-4 d-none d-sm-none d-lg-flex gap-3 text-black">
                <NavLink className="navLink" to="about">
                  About
                </NavLink>
                <NavLink className="navLink" to="contact">
                  Contact
                </NavLink>
                <NavLink className="navLink" to="help">
                  Help
                </NavLink>
                <NavLink className="navLink" to="faq">
                  FAQs
                </NavLink>
              </div>
              <div className="col-11 col-sm-11 col-md-6 col-lg-4  account_lang_curret">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    My Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="signIn">Sign In</Dropdown.Item>
                    <Dropdown.Item href="signUp">Sign Up</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    USD
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">EUR</Dropdown.Item>
                    <Dropdown.Item href="#">GBP</Dropdown.Item>
                    <Dropdown.Item href="#">CAD</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    EN
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">FR</Dropdown.Item>
                    <Dropdown.Item href="#">AR</Dropdown.Item>
                    <Dropdown.Item href="#">RU</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className=" d-flex d-sm-flex d-lg-none px-0 justify-content-end gap-3">
                  <div className="d-flex align-items-center">
                    <AiFillHeart className="" />
                    <div className="ring">0</div>
                  </div>

                  <div className="d-flex align-items-center">
                    <FaShoppingCart className="" />
                    <div className="ring ">0</div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
}
