import { signOutFromApp } from "../../../firebase";
import AccountGrid from "./AccountGrid";
import SecondaryContent from "./SecondaryContent";
import SellerGrid from "./SellerGrid";

const AccountPage = ({ user, fetchUserData }) => {
    const disconnect = () => {
        signOutFromApp();
    };

    return (
        <main className="w-full bg-white relative flex flex-col items-center">
            <section className="md:max-w-[960px] flex flex-col gap-4 items-start px-2 py-8">
                <span onClick={disconnect}>{`Se déconnecter`}</span>
                <h2 className="text-3xl">Votre compte</h2>
                <AccountGrid />
                <hr className="w-full h-[1px] bg-bg-main border-none my-4" />
                <h2 className="text-3xl">Espace vendeur</h2>
                <SellerGrid />
                <hr className="w-full h-[1px] bg-bg-main border-none my-4" />
                <SecondaryContent />
            </section>
        </main>
    );
};
export default AccountPage;
