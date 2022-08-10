import { getAuth } from "firebase/auth";
import { firebaseApp } from "../../firebase";

const VerifyEmailMessage = () => {
    const auth = getAuth(firebaseApp);
    const authEmail = auth.currentUser.email ?? "";

    return (
        <div className="w-full flex flex-col gap-4 p-10 border-[1px] border-secondary rounded animate-fadeIn">
            <h2 className="text-3xl text-center">{`Vérifier l'adresse e-mail`}</h2>
            <p>
                {`Veuillez valider votre email en cliquant sur le lien envoyé à votre addresse
                ${authEmail}`}
            </p>
        </div>
    );
};
export default VerifyEmailMessage;
