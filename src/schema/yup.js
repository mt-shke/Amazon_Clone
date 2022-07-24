import { object, ref, string } from "yup";

const space = " ";

export const registerSchema = object().shape({
    name: string()
        .trim()
        .required("Please enter your firstname and lastname")
        .min(2, "This field is required")
        .max(60, "Name is too long")
        .test(
            "contains-firstname-and-lastname",
            ((value) => space.includes(value.trim())) &&
                "Please enter your firstname and lastname",
            (value) => value.length > 2
        ),
    email: string()
        .trim()
        .required("Email is required")
        .min(6, "Email is invalid")
        .max(60, "Email is too long")
        .email("Email is invalid"),
    password: string()
        .trim()
        .required("Password is required")
        .min(6, "Password is too small")
        .max(40, "Password is too long"),
    passwordConfirmation: string()
        .trim()
        .required("Password confirmation is missing")
        .oneOf([ref("password")], "The passwords do not match"),
});
