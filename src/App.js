import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';
import Home from './pages/Home';
import { HiMagnifyingGlass } from "react-icons/hi2";
// import {magnifying-glass} from '@herio'




function App() {

  // const currencies = [
  //   {value: 'USD', lable: 'USD'},
  //   {value: 'EUR', lable: 'EUR'},
  //   {value: 'GBP', lable: 'GBP'},
  //   {value: 'CAD', lable: 'CAD'}
  // ];
  
  return (
    <BrowserRouter>
      <header>
          <nav className='row d-flex bg-light px-5 justify-content-between align-items-center'>
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
                      <Dropdown.Item href="#">Sign In</Dropdown.Item>
                      <Dropdown.Item href="#">Sign Up</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>


                {/* <Select 
                className='col-4 align-self-center text-dark'
                options={currencies} /> */}
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
          <div className='row align-items-center'>
            <div className='col-4 d-flex justify-content-center align-items-center'>

            </div>

            <div className='col-4 d-flex justify-content-center align-items-center'>
                <input placeholder='Search for product' />
                <button>
                  <HiMagnifyingGlass />
                </button>
            </div>

            <div className='col-4 d-flex justify-content-center align-items-center'>

            </div>
          </div>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} /> 
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;
