import * as yup from 'yup';

const Schema = yup.object().shape({
    firstName:yup.string().required("Please input first name"),
    lastName:yup.string().required("Please input last name"),
    email: yup.string().email("please input a valid email").required("email canot be empty"),
    password: yup.string().required("password cannot be empty"),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export default function SignUpSchema () {
    return (
        Schema
    )
}