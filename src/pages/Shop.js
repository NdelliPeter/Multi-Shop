import "./Shop.css";
import Dropdown from 'react-bootstrap/Dropdown'
import { BiGridSmall } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import {HiShoppingCart} from "react-icons/hi";
import {AiOutlineHeart} from "react-icons/ai";
import {TfiReload} from "react-icons/tfi";
import {HiMagnifyingGlass} from "react-icons/hi2";

export default function Shop() {
  return (
    <div className="container-fluid px-5 py-3 shopbg">
      <div className="row px-5">
        <div className="col-12 bg-white p-3 my-4">
          <span>Home / Shop / ShopList </span>
        </div>

        {/* Filter collum */}
        <div className="col-3">
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
                  <span>$0 - $100</span>
                </div>
                <small className="border px-1">150</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>$100-200</span>
                </div>
                <small className="border px-1">295</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>$200-300</span>
                </div>
                <small className="border px-1">246</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>$300-400</span>
                </div>
                <small className="border px-1">145</small>
              </div>

              <div className="d-flex my-2 justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <input type="checkbox" />
                  <span>$400-500</span>
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

        <div className="col-9">
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
                  <Dropdown.Item href="#">
                    Latest
                  </Dropdown.Item>
                  <Dropdown.Item href="#">Popularity</Dropdown.Item>
                  <Dropdown.Item href="#">Best Rating</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown> 
                <Dropdown.Toggle variant="light" id="sortBtn">
                  Showing
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    10
                  </Dropdown.Item>
                  <Dropdown.Item href="#">20</Dropdown.Item>
                  <Dropdown.Item href="#">30</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-4 bg-white rounded">
                <div className="p-5">
                  <div className="d-flex gap-2 justify-content-center align-items-center">
                    <HiShoppingCart className="productIcon" />
                    <AiOutlineHeart className="productIcon" />
                    <TfiReload className="productIcon" />
                    <HiMagnifyingGlass className="productIcon" />
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h6>Product Name Goes Here</h6>
                  <p>$123.00 <small className="text-though">$123.00</small></p>
                </div>
              </div> 
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
