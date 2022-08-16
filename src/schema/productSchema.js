import { boolean, object, string } from "yup";

export const addProductSchema = object().shape({
    title: string().trim().required("Saisissez le titre de votre produit"),
    title: string().trim().required("Saisissez le titre de votre produit"),
    street: string().trim().required("Saisissez votre adresse"),
    streetBis: string().trim(),
    city: string().trim().required("Saisissez votre ville"),
});
