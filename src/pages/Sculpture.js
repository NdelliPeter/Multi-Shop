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

export default function Sculpture() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState();
  const [bask, setBask] = useState([])


  const sculpture = products?.filter((prod) => (prod.category === 'sculpture'))
  // const sculpture = products?.map((prod) => {
  //   if (prod.category === 'sculpture') {
  //     return (prod)
  //   }
  // })

  console.log('poijfkdfndlfkndflknfd', sculpture);

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
      const email= account.email
      const local = localStorage.getItem(`${email}`) 
      setBask(local ? JSON.parse(local) : [])
  }, []);

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

  const migrate = useNavigate(-1)

  return (
    <div className="container-fluid shopbg">
      <div className="row px-5">
        <div className="col-12 bg-white p-3 my-4">
          <span>Home / Shop / Category / Sculpture</span>
        </div>

        {/* Filter column */}
        <div className="col-3 d-none d-sm-none d-md-block d-lg-block px-0">
        <div>
            <h4 className="my-3">FILTER BY PRICE</h4>
            <div className="col-12 px-4 py-3 bg-white">
              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" value="true" />
                  <span>All Price</span>
                </div>
                <small className="border px-1">1000</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>0 - 1000 XFA</span>
                </div>
                <small className="border px-1">150</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>1000-2000 XFA</span>
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
          </div>
        </div>

        {/* Products column */}
        <div className="col-12 col-sm-12 col-md-8 col-lg-9 px-0">
          <div className="row ps-2">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 my-3">
                <BiGridSmall className="bg-white icon" />
                <GiHamburgerMenu className="bg-white icon" />
              </div>

              <div className="d-flex gap-2 my-3">
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
              </div>
            </div>

            <div className="col-12 ">
                <div className="row align-items-center px-2">
                  {(sculpture?.length ?? 0) >= 1
                    ? sculpture?.map((product, id) => {
                      

                        return (
                          <div
                            key={id}
                            className="col-12 col-sm-12 col-md-6 col-lg-4 p-1  "
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
                              <div className="d-flex py-3 flex-column justify-content-center align-items-center">
                                <h6>{product?.name}</h6>
                                <p>
                                  {product?.price} XFA{" "}
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
