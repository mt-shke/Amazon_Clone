import { Link } from "react-router-dom";
import UpdateUserdataForm from "./UpdateUserdataForm";

const UpdateUserdataPage = ({ user, fetchUserData }) => {
    return (
        <main className="w-full relative flex flex-col items-center bg-white">
            <section className="max-w-[960px] flex flex-col gap-4 items-start py-8">
                <div className="text-sm">
                    <Link to="/account">
                        <span>{`Votre compte > `}</span>
                    </Link>

                    <span className="text-orangedarker">
                        Modifier vos données
                    </span>
                </div>

                <h2 className="text-3xl">Mettre à jour vos données</h2>
                <UpdateUserdataForm user={user} fetchUserData={fetchUserData} />
                <hr className="w-full h-[1px] bg-bg-main border-none my-4" />
            </section>
        </main>
    );
};
export default UpdateUserdataPage;
