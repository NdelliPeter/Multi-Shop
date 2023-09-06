import Popup from "reactjs-popup";
import './edit.css';
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const EditSchema = yup.object().shape({
    fullname: yup
        .string()
        .trim("Please input cannot contain just spaces")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .required("Please input first name"),
    userName: yup
        .string()
        .max(10)
        .trim("Please input cannot contain just spaces")
        .required("Please input user name"),
    email: yup
        .string()
        .email("please input a valid email")
        .matches(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, "input a valid email")
        .required("email canot be empty"),
    // password: yup.string()
    //     .min(8)
    //     .max(12)
    //     .matches(passwordRules, { message: "Password should include uppercase, lowercase, special character and number" })
    //     .required("password cannot be empty"),
    // role: yup
    //     .string()
    //     .trim("Please input cannot contain just spaces")
    //     .require("Please input role")
});

export default function Edit(props) {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(EditSchema),
    });


    const editSubmit = () => {

    }


    return (props.trigger) ? (
        <div className="popup-container">
            <div className="row justify-content-between align-items-center popup-body">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <h2 className="col-11">Edit User</h2>
                    <div className="col-2 d-flex py-5 my-2 justify-content-center align-items-center">
                        <button
                            className="bg-danger text-white d-flex align-items-center p-2 quantitybtn"
                            onClick={() => {
                                props.setTrigger(false);
                            }}
                        >
                            <FaTimes />
                        </button>
                    </div>
                </div>

                <form
                    className="col-12"
                    onSubmit={handleSubmit(editSubmit)}
                >

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <label>FullName</label>
                            <input
                                className="col-12 p-1"
                                name="fullname"
                                // placeholder="African Painting"
                                type="string"
                                {...register("fullname")}
                            />
                            <span className="text-danger font-strong">
                                {errors.fullname?.message}
                            </span>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <label>Username</label>
                            <input
                                name="username"
                                className="col-12 p-1 "
                                {...register("username")}
                            />
                            <span className="text-danger font-strong">
                                {errors.username?.message}
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <label>Email</label>
                            <input
                                className="col-12 p-1"
                                name="email"
                                // placeholder="2000"
                                type="number"
                                {...register("email")}
                            />
                            <span className="text-danger font-strong">
                                {errors.email?.message}
                            </span>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <label>Role</label>
                            <input
                                className="col-12 p-1"
                                name="role"
                                type="string"
                                {...register("role")}
                            // onChange={handleChange}
                            />
                            <span className="text-danger font-strong">
                                {errors.role?.message}
                            </span>
                        </div>


                        <div className="col-12 py-2 d-flex justify-content-end gap-1 align-items-center"

                        >
                            <button className="border-0 py-2 px-3 bg-warning">
                                Submit
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    ) : '';
}