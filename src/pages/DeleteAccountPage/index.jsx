import { Link } from "react-router-dom";
import { RiAlertFill } from "react-icons/ri";
import DeleteAccountForm from "./DeleteAccountForm";
import { useState } from "react";
import DeleteAccountSuccessMessage from "./DeleteAccountSuccessMessage";

const DeleteAccountPage = () => {
    const [deleteMessage, setDeleteMessage] = useState(false);

    return (
        <main className="w-full relative flex flex-col items-center bg-white">
            <section className="max-w-[800px] flex flex-col gap-4 items-start py-8">
                <div className="text-sm">
                    <Link to="/account">
                        <span>{`Votre compte > `}</span>
                    </Link>

                    <span className="text-orangedarker">
                        Supprimer votre compte
                    </span>
                </div>

                <h2 className="text-3xl">Supprimer votre compte</h2>
                <div className="w-full bg-orangedarker rounded-lg">
                    <div className="flex flex-col items-start gap-4 p-6 my-[2px] mx-3 bg-white">
                        <div className="flex items-center gap-2">
                            <RiAlertFill size={24} color="orange" />
                            <h3 className="text-2xl font-emberCondensedBold">
                                La fermeture d'un compte est une action
                                définitive
                            </h3>
                        </div>

                        <p>
                            La fermeture d'un compte est une action définitive
                            Veuillez noter que la fermeture de compte est une
                            action permanente et qu'une fois votre compte fermé,
                            il ne sera plus disponible et ne pourra pas être
                            restauré. Si vous décidez ultérieurement de
                            recommencer à commander chez nous, ou si vous
                            souhaitez utiliser des produits et services
                            nécessitant un compte, vous devrez créer un nouveau
                            compte.
                        </p>
                    </div>
                </div>
                {!!deleteMessage && <DeleteAccountSuccessMessage />}

                <p className="mt-12 font-emberCondensedBold">
                    Veuillez confirmer votre email et mot de passe afin de
                    supprimer définitivement votre compte
                </p>

                <DeleteAccountForm setDeleteMessage={setDeleteMessage} />
            </section>
        </main>
    );
};
export default DeleteAccountPage;
