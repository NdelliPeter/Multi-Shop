import React from "react";
import camera from "../assets/download.jpeg";
import shoes from "../assets/images.jpg";
import man from "../assets/man.jpg";
import girl from "../assets/girl.jpg";
import kid from "../assets/kid.jpg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Dropdowns
// import Dropdown from "react-bootstrap/Dropdown";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import Carousel from "react-bootstrap/Carousel";
// Icons

import { BsCheckLg } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <>
      <div className="container-fluid row py-5 px-5 justify-content-between homebg gap-3 align-items">
        <div className="row justify-content-between homebg  ">
          <Carousel className="col-8">
            <Carousel.Item className="carousel">
              <img className="img-fluid" src={girl} alt="women" />
              <Carousel.Caption>
                <h1>Women Fashion</h1>
                <p>
                  Lorem rebum magna amet lorem magna erat diam stet. Sadips duo
                  stet amet amet ndiam elitr ipsum diam
                </p>
                <button className=" px-2 py-1 slidebtn">Shop Now</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel">
              <img className="img-fluid" src={man} alt="men" />
              <Carousel.Caption>
                <h1>Men Fashion</h1>
                <p>
                  Lorem rebum magna amet lorem magna erat diam stet. Sadips duo
                  stet amet amet ndiam elitr ipsum diam
                </p>
                <button className=" px-2 py-1 slidebtn">Shop Now</button>
              </Carousel.Caption>{" "}
            </Carousel.Item>
            <Carousel.Item className="carousel">
              <img className="img-fluid" src={kid} alt="kid" />
              <Carousel.Caption className="">
                <h1>Kids Fashion</h1>
                <p>
                  Lorem rebum magna amet lorem magna erat diam stet. Sadips duo
                  stet amet amet ndiam elitr ipsum diam
                </p>
                <button className=" px-2 py-1 slidebtn">Shop Now</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="col-4 d-flex flex-column align-items-between">
            <div className="col-12 yellow">
              <div className="bgimage d-flex flex-column justify-content-center align-items-center">
                <div className="content">
                  <h6>SAVE 20%</h6>
                  <h4>Special Offer</h4>
                  <button className="bg-warning py-2 px-3 yellowbtn">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 mt-3 yellow">
              <div className="bgimage d-flex flex-column justify-content-center align-items-center">
              <div className="content">
                  <h6>SAVE 20%</h6>
                  <h4>Special Offer</h4>
                  <button className="bg-warning py-2 px-3 yellowbtn">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-5 px-5 justify-content-around homebg gap-3 align-items">
          <div className="col-6 col-sm-6 col-md-2 col-lg-2 p-3 gap-2 d-flex bg-white align-items-center">
            <BsCheckLg className="text-warning icon" />
            <h6>Quality Product</h6>
          </div>

          <div className="col-6 col-sm-6 col-md-2 col-lg-2 p-3 gap-2 bg-white d-flex align-items-center">
            <FaShippingFast className="text-warning icon" />
            <h6>
              <b>Free Shipping</b>
            </h6>
          </div>

          <div className="col-6 col-sm-6 col-md-2 col-lg-2 p-3 gap-2 bg-white d-flex align-items-center">
            <BiTransfer className="text-warning icon" />
            <h6>
              <b>14-Day Return</b>
            </h6>
          </div>

          <div className="col-6 col-sm-6 col-md-2 col-lg-2 p-3 gap-2 bg-white d-flex align-items-center">
            <FaPhoneVolume className="text-warning icon" />
            <h6>
              <b>24/7 Suport</b>
            </h6>
          </div>
        </div>
      </div>

      <div className="container-fluid row px-5 homebg align-items-center">
        <div className="col-12">
          <h2>CATEGORIES</h2>
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 ">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="shoes" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3  gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3  gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3  gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3  gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid row px-5 homebg align-items-center">
        <div className="col-12">
          <h2>FEATURED PRODUCTS</h2>
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 ">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="shoes" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3  gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3  gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3  gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={camera} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3  gap-2 d-flex align-items-center">
          <div className="row align-items-center bg-white catego-hieght">
            <div className="col-4">
              <img className="img-fluid" src={shoes} alt="camera" />
            </div>

            <div className="col-7 p-3">
              <span>
                <b>Category Name</b>
              </span>
              <br />
              <span className="text-dark">100 product</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
