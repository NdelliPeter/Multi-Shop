import * as yup from 'yup';

export default function SignUpSchema() {
    const Schema = yup.object().shape({
        firstName: yup.string().required("Please input first name"),
        lastName: yup.string().required("Please input last name"),
        email: yup.string().email("please input a valid email").required("email canot be empty"),
        password: yup.string().min(4).max(15).required("password cannot be empty"),
        confirmPassword: yup.string().required().oneOf([yup.ref('password'), "password should match"])
    })
    return (
        Schema
    )
}

