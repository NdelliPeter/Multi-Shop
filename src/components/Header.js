import logo from '../assets/logo.png';
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { SlMagnifier } from "react-icons/sl";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillCaretRight } from 'react-icons/ai'
import { AiFillCaretDown } from 'react-icons/ai'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function Header () {
    return (
        <>
          <header>
            {/* Top header */}
            <nav id='nav' className='row d-flex px-5 justify-content-between align-items-center'>
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

            {/* middle header */}
            <div className='row py-4 align-items-center'>
              <div className='col-4 d-flex justify-content-center align-items-center'>
                  <img 
                    src={logo}
                    alt='logo'
                  />
              </div>

              <div className='col-4 d-flex justify-content-center align-items-center'>
                  <input className='px-1 inputSearch' placeholder='Search for product' />
                  <button className='p-1 serchbtn bg-white'>
                    <SlMagnifier className='text-warning SlMagnifier'/>
                  </button>
              </div>

              <div className='col-4 d-flex justify-content-center align-items-center'>
                <div>
                  <div>Customer Service</div>
                  <div><b>+237 612 345 678</b></div>
                </div>
              </div>
            </div>

            {/* Bottom header */}
            <div className='bg-dark d-flex justify-content-between align-items-center px-5'>
              <div className='d-flex gap-4 align-items-center'>

                  <DropdownMenu.Root >
                    <DropdownMenu.Trigger className='bg-warning dropdown-categories py-4 px-3 mx-4 text-dark'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div>
                          <GiHamburgerMenu className='mx-2 bolder'/>
                          <b>Categories</b>
                        </div>
                        <AiFillCaretDown />
                      </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className='DropdownMenuContent'>
                        <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger className='DropdownMenuItem'>
                          <di className='d-flex justify-content-between align-items-center'>
                            Dresses 
                            <AiFillCaretRight />
                          </di>
                          </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                          <DropdownMenu.SubContent className='DropdownMenuSubContent'>
                            <DropdownMenu.Item className='DropdownMenuItem'>Men's Dresses</DropdownMenu.Item>
                            <DropdownMenu.Separator className="DropdownMenuSeparator" />
                            <DropdownMenu.Item className='DropdownMenuItem'>Women's Dresses</DropdownMenu.Item>
                            <DropdownMenu.Separator className="DropdownMenuSeparator" />
                            <DropdownMenu.Item className='DropdownMenuItem'>Baby's Dresses</DropdownMenu.Item>
                          </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                      </DropdownMenu.Sub>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className='DropdownMenuItem'>Shirts</DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className='DropdownMenuItem'> Jeans</DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className='DropdownMenuItem'>Swimwear</DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className='DropdownMenuItem'>Sleepwear</DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className='DropdownMenuItem'>Jumpsuits</DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className='DropdownMenuItem'>Blazers</DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className='DropdownMenuItem'>Jackets</DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className='DropdownMenuItem'>Shoes</DropdownMenu.Item>

                      </DropdownMenu.Content>  
              
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>

                <div className='d-flex gap-3'>
                  <NavLink className='nestedlink'>Home</NavLink>
                  <NavLink className='nestedlink'>Shop</NavLink>
                  <NavLink className='nestedlink'>Shop Detail</NavLink>
                  <Dropdown >
                      <Dropdown.Toggle variant="light" id="pagesBtn">
                      Pages
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Shopping Cart</Dropdown.Item>
                        <Dropdown.Item href="#">Checkout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* <div className='pagesDrop'>
                      <button className='pagesBtn'>Pages</button>
                      <div className='pagesDrop-content'>
                        <NavLink className='nestedlink'>Shopping Cart</NavLink>
                        <NavLink className='nestedlink'>Checkout</NavLink>
                      </div>
                    </div> */}
                  <NavLink className='nestedlink'>Contact</NavLink>
                </div>
              </div>

              <div className='d-flex gap-3'>
                <div className='d-flex align-items-center'>
                  <AiFillHeart className='text-warning'/>
                  <div className='text-white circle'>0</div>
                </div>

                <div className='d-flex align-items-center'>
                  <FaShoppingCart className='text-warning'/>
                  <div className='text-white circle'>0</div>
                </div>
              </div>
            </div>

          </header>
        </>
    )
}

