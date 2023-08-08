import axios from "axios";
import { useEffect, useState } from "react";





export default function Products() {

    const [accounts, setAccounts] = useState()

    useEffect(() => {
        axios.get("http://localhost:4000/accounts")
            .then((res) => {
                res.data
                setProducts(res.data)
            })
    },[])

    const deleteProduct = (productId) => {
        window.location.reload(false)
      axios.delete(`http://localhost:4000/products/${productId}`);
      setBasket(
        products.filter((product) => {
          return product.id !== productId;
        })    
      );
    };





    return (
        <div className="container-fluid">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row mx-1  d-flex py-3 align-items-center bg-dark text-white">
                    <h5 className="col-6 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
                        Products
                    </h5>
                    <h5 className="col-6 col-sm-6 col-md-2 col-lg-2 d-flex justify-content-center align-items-center">
                        Price
                    </h5>
                    <h5 className="col-5 col-sm-5 col-md-2 col-lg-2 d-flex justify-content-center align-items-center">
                        Quantity
                    </h5>
                    <h5 className="col-3 col-sm-3 col-md-2 col-lg-2 d-flex justify-content-center align-items-center">
                        Category
                    </h5>
                    <h5 className="col-2 d-flex justify-content-center align-items-center">
                        Remove
                    </h5>
                </div>
                {(accounts?.length ?? 0) >= 1
                    ? basket.map((product, id) => {
                        return (
                            <div
                                key={id}
                                className="col-12"
                            >
                                <div className="row my-3 py-3 mx-1 justify-content-between align-items-center bg-white">
                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 d-flex my-2 ps-lg-5 ps-sm-2 ps-2 justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center align-items-center">
                                        <img
                                            className="img-fluid col-2 photo"
                                            src={product?.image}
                                            alt={product?.name}
                                        />
                                        <h6> {product?.name}</h6>

                                    </div>
                                    <div className="col-6 col-sm-6 col-md-2 col-lg-2 d-flex my-2 justify-content-center align-items-center">
                                        {product?.price} XFA
                                    </div>
                                    <div className="col-5 col-sm-5 col-md-2 col-lg-2 d-flex my-2 justify-content-center align-items-center">
                                        {
                                            (product.user === 1000) ? 'User':
                                            (product.user === 2468) ? 'Vendor': 
                                            'Admin'
                                        }
                                    </div>
                                    <div className="col-3 col-sm-3 col-md-2 col-lg-2 d-flex my-2 justify-content-center align-items-center">
                                        {product?.category}
                                    </div>
                                    <div className="col-2 d-flex my-2 justify-content-center align-items-center">
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