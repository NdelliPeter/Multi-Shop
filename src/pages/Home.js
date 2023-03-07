import React from "react";
import camera from "../assets/download.jpeg";
import shoes from "../assets/images.jpg";
import girl from "../assets/dmitry-vechorko-yXhJ_eQK0mE-unsplash.jpg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Dropdowns
import Dropdown from "react-bootstrap/Dropdown";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

// Icons 

import { BsCheckLg } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* <div>
            <CCarousel controls indicators>
              <CCarouselItem>
                <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>
              </CCarouselItem>
            </CCarousel>
          </div> */}

      <div className="container-fluid row py-5 px-5 justify-content-around bg-light gap-3 align-items">
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

      <div className="container-fluid row px-5 bg-light align-items-center">
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
              <img className="img-fluid" src={girl} alt="camera" />
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

        <div className="col-6 col-sm-6 col-md-3 col-lg-3  gap-2 d-flex align-items-center catego-hieght">
          <div className="">
            <img className="img-fluid" src={shoes} alt="camera" />
          </div>

          <div className="col-7">
            <span>
              <b>Category Name</b>
            </span>
            <br />
            <span className="text-dark">100 product</span>
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
