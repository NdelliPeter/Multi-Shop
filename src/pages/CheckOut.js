import "./CheckOut.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


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

  const SubmitCheckOut = (data) => {
    reset();
    axios.post("http://locahost:4000/payout", data)
      .then((res) => {
        console.log(res.data);
      })
    console.log(data);
  };

  const payOut = () => {

    // SubmitCheckOut()
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
    window.location.reload()
      navigate('/')
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
                      <label>Address Line 1</label>
                      <input
                        className="col-12 my-2 p-2"
                        name="addressLine1"
                        placeholder=" 123 Street"
                        type="sring"
                        {...register("addressLine1")}
                      />
                      <span className="text-danger font-strong">
                        {errors.addressLine1?.message}
                      </span>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label>Address Line 2</label>
                      <input
                        className="col-12 my-2 p-2"
                        name="addressLine2"
                        placeholder=" 123 Street"
                        type="sring"
                        {...register("addressLine2")}
                      />
                      <span className="text-danger font-strong">
                        {errors.addressLine2?.message}
                      </span>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label>Country</label>
                      <input
                        className="col-12 my-2 p-2 "
                        type="select"
                        name="county"
                      />
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label>City</label>
                      <input
                        className="col-12 my-2 p-2"
                        name="city"
                        placeholder="New York"
                        type="sring"
                        {...register("city")}
                      />
                      <span className="text-danger font-strong">
                        {errors.city?.message}
                      </span>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label>State</label>
                      <input
                        className="col-12 my-2 p-2"
                        name="state"
                        placeholder=" New York"
                        type="sring"
                        {...register("state")}
                      />
                      <span className="text-danger font-strong">
                        {errors.state?.message}
                      </span>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label>Zip Code</label>
                      <input
                        className="col-12 my-2 p-2"
                        name="zipCode"
                        placeholder=" 123"
                        type="number"
                        {...register("zipCode")}
                      />
                      <span className="text-danger font-strong">
                        {errors.zipCode?.message}
                      </span>
                    </div>

                    <div className="col-12 py-2 d-flex gap-1">
                      <input
                        className="text-warning"
                        name="zipCode"
                        type="checkbox"
                        {...register("zipCode")}
                      />
                      <span>Create an account</span>
                    </div>

                    <div className="col-12 py-2 d-flex gap-1">
                      <input
                        className="bg-warning"
                        name="zipCode"
                        type="checkbox"
                        onClick={() => setShipping(!shipping)}
                        {...register("zipCode")}
                      />
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
                        <label>Address Line 1</label>
                        <input
                          className="col-12 my-2 p-2"
                          name="addressLine1"
                          placeholder=" 123 Street"
                          type="sring"
                          {...register("addressLine1")}
                        />
                        <span className="text-danger font-strong">
                          {errors.addressLine1?.message}
                        </span>
                      </div>

                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>Address Line 2</label>
                        <input
                          className="col-12 my-2 p-2"
                          name="addressLine2"
                          placeholder=" 123 Street"
                          type="sring"
                          {...register("addressLine2")}
                        />
                        <span className="text-danger font-strong">
                          {errors.addressLine2?.message}
                        </span>
                      </div>

                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>Country</label>
                        <input
                          className="col-12 my-2 p-2 "
                          type="select"
                          name="county"
                        />
                      </div>

                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>City</label>
                        <input
                          className="col-12 my-2 p-2"
                          name="city"
                          placeholder="New York"
                          type="sring"
                          {...register("city")}
                        />
                        <span className="text-danger font-strong">
                          {errors.city?.message}
                        </span>
                      </div>

                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>State</label>
                        <input
                          className="col-12 my-2 p-2"
                          name="state"
                          placeholder=" New York"
                          type="sring"
                          {...register("state")}
                        />
                        <span className="text-danger font-strong">
                          {errors.state?.message}
                        </span>
                      </div>

                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>Zip Code</label>
                        <input
                          className="col-12 my-2 p-2"
                          name="zipCode"
                          placeholder=" 123"
                          type="number"
                          {...register("zipCode")}
                        />
                        <span className="text-danger font-strong">
                          {errors.zipCode?.message}
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
                    <h3>{(checkout?.length ?? 0) >= 1
                    ? checkout.map((product, id) => {
                      return (
                        product.generaltotal
                      );
                    })
                    : "0"} XFA</h3>
                  </div>
                </div>

                <div className="my-5">
                  <h3 className="col-12">PAYMENT</h3>
                  <div className="col-12 bg-white px-5 py-3">
                    <div className="col-12 py-2 d-flex gap-2">
                      <input className="bg-warning round" type="checkbox" />
                      <span>Paypal</span>
                    </div>

                    <div className="col-12 py-2 d-flex gap-2">
                      <input className="bg-warning round" type="checkbox" />
                      <span>Direct Check</span>
                    </div>

                    <div className="col-12 py-2 d-flex gap-2">
                      <input className="bg-warning round" type="checkbox" />
                      <span>Bank Transfer</span>
                    </div>

                    <button className="col-12 px-5 py-4 my-4 bg-warning btn"  onClick={payOut}>Place Order</button>
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
