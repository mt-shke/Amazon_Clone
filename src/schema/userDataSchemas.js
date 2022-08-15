import { boolean, object, string } from "yup";
import { userAddressCountries } from "../data";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const addressSchema = object().shape({
    fullname: string().trim().required("Saisissez votre nom"),
    phoneNumber: string().matches(phoneRegExp, "Phone number is not valid"),
    country: string()
        .trim()
        .required("Saisissez le pays de destination")
        .oneOf(userAddressCountries, "Saisissez le pays de destination"),
    street: string().trim().required("Saisissez votre adresse"),
    streetBis: string().trim(),
    zipCode: string()
        .trim()
        .required()
        .matches(/^[0-9]+$/, "Code postal incorrect")
        .min(5, "Code postal incorrect")
        .max(5, "Code postal incorrect"),
    city: string().trim().required("Saisissez votre ville"),
    defaultAddress: boolean().default(false),
});

export const userDataSchema = object().shape({
    firstname: string().trim().required("Saisissez votre prénom"),
    lastname: string().trim().required("Saisissez votre nom"),
    email: string().trim().email("Saisissez un email valide"),
    profilPicture: string().trim(),
});
