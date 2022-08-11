import AccountGrid from "./AccountGrid";
import SecondaryContent from "./SecondaryContent";

const AccountPage = () => {
    return (
        <main className="w-full relative flex flex-col items-center bg-white">
            <section className="max-w-[960px] flex flex-col gap-4 items-start py-8">
                <h2 className="text-3xl">Votre compte</h2>
                <AccountGrid />
                <hr className="w-full h-[1px] bg-bg-main border-none my-4" />
                <SecondaryContent />
            </section>
        </main>
    );
};
export default AccountPage;
