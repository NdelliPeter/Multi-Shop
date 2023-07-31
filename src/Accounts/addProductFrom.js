import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";







const addProductSchema = yup.object().shape({
    name: yup
        .string()
        .trim("Input a valid first name")
        .required("first name can not be empty"),
    image: yup
        .string()
        .trim("Input a valid last name")
        .required("last name can not be empty"),
    category: yup
        .string()
        .trim("Input a valid last name")
        .required("category canot be empty"),
    price: yup
        .number()
        .required('Price should be field')
});


export default function AddProduct() {


    const [file, setFile] = useState([])


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addProductSchema),
    });

    const addProduct = (data) => {


        axios.post("http://localhost:4000/products", data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files))
    }

    function func() {
        function ff(s) {
            var pt = (Math.random() + "00").substr(2, 2);
            return pt;
        }
        return ff() + ff(true) + ff(true) + ff();
    }
    const id = func()

    const SubmitProduct = (data) => {
        data.id = id;
        // data.image = URL.createObjectURL(data.image)
        // addProduct(data);
        // var reader = new FileReader();
        // reader.readAsDataURL(data.image);
        // reader.onloadend = function () {
        //     var base64data = reader.result;
        //     console.log(base64data);
        // }
        const fileToBlob = async (file) => new Blob([new Uint8Array(await file.arrayBuffer())], {type: file.type });
        const n = fileToBlob(data.image)
        console.log(n);
        const a = {
            id: id,
            name: data.name,
            category: data.category,
            price: data.price,
            image: data.image
        }
        console.log(data.image[0]);
        // reset();
    };

    return (
        <div className="container-fluid">
            <form
                className="col-12 bg-white px-4 py-3"
                onSubmit={handleSubmit(SubmitProduct)}
            >
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>name</label>
                        <input
                            className="col-12 my-2 p-2"
                            name="name"
                            placeholder="John"
                            type="sring"
                            {...register("name")}
                        />
                        <span className="text-danger font-strong">
                            {errors.name?.message}
                        </span>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>Category</label>
                        <select
                            name="role"
                            className="col-12 p-2 my-2"
                            {...register("category")}
                        >
                            <option value="painting">painting</option>
                            <option value="sculpture">sculpture</option>
                            <option value="fonature">furniture</option>
                            <option value="fabric">fabric</option>
                            <option value="beats">beats</option>
                        </select>
                        <span className="text-danger font-strong">
                            {errors.category?.message}
                        </span>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>Price</label>
                        <input
                            className="col-12 my-2 p-2"
                            name="price"
                            placeholder="2000"
                            type="number"
                            {...register("price")}
                        />
                        <span className="text-danger font-strong">
                            {errors.image?.message}
                        </span>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>image</label>
                        <input
                            className="col-12 my-2 p-2"
                            name="image"
                            placeholder="Doe"
                            type="file"
                            {...register("image")}
                        // onChange={handleChange}
                        />
                        <span className="text-danger font-strong">
                            {errors.image?.message}
                        </span>
                    </div>


                    <div className="col-12 py-2 d-flex gap-1 align-items-center"

                    >
                        <button className="border-0 py-2 px-3 bg-warning">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}