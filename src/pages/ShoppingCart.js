import "./ShoppingCart.css";

import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShoppingCart() {
  const [quantity, setQuantity] = useState();
  const [basket, setBasket] = useState();
  const [checkout, setCheckout] = useState();

  const increaseQuntity = (id) => {
    // const item = axios.get(`http://localhost:4000/basket/${id}`)
    // .then((res) => {
    //   const respo =res.data
    //   // setQuantity(respo)
    //         console.log(respo);
    // })
    // const new_item= 
    // if(item.id === id ){
    //   const addQuantity = item.quantity ++
    //   return(addQuantity)
    // }
    // const add = basket.map((product) => {
    //   if(product.id === id){
    //     return setBasket(item)
    //   }
    // })
    const new_item = basket.map((item) => {
      if(item.id === id) {
        item.quantity = item.quantity ++
        return(item)
      }else{
        return item;
      }

    })
    const update = basket.map

    console.log(new_item);

    // axios.put(`http://localhost:4000/basket/${ id }`,)
    //       .then((res) =>{
    //         console.log(res.data);
    //       })
  };


  const decreaseQuantity = (product) => {
    const decrease = basket.find((productItem) => {
      if(productItem.id === product.id){
        if (quantity >= 1) {
          setQuantity(quantity - 1);
        } else {
          setQuantity(0);
        }
      }
    })
    console.log(decrease);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/basket")
      .then((res) => {
        const respo = res.data;
        setBasket(respo);
        console.log(respo);
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:4000/Checkout")
    .then((res) => {
      const respo = res.data;
      setCheckout(respo)
      console.log(respo);
    })
  },[setBasket]);

  const deleteProduct = (productId) =>{
    axios.delete(`http://localhost:4000/basket/${productId}`);
    setBasket(
      basket.filter((product) => {
        return(product.id !== productId)})
    ) 
  }

  const clearBasket = () => {
    setCheckout(basket)
    axios
    .post("http://localhost:4000/Checkout", basket)
    .then((res) => {
      const respo = res.data;
      setBasket(respo);
      console.log(respo);
    })
  }

  return (
    <div className="container-fluid shoppingCartbg">
      <div className="row px-5">
        <div className="col-12 bg-white p-3 my-4">
          <span>Home / Shop / Shopping Cart </span>
        </div>
        <div className="col-12 px-0">
          <div className="row">
          <div className="col-8">
          <div className="col-12">
            <div className="col-12 d-flex py-3 align-items-center bg-dark text-white">
              <h5 className="col-4 d-flex justify-content-center align-items-center">
                Products
              </h5>
              <h5 className="col-2 d-flex justify-content-center align-items-center">
                Price
              </h5>
              <h5 className="col-2 d-flex justify-content-center align-items-center">
                Quantity
              </h5>
              <h5 className="col-2 d-flex justify-content-center align-items-center">
                Total
              </h5>
              <h5 className="col-2 d-flex justify-content-center align-items-center">
                Remove
              </h5>
            </div>
            {(basket?.length ?? 0) >= 1
              ? basket.map((product, id) => {
                  return (
                    <div key={id} className="col-12 d-flex my-3 py-3 justify-content-between align-items-center bg-white ">
                      <div className="col-4 d-flex ps-5 align-items-center">
                        <img className="img-fluid col-2 photo" src={product?.image} alt={product?.productName} />
                        {product?.productName}
                      </div>
                      <div className="col-2 d-flex justify-content-center align-items-center">
                        ${product?.price}
                      </div>
                      <div className="col-2 d-flex justify-content-center align-items-center">
                        <button
                          className="bg-warning d-flex align-items-center p-2 quantitybtn"
                          onClick={() =>{ decreaseQuantity(product?.id)}}
                        >
                          <FaMinus />
                        </button>
                        <span className="mx-2 ">{product?.quantity}</span>
                        <button
                          className="bg-warning d-flex align-items-center p-2 quantitybtn"
                          onClick={() => {increaseQuntity(product?.id)}}
                        >
                          <BiPlusMedical />
                        </button>
                      </div>
                      <div className="col-2 d-flex justify-content-center align-items-center">
                        ${product?.price * product?.quantity}
                      </div>
                      <div className="col-2 d-flex justify-content-center align-items-center">
                        <button className="bg-danger text-white d-flex align-items-center p-2 quantitybtn"
                        onClick={() => {deleteProduct(product?.id)}}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </div>
                  );
                })
              : " "}
          </div>
        </div>

        <div className="col-4">
          <div className="col-12 d-flex p-0 align-items-center justify-content-between bg-white">
            <h5 className="col-5 px-2 d-flex ">Coupon Code</h5>

            <button className="col-5 py-3 d-flex justify-content-center align-items-center bg-warning  quantitybtn">
              Aplly Coupon
            </button>
          </div>

          <div className="col-12 my-3">
            <h3>CART SUMMARY</h3>
            <div className="col-12 px-4 py-3x bg-white">
              <div className="borderBot">
                <div className="d-flex justify-content-between align-items-center my-3">
                  <span>Subtotal</span>
                  <span>$150</span>
                </div>
                <div className="d-flex justify-content-between align-items-center my-3">
                  <span>Shipping</span>
                  <span>$10</span>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <h3>Total</h3>
                <h3>$150</h3>
              </div>

              <button className="col-12 px-5 py-3 my-4 bg-warning btn" 
              onClick={() =>{clearBasket()}}>
                Proced to checkOut
              </button>
            </div>
          </div>
        </div>
          </div>
        </div>

      </div>
    </div>
  );
}
