import "./CheckOut.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsCheckSquareFill } from "react-icons/bs";
import { ImCheckboxUnchecked } from "react-icons/im";

const CheckOutSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim("Input a valid first name")
    .required("first name can not be empty"),
  lastName: yup
    .string()
    .trim("Input a valid last name")
    .required("last name can not be empty"),
  email: yup
    .string()
    .email("please input a valid email")
    .required("email canot be empty"),
});

export default function CheckOut() {

  const [shipping, setShipping] = useState(false)
  const [basket, setBasket] = useState()
  const [checkout, setCheckout] = useState();
  const [checklist, setChecklist] = useState()
  console.log(checkout);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CheckOutSchema),
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/baskets")
      .then((res) => {
        const respo = res.data;
        setBasket(respo);
        // console.log('first', respo);
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:4000/checkout")
      .then((res) => {
        const respo = res.data;
        setCheckout(respo);
        console.log('Checkout' + respo);
      })
      .catch((err) => console.log(err));

  }, []);

  const paypal = (e) => {
    if (e.target.checked) {
      return true
    } else {
      return false
    }
  }
  const momo = (e) => {
    if (e.target.checked) {
      return true
    } else {
      return false
    }
  }

  const SubmitCheckOut = (data) => {
    reset();
    const list = [data, checklist]
    setChecklist(list)
    localStorage.setItem(`Checkout list`, JSON.stringify(list))
    console.log('checking', data);
  };

  const payOut = () => {

    // if(paypal){

    //   navigate('/paypal')

    // }else 

    if (momo) {
      navigate('/momo')
      SubmitCheckOut()
    }

    // SubmitCheckOut()
    // const account = JSON.parse(localStorage.getItem('logIn user'));
    // const email= account.email
    // localStorage.removeItem(`${email}`)
    // basket.map((prod) =>{ 
    //   axios.delete(`http://localhost:4000/baskets/${prod.id}`);
    //   setBasket(
    //     basket.filter((product) => {
    //       return product.id !== prod.id;
    //     })
    //   );
    // })
    // checkout.map((prod) =>{ 
    //   axios.delete(`http://localhost:4000/checkout/${prod.id}`);
    //   setCheckout(
    //     checkout.filter((product) => {
    //       return product.id !== prod.id;
    //     })
    //   );
    // })
    // // window.location.reload()
    //   navigate('/')
  }
  const navigate = useNavigate(1);
  return (
    <>
      <div className="container-fluid py-3 checkoutbg">
        <div className="row px-5">
          <div className="col-12 bg-white p-3 my-4">
            <span>Home / Shop / Checkout </span>
          </div>

          <div className="col-12 px-0">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                <h3 className="col-12">BILLING ADDRESS</h3>
                <form
                  className="col-12 bg-white px-4 py-3"
                  onSubmit={handleSubmit(SubmitCheckOut)}
                >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label>First Name</label>
                      <input
                        className="col-12 my-2 p-2"
                        name="firstName"
                        placeholder="John"
                        type="sring"
                        {...register("firstName")}
                      />
                      <span className="text-danger font-strong">
                        {errors.firstName?.message}
                      </span>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label>Last Name</label>
                      <input
                        className="col-12 my-2 p-2"
                        name="lastName"
                        placeholder="Doe"
                        type="sring"
                        {...register("lastName")}
                      />
                      <span className="text-danger font-strong">
                        {errors.lastName?.message}
                      </span>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label>E-mail</label>
                      <input
                        className="col-12 my-2 p-2"
                        name="email"
                        placeholder="Your Email"
                        type="sring"
                        {...register("email")}
                      />
                      <span className="text-danger font-strong">
                        {errors.email?.message}
                      </span>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label>Mobile No</label>
                      <input
                        className="col-12 my-2 p-2"
                        name="phoneNumber"
                        placeholder="+237 61*  *89"
                        type="number"
                        {...register("phoneNumber")}
                      />
                      <span className="text-danger font-strong">
                        {errors.phoneNumber?.message}
                      </span>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label>Address</label>
                      <input
                        className="col-12 my-2 p-2"
                        name="addressLine1"
                        placeholder="Great Soppo"
                        type="sring"
                        {...register("addressLine1")}
                      />
                      <span className="text-danger font-strong">
                        {errors.addressLine1?.message}
                      </span>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label>City</label>
                      <input
                        className="col-12 my-2 p-2"
                        name="city"
                        placeholder="Buea"
                        type="sring"
                        {...register("city")}
                      />
                      <span className="text-danger font-strong">
                        {errors.city?.message}
                      </span>
                    </div>

                    <div className="col-12 py-2 d-flex gap-1 align-items-center"
                      onClick={() => setShipping(!shipping)}
                    >
                      <button className="border-0 bg-transparent">
                        {!shipping ? <ImCheckboxUnchecked className='text-black' />
                          : <BsCheckSquareFill className="text-warning bg-black round" />
                        }
                      </button>

                      <span>Ship to different Address</span>
                    </div>
                  </div>
                </form>

                {shipping && (<div className="my-5">
                  <h3 className="col-12">SHIPPING ADDRESS</h3>
                  <form
                    className="col-12 bg-white px-4 py-3"
                    onSubmit={handleSubmit(SubmitCheckOut)}
                  >
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>First Name</label>
                        <input
                          className="col-12 my-2 p-2"
                          name="firstName"
                          placeholder="John"
                          type="sring"
                          {...register("firstName")}
                        />
                        <span className="text-danger font-strong">
                          {errors.firstName?.message}
                        </span>
                      </div>

                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>Last Name</label>
                        <input
                          className="col-12 my-2 p-2"
                          name="lastName"
                          placeholder="Doe"
                          type="sring"
                          {...register("lastName")}
                        />
                        <span className="text-danger font-strong">
                          {errors.lastName?.message}
                        </span>
                      </div>

                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>E-mail</label>
                        <input
                          className="col-12 my-2 p-2"
                          name="email"
                          placeholder="Your Email"
                          type="sring"
                          {...register("email")}
                        />
                        <span className="text-danger font-strong">
                          {errors.email?.message}
                        </span>
                      </div>

                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>Mobile No</label>
                        <input
                          className="col-12 my-2 p-2"
                          name="phoneNumber"
                          placeholder="+237 61*  *89"
                          type="number"
                          {...register("phoneNumber")}
                        />
                        <span className="text-danger font-strong">
                          {errors.phoneNumber?.message}
                        </span>
                      </div>

                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>Address </label>
                        <input
                          className="col-12 my-2 p-2"
                          name="addressLine1"
                          placeholder=" Bonabery"
                          type="sring"
                          {...register("addressLine1")}
                        />
                        <span className="text-danger font-strong">
                          {errors.addressLine1?.message}
                        </span>
                      </div>

                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>City</label>
                        <input
                          className="col-12 my-2 p-2"
                          name="city"
                          placeholder="Douala"
                          type="sring"
                          {...register("city")}
                        />
                        <span className="text-danger font-strong">
                          {errors.city?.message}
                        </span>
                      </div>

                    </div>
                  </form>
                </div>)}
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <h3 className="col-12">ORDER TOTAL</h3>
                <div className="col-12 bg-white px-5 py-3">
                  <h4>Products</h4>
                  {(basket?.length ?? 0) >= 1
                    ? basket.map((product, id) => {
                      return (
                        <div
                          key={id}
                          className="col-12"
                        >
                          <div className="row justify-content-center align-items-center bg-white">
                            <p className="d-flex justify-content-between align-items-center">
                              <span>{product.name}</span>
                              <span>{product.total} XFA</span>
                            </p>

                          </div>

                        </div>
                      );
                    })
                    : " No Products in Cart"}


                  <div className="bord">
                    <div className="d-flex justify-content-between align-items-center my-3">
                      <span>Subtotal</span>
                      <span>{(checkout?.length ?? 0) >= 1
                        ? checkout.map((product, id) => {
                          return (
                            product.subtotal
                          );
                        })
                        : "0"} XFA</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-3">
                      <span>Shipping</span>
                      <span>{(checkout?.length ?? 0) >= 1
                        ? checkout.map((product, id) => {
                          return (
                            product.shipping
                          );
                        })
                        : "0"} XFA</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h3>Total</h3>
                    <h4>{(checkout?.length ?? 0) >= 1
                      ? checkout.map((product, id) => {

                        // setGtotal(product.generaltotal)
                        return (
                          // sum(gtotal)
                          product.generaltotal
                        );
                      })
                      : "0"} XFA</h4>
                  </div>
                </div>

                <div className="my-5">
                  <h3 className="col-12">PAYMENT</h3>
                  <div className="col-12 bg-white px-5 py-3">
                    {/* <div className="col-12 py-2 d-flex align-items-center gap-2">
                      <input className="bg-warning round" type="checkbox" onChange={paypal}/>
                      <img className="payout" src="data:image/png;base64,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" />
                    </div> */}

                    <div className="col-12 py-2 d-flex gap-2">
                      <input className="bg-warning round" type="checkbox" onChange={momo} />
                      <img className=" payout" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOVFjUGlTI5ffiTyLFwZ6TU1UzvdIJX799w&usqp=CAU" />
                    </div>

                    <button className="col-12 px-5 py-4 my-4 bg-warning btn" onClick={payOut}>Place Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
