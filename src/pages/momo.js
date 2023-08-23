import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";





export default function Momo() {


    const [basket, setBasket] = useState()
    const [checkout, setCheckout] = useState();


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

    }, [setBasket]);

    const account = JSON.parse(localStorage.getItem('logIn user'));
    const email = account.email
    // const local = localStorage.getItem(`${email}`) 

    const pay = () => {
        const account = JSON.parse(localStorage.getItem('logIn user'));
        const email = account.email
        localStorage.removeItem(`${email}`)
        basket.map((prod) => {
            axios.delete(`http://localhost:4000/baskets/${prod.id}`);
            setBasket(
                basket.filter((product) => {
                    return product.id !== prod.id;
                })
            );
        })
        checkout.map((prod) => {
            axios.delete(`http://localhost:4000/checkout/${prod.id}`);
            setCheckout(
                checkout.filter((product) => {
                    return product.id !== prod.id;
                })
            );
        })
        // window.location.reload()
        alert('Dail *126# to confirm transaction')
        navigate('/')
        window.location.reload(false)
    }
    const navigate = useNavigate(1);



    return (

        <div className="container-fluid row bg-light px-5 py-3 mx-0">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-3 ">
                <div className="row justify-content-center align-items-center bg-white">
                    <div className="col-12">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOVFjUGlTI5ffiTyLFwZ6TU1UzvdIJX799w&usqp=CAU" />
                    </div>
                    <div className="col-6">
                        {account.email}
                    </div>
                    <div className="col-12">
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
                    </div>
                </div>

            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-3 bg-white">
                <div className="col-12 bg-white px-2 py-3">

                    <div className="">
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
                                return (
                                    product.generaltotal
                                );
                            })
                            : "0"} XFA</h4>
                    </div>
                </div>

                <button className="col-12 px-5 py-4 my-4 bg-warning btn" onClick={pay}>Pay</button>
            </div>
        </div>

    )
}