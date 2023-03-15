import './ShoppingCart.css'

import {BiPlusMedical} from 'react-icons/bi';
import {FaMinus} from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';


export default function ShoppingCart() {


  const increaseQuntity = ( ) => {

  }



  return (
    <div className="container-fluid px-5 py-3 bg-light">
      <div className="row px-5">
        <div className="col-12 bg-white p-3 my-4">
          <span>Home / Shop / Shopping Cart </span>
        </div>

        <div className="col-8">
          <div className="col-12">
            <div className="col-12 d-flex py-3 align-items-center bg-dark text-white">
              <h5 className="col-4 d-flex justify-content-center align-items-center">Products</h5>
              <h5 className="col-2 d-flex justify-content-center align-items-center">Price</h5>
              <h5 className="col-2 d-flex justify-content-center align-items-center">Quantity</h5>
              <h5 className="col-2 d-flex justify-content-center align-items-center">Total</h5>
              <h5 className="col-2 d-flex justify-content-center align-items-center">Remove</h5>
            </div>

            <div className="col-12 d-flex my-3 py-3 align-items-center bg-white ">
              <div className="col-4 d-flex justify-content-center align-items-center">
                Products</div>
              <div className="col-2 d-flex justify-content-center align-items-center">
                $150</div>
              <div className="col-2 d-flex justify-content-center align-items-center">
                <button className='bg-warning d-flex align-items-center p-2 quantitybtn'><BiPlusMedical /></button>
                <span className='px-2'>{}</span>
                <button className='bg-warning d-flex align-items-center p-2 quantitybtn'><FaMinus /></button>
                </div>
              <div className="col-2 d-flex justify-content-center align-items-center">
                $150</div>
              <div className="col-2 d-flex justify-content-center align-items-center">
                <button className='bg-danger text-white d-flex align-items-center p-2 quantitybtn'><FaTimes /></button></div>
            </div>
            
          </div>
        </div>
          <div className="col-4">

          </div>
      </div>
    </div>
  );
}
