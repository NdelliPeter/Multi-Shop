import axios from "axios";
import './ShopDetails.css';
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Carousel from "react-bootstrap/Carousel";
import Cookies from "js-cookie";


export default function ShopDetails() {
//  console.log('kjksdsvkhsdsbvkhkscbvkhcbvj', item);
  const [products,setProducts] = useState()
  const [count, setCout] = useState(0)
  const [basket, setBasket] = useState();
  const [item, setItem] = useState()
  const [bask, setBask] = useState([])


  console.log('kjhhhjvjgcdfdfdsfsg', item);

  const category = products?.filter((prod) => (prod.category === item?.category))

  useEffect(() => {
    axios
    .get("http://localhost:4000/products")
    .then((res) => {
      const respo = res.data;
      setProducts(respo);
      console.log(respo);
    })
    .catch((err) => console.log(err));

    const it = JSON.parse(localStorage.getItem('item'));
    setItem(it)

    
    const account = JSON.parse(localStorage.getItem('logIn user'));
    if(account){
    const email= account.email
    const local = localStorage.getItem(`${email}`) 
    setBask(local ? JSON.parse(local) : [])
    }
  },[])

  const basketDrop = (product) => {
  
    const cookies = Cookies.get('jwt')
    const account = JSON.parse(localStorage.getItem('logIn user'));
    // console.log(cookies, account);
 
    if(cookies && account !== undefined){
      const drop = products.find(
        (productItem) =>
          products.indexOf(productItem) === products.indexOf(product)
      );
      window.location.reload(false)
      const email= account.email
      const put = [drop, ...bask]
      console.log(put);
      setBask(put)
      localStorage.setItem(`${email}`,JSON.stringify(put))
      // setBask(drop)
     
      axios
      .post("http://localhost:4000/baskets", drop)
      .then((res) => {
        setBasket(drop)
        // localStorage.setItem(`${email}`, JSON.stringify(drop))
        // setCout(count + 1)
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      migrate("/signIn")
    }
  }

  const productDetail = (product) => {
    
    const item = products.find(
      (productItem) =>
        products.indexOf(productItem) === products.indexOf(product)
    );
    // console.log(item);
    localStorage.setItem('item', JSON.stringify(item))
    navigate("/shopDetails")
    
  }
  const navigate = useNavigate(1)

  const migrate = useNavigate(-1)

  return (
    <div className="container-fluid px-5 py-3 ShopDetailsbg">
      <div className="row px-1 px-sm-1  px-md-5 px-lg-5">
        <div className="col-12  bg-white p-3 my-4">
          <span>Home / Shop / Product Details </span>
        </div>


        <div className="col-12 col-sm-12 col-md-5 col-lg-5 px-0">
            <div className="detailImg bg-white">
              <img className="img-fluid itemImgae" src={item?.image} alt={item?.name} />
            </div>

        </div>

        <div className="col-12 col-sm-12 col-md-7 col-lg-7 px-0">
          <div className="col-12 p-5 detailImg bg-white">
                <h3>
                  {item?.name}
                </h3>

                <h5>
                  {item?.price} XFA
                </h5>
                <p>
                  Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit 
                  clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no seaNonumy
                </p>

                <div className="">

                </div>

          </div>


        </div>




        <div className="col-12 my-4">
          <div className="row px-0">
            <div className="col-12 px-0">
              <h2>CATEGORY PRODUCTS</h2>
            </div>
            <div className="col-12 ">
              <div className="row">
                {(category?.length ?? 0) >= 1
                  ? category.map((product, id) => {
                      return (
                        <div
                          key={id}
                          className="col-12 col-sm-12 col-md-3 col-lg-3 p-1  "
                        >
                          <div className="bg-white round">
                            <div className=" col-12 m-0 container_">
                              <div className="col-12">
                                <img
                                  src={product?.image}
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
                              <button 
                                onClick={()=>{productDetail(product)}}
                                className="col-12 border-0 bg-white d-flex py-3 flex-column justify-content-center align-items-center">
                                <h6>{product.name}</h6>
                                <p>
                                  {product.price} XFA{" "}
                                </p>
                              </button>
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
