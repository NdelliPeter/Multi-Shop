import React, { useState, useEffect} from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";


export default function Header() {

  const [basket, setBasket] = useState()
  const [checkout, setCheckout] = useState()
  const [count, setCount] = useState('')
  const [checkAccount, setCheckAccount] = useState(true)
 

  useEffect(() => {
    const cookies = Cookies.get('jwt')
    if(cookies){
      return (axios
      .get("http://localhost:4000/baskets")
      .then((res) => {
        const respo = res.data;
        setBasket(respo);
        setCount(`${respo?.length}`)
        console.log(respo);
      })
      .catch((err) => console.log(err)),
      setCheckAccount(false)
      )
    }

    axios.get("http://localhost:4000/checkout")
      .then((res) => {
        const respo = res.data;
        setCheckout(respo);
        console.log('Checkout' + respo);
      })
      .catch((err) => console.log(err));
  }, [])

  // const check = () =>{
  //   const checkAccount = Cookies.get('jwt')
  //   if(checkAccount) {
  //     return setCheckAccount(false), false
  //   }
  //   // else {
  //   //   return true
  //   // }
  // }


  const logout = () => {
    Cookies.remove('jwt')
    localStorage.removeItem('logIn user')
    window.location.reload(false)
    axios.get("http://localhost:4000/logout")
    .then((res)=>{
      const respo = res.data
      console.log(respo);
      navigate('/')
    })

    basket.map((prod) =>{ 
      axios.delete(`http://localhost:4000/baskets/${prod.id}`);
      setBasket(
        basket.filter((product) => {
          return product.id !== prod.id;
        })
      );
    })

    checkout.map((prod) =>{ 
      axios.delete(`http://localhost:4000/checkout/${prod.id}`);
      setCheckout(
        checkout.filter((product) => {
          return product.id !== prod.id;
        })
      );
    })
  }

  const moveToCart = () => {
    navigate('/shoppingCart')
  }

  const navigate = useNavigate(1)


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
              <div className="col-11 col-sm-11 col-md-8 col-lg-4  account_lang_curret">
                { checkAccount ?  <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="signIn">Sign In</Dropdown.Item>
                    <Dropdown.Item href="signUp">Sign Up</Dropdown.Item>
                    {/* <Dropdown.Item onClick={logout}>logout</Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>:

                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    My Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* <Dropdown.Item href="signIn">Sign In</Dropdown.Item>
                    <Dropdown.Item href="signUp">Sign Up</Dropdown.Item> */}
                    <Dropdown.Item onClick={logout}>logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>}

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
                  <button className="d-flex align-items-center border-0">
                    <AiFillHeart className="" />
                    <div className="ring">0</div>
                  </button>

                  <button className="d-flex align-items-center border-0" onClick={moveToCart}>
                    <FaShoppingCart className="" />
                    <div className=" ring "> {count }</div>
                  </button>
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
