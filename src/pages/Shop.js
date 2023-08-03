import "./Shop.css";
import Dropdown from "react-bootstrap/Dropdown";
import { BiGridSmall } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { ImCheckboxUnchecked } from "react-icons/im";
import { BsCheckSquareFill } from "react-icons/bs"
import axios from "axios";
import LoadingSpinner from "../components/loading";
import { RingLoader } from 'react-spinners';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


export default function Shop() {
  const [products, setProducts] = useState();
  const [basket, setBasket] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [bask, setBask] = useState([])
  const [allPrice, setAllPrice] = useState(true)
  const [p1, setP1] = useState(false)
  const [p2, setP2] = useState(false)
  const [p3, setP3] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState()
  // Filter products


  const price1 = () => {
    const range = { min: 0, max: 5000 }
    if (p1 === true) {
      axios.get(`http://localhost:4000/filter`, { params: { range: range } })
        .then((res) => {
          res.data.map((prod)=>{
            const pro = [prod, filteredProducts]
            const local = localStorage.setItem('filteredProducts', JSON.stringify(pro))
            setFilteredProducts(local)
            console.log(local);
          })
        })
    } else {
      // setFilteredProducts(filteredProducts.filter((prod)=>(prod.price >= 0 && prod.price <= 5000)))
      // axios.get(`http://localhost:4000/filter`, { params: { range: range } })
      //   .then((res) => {
      //     // res.data.map((prod) => {
      //     //   if(prod) {
      //     //     setFilteredProducts(filteredProducts.filter((item) => (item.id !== prod.id)))
      //     //   }
      //     // })
      //     console.log(res.data);
      //   })
    }

  }
  const price2 = () => {
    const range = { min: 5001, max: 10000 }
    if (p2 === true) {
      axios.get(`http://localhost:4000/filter`, { params: { range: range } })
        .then((res) => {
            res.data.map((prod)=> {
            const pro = [prod, filteredProducts]
            const local = localStorage.setItem('filteredProducts', JSON.stringify(pro))
            setFilteredProducts(local)
            console.log(local);
          })
          console.log('I am here',res.data);
        })
    } else {

      // setFilteredProducts(filteredProducts.filter((prod)=>(prod.price >= 5001 && prod.price <= 10000)))
      axios.get(`http://localhost:4000/filter`, { params: { range: range } })
        .then((res) => {
          const respond =res.data
          // respond.map((prod) => {
          //   const p = localStorage.getItem('filteredProducts')
          //   const f = p.filter((item) => (item.id !== prod.id))
          //   console.log(f);
          //   // setFilteredProducts(f)
          // })
          console.log('i am here',respond);
        })
    }
  }

  // console.log('dscvnsvnksjdkncjksdnvsndvdv', filteredProducts);


  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        const respo = res.data;
        setProducts(respo);
        console.log(respo);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:4000/baskets")
      .then((res) => {
        const respo = res.data;
        setBasket(respo);
        console.log(respo);
      })
      .catch((err) => console.log(err));

    const account = JSON.parse(localStorage.getItem('logIn user'));
    const f = JSON.parse(localStorage.getItem('filteredProducts'));
    setFilteredProducts(f)
    const email = account?.email
    const local = localStorage.getItem(`${email}`)
    setBask(local ? JSON.parse(local) : [])
  }, [setFilteredProducts]);

  const basketDrop = (product) => {

    const cookies = Cookies.get('jwt')
    const account = JSON.parse(localStorage.getItem('logIn user'));
    // console.log(cookies, account);

    if (cookies && account !== undefined) {
      const drop = products.find(
        (productItem) =>
          products.indexOf(productItem) === products.indexOf(product)
      );
      window.location.reload(<RingLoader />)
      const email = account?.email
      const put = [drop, ...bask]
      console.log(put);
      setBask(put)
      localStorage.setItem(`${email}`, JSON.stringify(put))
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

  const migrate = useNavigate(-1)



  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState()
  useEffect(() => {
    setLoading(false)
    setTimeout(() => {
      setLoading(false)
    })
  }, 5000)


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

  return (
    <div className="container-fluid shopbg">
      <div className="row px-5">
        <div className="col-12 bg-white p-3 my-4">
          <span>Home / Shop / ShopList </span>
        </div>

        {/* Filter column */}
        <div className="col-3 d-none d-sm-none d-md-block d-lg-block px-0">
          <div>
            <h4 className="my-3">FILTER BY PRICE</h4>
            <div className="col-12 px-4 py-3 bg-white">
              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <button className="border-0 bg-transparent" onClick={() => { setAllPrice(!allPrice) }}>
                    {!allPrice ? <ImCheckboxUnchecked className='text-black' />
                      : <BsCheckSquareFill className="text-warning bg-black round" />
                    }
                  </button>
                  <span>All Price</span>
                </div>
                <small className="border px-1">{products?.length}</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <button className="border-0 bg-transparent" onClick={() => { price1(); setP1(!p1) }}>
                    {!p1 ? <ImCheckboxUnchecked className='text-black' />
                      : <BsCheckSquareFill className="text-warning bg-black round" />
                    }
                  </button>
                  <span>0 - 5000 XFA</span>
                </div>
                <small className="border px-1">150</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <button className="border-0 bg-transparent" onClick={() => { price2(); setP2(!p2) }}>
                    {!p2 ? <ImCheckboxUnchecked className='text-black' />
                      : <BsCheckSquareFill className="text-warning bg-black round" />
                    }
                  </button>
                  <span>5000-10000 XFA</span>
                </div>
                <small className="border px-1">295</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>2000-3000 XFA</span>
                </div>
                <small className="border px-1">246</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>3000-4000</span>
                </div>
                <small className="border px-1">145</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>4000-5000 XFA</span>
                </div>
                <small className="border px-1">168</small>
              </div>
            </div>
          </div>

          <div>
            <h4 className="my-3">FILTER BY COLOR</h4>
            <div className="col-12 px-4 py-3 bg-white">
              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" value={true} />
                  <span>All Color</span>
                </div>
                <small className="border px-1">1000</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>Black</span>
                </div>
                <small className="border px-1">150</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>White</span>
                </div>
                <small className="border px-1">295</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>Red</span>
                </div>
                <small className="border px-1">246</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>Blue</span>
                </div>
                <small className="border px-1">145</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>Green</span>
                </div>
                <small className="border px-1">168</small>
              </div>
            </div>
          </div>

          {/* <div>
            <h4 className="my-3">FILTER BY SIZE</h4>
            <div className="col-12 px-4 py-3 bg-white">
              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>All Size</span>
                </div>
                <small className="border px-1">1000</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>XS</span>
                </div>
                <small className="border px-1">150</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>S</span>
                </div>
                <small className="border px-1">295</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>M</span>
                </div>
                <small className="border px-1">246</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>L</span>
                </div>
                <small className="border px-1">145</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>XL</span>
                </div>
                <small className="border px-1">168</small>
              </div>
            </div> 
          </div> */}
        </div>

        {/* Products column */}
        <div className="col-12 col-sm-12 col-md-8 col-lg-9 px-0">
          <div className="row ps-2">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 my-3">
                <BiGridSmall className="bg-white icon" />
                {/* <GiHamburgerMenu className="bg-white icon" /> */}
              </div>

              {/* <div className="d-flex gap-2 my-3">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="sortBtn">
                    Sorting
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Latest</Dropdown.Item>
                    <Dropdown.Item href="#">Popularity</Dropdown.Item>
                    <Dropdown.Item href="#">Best Rating</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle variant="light" id="sortBtn">
                    Showing
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">10</Dropdown.Item>
                    <Dropdown.Item href="#">20</Dropdown.Item>
                    <Dropdown.Item href="#">30</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div> */}
            </div>

            {filteredProducts ?
              <div className="col-12 ">
                <div className="row align-items-center px-2">
                  {(filteredProducts?.length ?? 0) >= 1
                    ? filteredProducts.map((product, id) => {
                      return (
                        <div
                          key={id}
                          className="col-12 col-sm-12 col-md-6 col-lg-4 p-1  "
                        >
                          <div className="bg-white round shadow">
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
                                  disabled={isLoading}
                                />
                                <AiOutlineHeart className="productIcon" />
                                <TfiReload className="productIcon" />
                                <HiMagnifyingGlass className="productIcon" />
                              </div>
                            </div>
                            <button
                              onClick={() => { productDetail(product) }}
                              className="col-12 bg-white d-flex border-0 py-3 flex-column justify-content-center align-items-center">
                              <h6>{product.name}</h6>
                              <p>
                                {product.price} XFA{" "}
                                {/* <small className="text-though">$163.00</small> */}
                              </p>
                            </button>
                          </div>
                        </div>
                      );
                    })
                    : "No Product found"}
                </div>
              </div> :
              <div className="col-12 ">
                <div className="row align-items-center px-2">
                  {(products?.length ?? 0) >= 1
                    ? products.map((product, id) => {
                      return (
                        <div
                          key={id}
                          className="col-12 col-sm-12 col-md-6 col-lg-4 p-1  "
                        >
                          <div className="bg-white round shadow">
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
                                  disabled={isLoading}
                                />
                                <AiOutlineHeart className="productIcon" />
                                <TfiReload className="productIcon" />
                                <HiMagnifyingGlass className="productIcon" />
                              </div>
                            </div>
                            <button
                              onClick={() => { productDetail(product) }}
                              className="col-12 bg-white d-flex border-0 py-3 flex-column justify-content-center align-items-center">
                              <h6>{product.name}</h6>
                              <p>
                                {product.price} XFA{" "}
                                {/* <small className="text-though">$163.00</small> */}
                              </p>
                            </button>
                          </div>
                        </div>
                      );
                    })
                    : "No Product found"}
                </div>
              </div>
            }

            {/* {isLoading ? <LoadingSpinner /> :

 
            } */}
            {errorMessage && <div className="error">{errorMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
