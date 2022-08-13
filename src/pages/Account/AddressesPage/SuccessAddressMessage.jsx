import { AiFillCheckCircle } from "react-icons/ai";

const SuccessAddressMessage = () => {
    return (
        <div className="w-full bg-green-700 rounded-lg">
            <div className="flex flex-row items-center gap-2 p-6 my-[2px] mx-3 bg-white">
                <AiFillCheckCircle size={32} color="green" />
                <h3 className="text-xl font-emberCondensedBold">
                    Adresse enregistrée
                </h3>
            </div>
        </div>
    );
};
export default SuccessAddressMessage;
