import { GrAlert } from "react-icons/gr";

const LoginPageModalError = () => {
    return (
        <div className="p-2 border-2 border-lightred rounded outline outline-[1px] outline-red">
            <div className="flex gap-2 mr-10">
                <div className="text-red p-2">
                    <GrAlert size={28} />
                </div>
                <div>
                    <h3 className="text-xl text-red">
                        Un problème est surevenu
                    </h3>
                    <p className="text-sm">
                        Impossible de trouver un compte correspondant à cette
                        addresse e-mail
                    </p>
                </div>
            </div>
        </div>
    );
};
export default LoginPageModalError;
