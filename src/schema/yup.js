import { object, ref, string } from "yup";

export const registerSchema = object().shape({
    name: string().trim().required("Saisissez votre nom"),
    email: string()
        .trim()
        .required("Saisissez votre adresse e-mail")
        .email(
            "Adresse e-mail incorrect ou invalide. Veuillez corriger avant de réessayer."
        ),
    password: string()
        .trim()
        .required("6 caractères minimum requis")
        .min(6, "6 caractères minimum requis"),
    passwordConfirmation: string()
        .trim()
        .required("Saisissez à nouveau votre mot de passe")
        .oneOf([ref("password")], "Les mots de passe ne correspondent pas"),
});

export const emailSchema = object().shape({
    email: string().trim().required("Saisissez votre adresse e-mail"),
});

export const passwordSchema = object().shape({
    password: string()
        .trim()
        .required("Entrez votre mot de passe")
        .min(6, "Entrez votre mot de passe"),
});
