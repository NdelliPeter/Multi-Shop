import React, { useEffect, useState } from "react";
import camera from "../assets/download.jpeg";
import girl from "../assets/girl.jpg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
//Dropdowns
import Carousel from "react-bootstrap/Carousel";
// Icons
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsCheckLg } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [products, setProducts] = useState();
  const [basket, setBasket] = useState();
  const [count, setCout] = useState(0)


  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        const respo = res.data;
        setProducts(respo);
        console.log(respo);
      })
      .catch((err) => console.log(err));    
  }, []);

  const basketDrop = (product) => {
    const drop = products.find(
      (productItem) =>
        products.indexOf(productItem) === products.indexOf(product)
    );
      window.location.reload(false)
    axios
      .post("http://localhost:4000/baskets", drop)
      .then((res) => {
        setBasket(drop)
        setCout(count + 1)
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('podvpfnvsdsnvsddcsd', product);
  };


  const navigate = useNavigate(1);

  const moveToNewPagePainting = () => {
    return( navigate("/painting")
    )};
  const moveToNewPageSculpture = () => {
    return( navigate("/sculpture")
    )};

  return (
    <>
      <div className="container-fluid py-5 justify-content-between homebg align-items">
        <div className="row justify-content-between homebg  ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 px-5">
            <div className="row">
              <Carousel className="col-12 col-sm-12 col-md-8 col-lg-8">
                <Carousel.Item className="carousel">
                  <img className="img-fluid slideImage" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuM3YbbYyz_SqA3hNiL9td-kYzunNmc8knA&usqp=CAU'} alt="women" />
                  <Carousel.Caption>
                    <h1>Sculptures</h1>
                    <p>
                      Lorem rebum magna amet lorem magna erat diam stet. Sadips
                      duo stet amet amet ndiam elitr ipsum diam
                    </p>
                    <button className=" px-2 py-1 slidebtn">Shop Now</button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel">
                  <img className="img-fluid slideImage" src={'https://i.etsystatic.com/29816960/r/il/7edd48/4074046958/il_fullxfull.4074046958_gpw3.jpg'} alt="kid" />
                  <Carousel.Caption className="">
                    <h1>Painting</h1>
                    <p>
                      Lorem rebum magna amet lorem magna erat diam stet. Sadips
                      duo stet amet amet ndiam elitr ipsum diam
                    </p>
                    <button className=" px-2 py-1 slidebtn">Shop Now</button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              <div className="col-12 col-sm-12 col-md-4 col-lg-4 d-flex flex-column align-items-between">
                <div className="col-12 yellow">
                  <div className="bgimage d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex align-items-center">
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

                <div className="col-12 mt-3 yellow">
                  <div className="bgimage d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex align-items-center">
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
            </div>
          </div>

          <div className="col-12 px-5">
            <div className="row py-5 ">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 py-2">
                <div className=" p-4 gap-2 d-flex justify-content-center bg-white align-items-center">
                  <BsCheckLg className="text-warning icon" />
                  <h4>Quality Product</h4>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-3 py-2">
                <div className="p-4 gap-2 d-flex justify-content-center bg-white align-items-center">
                  <FaShippingFast className="text-warning icon" />
                  <h4>
                    <b>Free Shipping</b>
                  </h4>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-3 py-2">
                <div className="p-4 gap-2 d-flex justify-content-center bg-white align-items-center">
                  <BiTransfer className="text-warning icon" />
                  <h4>
                    <b>14-Day Return</b>
                  </h4>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-3 py-2">
                <div className="p-4 gap-2 d-flex justify-content-center bg-white align-items-center">
                  <FaPhoneVolume className="text-warning icon" />
                  <h4>
                    <b>24/7 Suport</b>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-12 px-5">
            <div className="row align-items-center">
              <h2 className="col-12">CATEGORIES</h2>
              <div onClick={moveToNewPageSculpture} className="col-12 col-sm-12 col-md-6 col-lg-3 py-2">
                <div className="d-flex align-items-center gap-3 px-2 py-3 bg-white ">
                  <div className="catego-hieght">
                    <img className="img-fluid" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuM3YbbYyz_SqA3hNiL9td-kYzunNmc8knA&usqp=CAU'} alt="camera" />
                  </div>

                  <div className="">
                    <span>
                      <b>Sculptures</b>
                    </span>
                    <br />
                    {/* <span className="text-dark"> product</span> */}
                  </div>
                </div>
              </div>

              <div onClick={moveToNewPagePainting} className="col-12 col-sm-12 col-md-6 col-lg-3 py-2">
                <div className="d-flex align-items-center gap-3 px-2 py-3 bg-white ">
                  <div className="catego-hieght">
                    <img className="img-fluid" src={'https://i.etsystatic.com/29816960/r/il/7edd48/4074046958/il_fullxfull.4074046958_gpw3.jpg'} alt="camera" />
                  </div>

                  <div className="">
                    <span>
                      <b>Painting</b>
                    </span>
                    <br />
                    {/* <span className="text-dark"> product</span> */}
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-3 py-2">
                <div className="d-flex align-items-center gap-3 px-2 py-3 bg-white ">
                  <div className="catego-hieght">
                    <img className="img-fluid" src={girl} alt="camera" />
                  </div>

                  <div className="">
                    <span>
                      <b>Fabrics</b>
                    </span>
                    <br />
                    {/* <span className="text-dark">product</span> */}
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="col-12 px-5">
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
                                <h6>{product.name}</h6>
                                <p>
                                  {product.price} XFA{" "}
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

          <div className="col-12 px-5 py-5">
            <div className="row d-flex justify-content-between">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 my-2 yellow">
                <div className="bgimage d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex align-items-center">
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

              <div className="col-12 col-sm-12 col-md-12 col-lg-6 my-2 yellow">
                <div className="bgimage d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex align-items-center">
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
          </div>
          <div className="col-12 px-5 ">
            <div className="row d-flex justify-content-center align-items-center" >
            {/* <Carousel className="col-12 d-flex jus  tity-content-center align-items-center">
              <Carousel.Item className="logo col-3">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/golden-elegant-logo-with-frame_52683-13462.jpg?w=740&t=st=1680077796~exp=1680078396~hmac=3b1ad707d506d771ec315abf26634abcadb6cdafd1b4e8338a475b97d57b7b64"
                  alt="women"
                />
              </Carousel.Item>
              <Carousel.Item className="logo col-3">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/golden-elegant-logo-template_23-2148219501.jpg?w=740&t=st=1680077730~exp=1680078330~hmac=4a4bf1fe853707d0dbb134fcacadd24830239827d9dea15946e7a777d7cd7cfb"
                  alt="men"
                />
              </Carousel.Item>
              <Carousel.Item className="logo col-3">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/letter-k-logo-concept-your-royal-brand_1017-33266.jpg?w=740&t=st=1680077438~exp=1680078038~hmac=7132959350eac1babf0d33307f600eaf28e295eefd473c7151e05e74236614f4"
                  alt="kid"
                />
              </Carousel.Item>
              <Carousel.Item className="logo col-3">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/la-mode-logo_23-2147523555.jpg?w=740&t=st=1680077868~exp=1680078468~hmac=abdeeec657532616c25b53fecc4b6be84b1d4499e6bd8b3d6889ccb342c9e965"
                  alt="women"
                />
              </Carousel.Item>{" "}
              <Carousel.Item className="logo col-3">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/gradient-hair-salon-logo-template_23-2148881845.jpg?w=740&t=st=1680077894~exp=1680078494~hmac=1e2db30920003afd99bbd7cc9d1c69c5676cf8b99196b4659c1aaba1a6ddb6c9"
                  alt="women"
                />
              </Carousel.Item>{" "}
              <Carousel.Item className="logo col-3">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?w=740&t=st=1680077939~exp=1680078539~hmac=7ba69053f8a49532df9fa60846673c339e08039267551434ee6a32cac02187fe"
                  alt="women"
                />
              </Carousel.Item>{" "}
              <Carousel.Item className="logo col-3">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/golden-elegant-corporative-logo-template_23-2148214854.jpg?w=740&t=st=1680078401~exp=1680079001~hmac=bc326f374a1a695ce1b5d68d8ea80429d1e8f9482c7cf06ad8162506f91e3a72"
                  alt="women"
                />
              </Carousel.Item>{" "}
              <Carousel.Item className="logo col-3">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/hand-drawn-woman-logo-avatar_23-2148849507.jpg?w=740&t=st=1680078439~exp=1680079039~hmac=5c5e6213509abfbca3a31a3aef8aaf80c6a8ae704a6394a0b3ae202bf7f9a95e"
                  alt="women"
                />
              </Carousel.Item>{" "}
              <Carousel.Item className="logo col-3">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/flat-design-clothing-logo-template_23-2149489910.jpg?size=626&ext=jpg&uid=R61188314&ga=GA1.2.1329435010.1679413996&semt=ais"
                  alt="women"
                />
              </Carousel.Item>{" "}
              <Carousel.Item className="logo col-3">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/premium-vector/minimal-fashion-shop-logo_278222-2028.jpg?size=626&ext=jpg&uid=R61188314&ga=GA1.2.1329435010.1679413996&semt=ais"
                  alt="women"
                />
              </Carousel.Item>
            </Carousel> */}
            {/* <OwlCarousel
            className="owl-items"
            items="4"
            autoplay
            nav
            dots
            loop 
            >

            </OwlCarousel>
            <OwlCarousel className='owl-theme col-12' loop margin={10} nav>
              <div class='item'>
                  <img src="https://img.freepik.com/free-vector/gradient-hair-salon-logo-template_23-2148881845.jpg?w=740&t=st=1680077894~exp=1680078494~hmac=1e2db30920003afd99bbd7cc9d1c69c5676cf8b99196b4659c1aaba1a6ddb6c9" />
              </div>
              <div class='item'>
                  <img src="https://img.freepik.com/free-vector/gradient-hair-salon-logo-template_23-2148881845.jpg?w=740&t=st=1680077894~exp=1680078494~hmac=1e2db30920003afd99bbd7cc9d1c69c5676cf8b99196b4659c1aaba1a6ddb6c9" />
              </div>
              <div class='item'>
                  <img src="https://img.freepik.com/free-vector/gradient-hair-salon-logo-template_23-2148881845.jpg?w=740&t=st=1680077894~exp=1680078494~hmac=1e2db30920003afd99bbd7cc9d1c69c5676cf8b99196b4659c1aaba1a6ddb6c9" />
              </div>
              <div class='item'>
                  <img src="https://img.freepik.com/free-vector/gradient-hair-salon-logo-template_23-2148881845.jpg?w=740&t=st=1680077894~exp=1680078494~hmac=1e2db30920003afd99bbd7cc9d1c69c5676cf8b99196b4659c1aaba1a6ddb6c9" />
              </div>
       
            </OwlCarousel>; */}

            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
