import "./Shop.css";
import Dropdown from "react-bootstrap/Dropdown";
import { BiGridSmall } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Painting() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState();
  const [count, setCout] = useState(0)
  const [bask, setBask] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])



  const price1 = (e) => {
    const range = { min: 0, max: 10000 }
    if (e.target.checked) {
      axios.get(`http://localhost:4000/filter/painting`, { params: { range: range } })
        .then((res) => {
          setFilteredProducts(res.data)
          console.log(res.data);
        })
    } else {
      setFilteredProducts([])
    }
  }

  const price2 = (e) => {
    const range = { min: 10001, max: 20000 }
    if (e.target.checked) {
      axios.get(`http://localhost:4000/filter/painting`, { params: { range: range } })
        .then((res) => {
          setFilteredProducts(res.data)
          console.log('I am here', res.data);
        })
    } else {
      setFilteredProducts([])
    }
  }
  const price3 = (e) => {
    const range = { min: 20001, max: 30000 }
    if (e.target.checked) {
      axios.get(`http://localhost:4000/filter/painting`, { params: { range: range } })
        .then((res) => {
          setFilteredProducts(res.data)
          console.log('I am here', res.data);
        })
    } else {
      setFilteredProducts([])
    }
  }
  const price4 = (e) => {
    const range = { min: 30001, max: 40000 }
    if (e.target.checked) {
      axios.get(`http://localhost:4000/filter/painting`, { params: { range: range } })
        .then((res) => {
          setFilteredProducts(res.data)
          console.log('I am here', res.data);
        })
    } else {
      setFilteredProducts([])
    }
  }
  const price5 = (e) => {
    const range = { min: 40001, max: 50000 }
    if (e.target.checked) {
      axios.get(`http://localhost:4000/filter/painting`, { params: { range: range } })
        .then((res) => {
          setFilteredProducts(res.data)
          console.log('I am here', res.data);
        })
    } else {
      setFilteredProducts([])
    }
  }

  const painting = products?.filter((prod) => (prod.category === 'painting'))


  console.log('poijfkdfndlfkndflknfd', painting);

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
    const email = account?.email
    const local = localStorage.getItem(`${email}`)
    setBask(local ? JSON.parse(local) : [])
  }, []);

  const basketDrop = (product) => {

    const cookies = Cookies.get('jwt')
    const account = JSON.parse(localStorage.getItem('logIn user'));
    // console.log(cookies, account);

    if (cookies && account !== undefined) {
      const drop = products.find(
        (productItem) =>
          products.indexOf(productItem) === products.indexOf(product)
      );
      window.location.reload(false)
      const email = account.email
      basket.find((prod)=>prod.id === drop.id)
      if (basket.id !== drop.id) {
        axios
          .post("http://localhost:4000/baskets", drop)
          .then((res) => {
            const put = [drop, ...basket]
            setBasket(put)
            localStorage.setItem(`${email}`, JSON.stringify(put))
            setCout(count + 1)
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
      }else {
        console.log('Product already exsist');
      }

    } else {
      migrate("/signIn")
    }

    // console.log('podvpfnvsdsnvsddcsd', product);
  };

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
    <div className="container-fluid shopbg">
      <div className="row px-5">
        <div className="col-12 bg-white p-3 my-4">
          <span>Home / Shop / Category / Painting</span>
        </div>

        {/* Filter column */}
        <div className="col-3 d-none d-sm-none d-md-block d-lg-block px-0">
          <div>
            <h4 className="my-3">FILTER BY PRICE</h4>
            <div className="col-12 px-4 py-3 bg-white">
              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input className="text-warning" id="p1" type="checkbox" onClick={price1} />
                  <span>0 - 10000 XFA</span>
                </div>
                {/* <small className="border px-1">150</small> */}
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" id="p2" onChange={price2} />
                  <span>10001-20000 XFA</span>
                </div>
                {/* <small className="border px-1">295</small> */}
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" onChange={price3} />
                  <span>20001-30000 XFA</span>
                </div>
                {/* <small className="border px-1">246</small> */}
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" onChange={price4} />
                  <span>30001-40000 XFA</span>
                </div>
                {/* <small className="border px-1">145</small> */}
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" onChange={price5} />
                  <span>40001-50000 XFA</span>
                </div>
                {/* <small className="border px-1">168</small> */}
              </div>
            </div>
          </div>

          {/* <div>
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

          <div>
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

            <div className="col-12 ">
              {
                (filteredProducts?.length >= 1) ?
                  <div className="row align-items-center px-2">
                    {(filteredProducts?.length ?? 0) >= 1
                      ? filteredProducts?.map((product, id) => {


                        return (
                          <div
                            key={id}
                            className="col-12 col-sm-12 col-md-6 col-lg-4 p-1  "
                          >
                            <div className="bg-white round shadow">
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
                                onClick={() => { productDetail(product) }}
                                className="col-12 border-0 bg-white d-flex py-3 flex-column justify-content-center align-items-center">
                                <h6>{product?.name}</h6>
                                <p>
                                  {product?.price} XFA{" "}
                                </p>
                              </button>
                            </div>
                          </div>
                        );
                      })
                      : "No Product found"}
                  </div> :
                  <div className="row align-items-center px-2">
                    {(painting?.length ?? 0) >= 1
                      ? painting?.map((product, id) => {


                        return (
                          <div
                            key={id}
                            className="col-12 col-sm-12 col-md-6 col-lg-4 p-1  "
                          >
                            <div className="bg-white round shadow">
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
                                onClick={() => { productDetail(product) }}
                                className="col-12 border-0 bg-white d-flex py-3 flex-column justify-content-center align-items-center">
                                <h6>{product?.name}</h6>
                                <p>
                                  {product?.price} XFA{" "}
                                </p>
                              </button>
                            </div>
                          </div>
                        );
                      })
                      : "No Product found"}
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
