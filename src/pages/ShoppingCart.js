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

  const increaseQuntity = (product) => {
    product.quantity += 1;

    axios
      .put(`http://localhost:4000/basket/${product.id}`, product)
      .then((res) => {
        const increased = basket.map((prod) => {
          if (product.id === prod.id) {
            product.quantity = res.data.quantity;
            product.total = product.price * product.quantity;
          }
          return prod;
        });
        setBasket(increased);
      });
  };

  const decreaseQuantity = (product) => {
    if (product.quantity === 0) {
      product.quantity = 0;
      axios
        .put(`http://localhost:4000/basket/${product.id}`, product)
        .then((res) => {
          const decreased = basket.map((prod) => {
            if (product.id === prod.id) {
              product.quantity = res.data.quantity;
              product.total = product.price * product.quantity;
            }
            return prod;
          });
          setBasket(decreased);
        });
    } else {
      product.quantity -= 1;
      axios
        .put(`http://localhost:4000/basket/${product.id}`, product)
        .then((res) => {
          const decreased = basket.map((prod) => {
            if (product.id === prod.id) {
              product.quantity = res.data.quantity;
              product.total = product.price * product.quantity;
            }
            return prod;
          });
          setBasket(decreased);
        });
    }
  };

  const subTotal = () => {
    const total = basket?.map((product) => {
      let sum = 0;
      return (product.total += sum);
    });
    console.log(total);
    let sum = total?.reduce(function (a, b) {
      return a + b;
    });
    return sum;
  };

  const shipping = () => {
    const shipping = subTotal() / 10;
    console.log(shipping);
    return shipping;
  };
  const genaralTotal = () => {
    const total = subTotal() + shipping();
    return total;
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

    axios.get("http://localhost:4000/Checkout").then((res) => {
      const respo = res.data;
      setCheckout(respo);
      console.log('Checkout' + respo);
    });
  }, []);

  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:4000/basket/${productId}`);
    setBasket(
      basket.filter((product) => {
        return product.id !== productId;
      })
    );
  };

  const clearBasket = () => {
    const checkOutUpdate = basket.map((product) => {
        axios.post("http://localhost:4000/Checkout", product)
        .then((res) => {
          const respo = res.data;
          setCheckout(respo);
          console.log("oierueneff" + respo);
          });
    })

    console.log(checkOutUpdate);
  };

  return (
    <div className="container-fluid shoppingCartbg">
      <div className="row px-5">
        <div className="col-12 bg-white p-3 my-4">
          <span>Home / Shop / Shopping Cart </span>
        </div>
        <div className="col-12 px-0">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row mx-1  d-flex py-3 align-items-center bg-dark text-white">
                  <h5 className="col-6 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
                    Products
                  </h5>
                  <h5 className="col-6 col-sm-6 col-md-2 col-lg-2 d-flex justify-content-center align-items-center">
                    Price
                  </h5>
                  <h5 className="col-5 col-sm-5 col-md-2 col-lg-2 d-flex justify-content-center align-items-center">
                    Quantity
                  </h5>
                  <h5 className="col-3 col-sm-3 col-md-2 col-lg-2 d-flex justify-content-center align-items-center">
                    Total
                  </h5>
                  <h5 className="col-2 d-flex justify-content-center align-items-center">
                    Remove
                  </h5>
                </div>
                {(basket?.length ?? 0) >= 1
                  ? basket.map((product, id) => {
                      return (
                        <div
                          key={id}
                          className="col-12    "
                        >
                          <div className="row my-3 py-3 mx-1 justify-content-between align-items-center bg-white">
                            <div className="col-6 col-sm-6 col-md-4 col-lg-4 d-flex my-2 ps-lg-5 ps-sm-2 ps-2 justify-content-center align-items-center">
                              <img
                                className="img-fluid col-2 photo"
                                src={product?.image}
                                alt={product?.productName}
                              />
                              {product?.productName}
                            </div>
                            <div className="col-6 col-sm-6 col-md-2 col-lg-2 d-flex my-2 justify-content-center align-items-center">
                              ${product?.price}
                            </div>
                            <div className="col-5 col-sm-5 col-md-2 col-lg-2 d-flex my-2 justify-content-center align-items-center">
                              <button
                                className="bg-warning d-flex align-items-center p-2 quantitybtn"
                                onClick={() => {
                                  decreaseQuantity(product);
                                }}
                              >
                                <FaMinus />
                              </button>
                              <span className="mx-2 ">{product?.quantity}</span>
                              <button
                                className="bg-warning d-flex align-items-center p-2 quantitybtn"
                                onClick={() => {
                                  increaseQuntity(product);
                                }}
                              >
                                <BiPlusMedical />
                              </button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-2 col-lg-2 d-flex my-2 justify-content-center align-items-center">
                              ${product?.total}
                            </div>
                            <div className="col-2 d-flex my-2 justify-content-center align-items-center">
                              <button
                                className="bg-danger text-white d-flex align-items-center p-2 quantitybtn"
                                onClick={() => {
                                  deleteProduct(product?.id);
                                }}
                              >
                                <FaTimes />
                              </button>
                            </div>
                          </div>
                          
                        </div>
                      );
                    })
                  : " No Products in Cart"}
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
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
                      <span>${subTotal()}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-3">
                      <span>Shipping</span>
                      <span>${shipping()}</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h3>Total</h3>
                    <h3>${genaralTotal()}</h3>
                  </div>

                  <button
                    className="col-12 px-5 py-3 my-4 bg-warning btn"
                    onClick={() => {
                      clearBasket();
                    }}
                  >
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
