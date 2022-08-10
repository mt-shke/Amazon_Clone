import { GrAlert } from "react-icons/gr";

const LoginPageModalError = ({ errorType }) => {
    let errorMessage =
        "Impossible de trouver un compte correspondant à cette addresse e-mail";

    if (errorType === "password") {
        errorMessage = "Votre mot de passe est incorrect";
    }

    return (
        <div className="w-full p-2 border-2 border-lightred rounded outline outline-[1px] outline-red">
            <div className="flex gap-2 mr-10">
                <div className="text-red p-2">
                    <GrAlert size={28} />
                </div>
                <div>
                    <h3 className="text-xl text-red">
                        Un problème est surevenu
                    </h3>
                    <p className="text-sm">{errorMessage}</p>
                </div>
            </div>
        </div>
    );
};
export default LoginPageModalError;
