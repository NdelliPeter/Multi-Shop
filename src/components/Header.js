import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Outlet } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Header() {
  return (
    <>
      <header>
        {/* Top header */}
        <nav id='nav' className='row container-fluid d-flex px-5 justify-content-between align-items-center'>
          <div className='col-4 d-flex gap-3 '>
            <NavLink className='navLink'>About</NavLink>
            <NavLink className='navLink'>Contact</NavLink>
            <NavLink className='navLink'>Help</NavLink>
            <NavLink className='navLink'>FAQs</NavLink>
          </div>
          <div className='col-3 account_lang_curret'>
            <Dropdown >
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                My Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <NavLink to='signIn'>Sign In</NavLink>
                <Dropdown.Item href='signIn'>Sign In</Dropdown.Item>
                <Dropdown.Item href='signUp'>Sign Up</Dropdown.Item>
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

            <Dropdown >
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                EN
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">FR</Dropdown.Item>
                <Dropdown.Item href="#">AR</Dropdown.Item>
                <Dropdown.Item href="#">RU</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>
        </nav>

      </header>



      <Outlet />
    </>
  )
}

