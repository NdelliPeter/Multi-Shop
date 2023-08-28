import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import Popup from 'reactjs-popup';
import Edit from "./edit";




export default function Users() {

    const [accounts, setAccounts] = useState();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:4000/accounts")
            .then((res) => {
                // console.log(res.data);
                setAccounts(res.data)
            })
    }, [])

    const deleteProduct = (productId) => {
        window.location.reload(false)
        axios.delete(`http://localhost:4000/products/${productId}`);
        //   setBasket(
        //     products.filter((product) => {
        //       return product.id !== productId;
        //     })    
        //   ); 
    };

    // }
    const editProduct = () => (
        <Edit />

    );


    return (
        <div className="container-fluid">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row mx-1  d-flex py-3 align-items-center bg-dark text-white">
                    <h5 className="col-6 col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center align-items-center">
                        Name
                    </h5>
                    <h5 className="col-6 col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center align-items-center">
                        Email
                    </h5>
                    <h5 className="col-6 col-sm-6 col-md-2 col-lg-2 d-flex justify-content-center align-items-center">
                        Username
                    </h5>
                    <h5 className="col-5 col-sm-5 col-md-2 col-lg-2 d-flex justify-content-center align-items-center">
                        Role
                    </h5>
                    <h5 className="col-3 col-sm-3 col-md-1 col-lg-1 d-flex justify-content-center align-items-center">
                        Edit
                    </h5>
                    <h5 className="col-1 d-flex justify-content-center align-items-center">
                        Remove
                    </h5>
                </div>
                {(accounts?.length ?? 0) >= 1
                    ? accounts.map((product, id) => {
                        return (
                            <div
                                key={id}
                                className="col-12"
                            >
                                <div className="row my-3 py-3 mx-1 justify-content-between align-items-center bg-white">
                                    <div className="col-6 col-sm-6 col-md-3 col-lg-3 d-flex my-2 ps-lg-5 ps-sm-2 ps-2 justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center align-items-center">
                                        {product?.fullname}

                                    </div>
                                    <div className="col-6 col-sm-6 col-md-3 col-lg-3 d-flex my-2 justify-content-center align-items-center">
                                        {product?.email}
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-2 col-lg-2 d-flex my-2 justify-content-center align-items-center">
                                        {product?.username}
                                    </div>
                                    <div className="col-5 col-sm-5 col-md-2 col-lg-2 d-flex my-2 justify-content-center align-items-center">
                                        {
                                            (product.role === 1000) ? 'User' :
                                                (product.role === 2468) ? 'Vendor' :
                                                    'Admin'
                                        }
                                    </div>
                                    <div className="col-3 col-sm-3 col-md-1 col-lg-1 d-flex my-2 justify-content-center align-items-center">
                                        <button
                                            className="bg-primary text-white d-flex align-items-center p-2 quantitybtn"
                                            onClick={() => {
                                                editProduct(product?.id);
                                                setOpen(true)
                                            }}
                                        >
                                            <FiEdit3 />
                                        </button>
                                        <Edit trigger={open} setTrigger={setOpen} />                                

                                    </div>
                                    <div className="col-1 d-flex my-2 justify-content-center align-items-center">
                                        <button
                                            className="bg-danger text-white d-flex align-items-center p-2 quantitybtn"
                                            onClick={() => {
                                                deleteProduct(product?.id);
                                            }}
                                        >
                                            <FaTimes />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        );
                    })
                    : <div className="col-12 my-3 p-3 mx-1 d-flex  bg-white">
                        <div >Add Products to Cart</div>

                        <div>
                            <NavLink to="/shop" className="bg-warning border-0 shop py-1 px-2 text-black mx-3" >
                                Shop
                            </NavLink>
                        </div>

                    </div>}
            </div>
        </div>

    )
}