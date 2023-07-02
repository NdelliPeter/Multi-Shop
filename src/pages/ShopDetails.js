import axios from "axios";
import './ShopDetails.css';
import React, { useEffect } from "react";
import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Carousel from "react-bootstrap/Carousel";


export default function ShopDetails() {

  const [products,setProducts] = useState()


  useEffect(() => {
    axios
    .get("http://localhost:4000/products")
    .then((res) => {
      const respo = res.data;
      setProducts(respo);
      console.log(respo);
    })
    .catch((err) => console.log(err));
  },[])

  const basketDrop = (product) => {
    product.quantity = 1
    const drop = products.find(
      (productItem) =>
        products.indexOf(productItem) === products.indexOf(product)
    );
  }
  return (
    <div className="container-fluid px-5 py-3 ShopDetailsbg">
      <div className="row px-1 px-sm-1 px-md-5 px-lg-5">
        <div className="col-12  bg-white p-3 my-4">
          <span>Home / Shop / ShopDetails </span>
        </div>


        <div className="col-12 col-sm-12 col-md-5 col-lg-5 p-2">
              <Carousel >

                { 
                  products?.map((product, id) => {
                    return(
                      <Carousel.Item className="carousel bg-white">
                        <img key={id} className="img-fluid" src={product.image} alt={product.productName} />
                      </Carousel.Item>

                    )

                  })
                }

              </Carousel>
        </div>

        <div className="col-12 col-sm-12 col-md-7 col-lg-7 p-2">
          <div className="col-12 p-5 bg-white">
                <h3>
                  Product Name Goes Here
                </h3>

                <h5>
                  $150
                </h5>
                <p>
                  Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit 
                  clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no seaNonumy
                </p>

          </div>


        </div>




        <div className="col-12 ">
          <div className="row px-2">
            <div className="col-12 px-0">
              <h2>FEATURED PRODUCTS</h2>
            </div>
            <div className="col-12 ">
              <div className="row">
                {(products?.length ?? 0) >= 1
                  ? products.map((product, id) => {
                      return (
                        <div
                          key={id}
                          className="col-12 col-sm-12 col-md-3 col-lg-3 p-1  "
                        >
                          <div className="bg-white round">
                            <div className=" col-12 m-0 container_">
                              <div className="col-12">
                                <img
                                  src={product.image}
                                  alt="image"
                                  className="img-fluid img"
                                />
                              </div>
                              <div className="col-12 d-flex gap-2 justify-content-center align-items-center icons">
                                <HiShoppingCart
                                  className="productIcon"
                                  onClick={() => {
                                    basketDrop(product);
                                  }}
                                />
                                <AiOutlineHeart className="productIcon" />
                                <TfiReload className="productIcon" />
                                <HiMagnifyingGlass className="productIcon" />
                              </div>
                            </div>
                            <div className="d-flex py-3 flex-column justify-content-center align-items-center">
                              <h6>{product.productName}</h6>
                              <p>
                                {product.price} XFA
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : "No Product found"}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
