import { HiOutlineLocationMarker } from "react-icons/hi";

const DeliveryAddress = ({ user }) => {
    return (
        <div className="w-full h-10 flex sm:flex md:hidden items-center gap-1 bg-bg-gray p-1">
            <HiOutlineLocationMarker
                color="white"
                size={20}
                className="h-full aspect-square"
            />
            <span>
                Votre adresse de livraison:{" "}
                {`
                ${user ? user?.defaultAddress.city : "France"}`}
            </span>
        </div>
    );
};
export default DeliveryAddress;
