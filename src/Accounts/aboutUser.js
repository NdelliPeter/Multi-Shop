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


export default function AboutUser() {


    const [file, setFile] = useState([])



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
            <div className="col-12 bg-white px-4 py-3">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h2>Status</h2>
                        {/* User status */}
                        <div>{}</div>

                    </div>

 


                    <div className="col-12 py-2 d-flex gap-1 align-items-center">
                        <button className="border-0 py-2 px-3 bg-warning">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}