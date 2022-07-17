import { HiOutlineLocationMarker } from "react-icons/hi";

const HeaderAddress = () => {
    return (
        <div className="flex items-end gap-1 flex-none">
            <HiOutlineLocationMarker color="white" size={20} className="h-10" />
            <div className="flex flex-col justify-center">
                <span className="font-emberl text-xs text-secondary">
                    Bonjour
                </span>
                <span className="font-emberb text-sm whitespace-nowrap">
                    Entrez votre adresse
                </span>
            </div>
        </div>
    );
};
export default HeaderAddress;
