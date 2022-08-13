import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const AddNewAddressItem = () => {
    return (
        <Link to="/account/addresses/add-address">
            <article className="w-full aspect-square flex flex-col justify-center items-center gap-2 p-4 border-2 border-dashed border-secondary rounded-lg hover:bg-bg-mainlight hover:cursor-pointer">
                <IoMdAdd size={62} color="lightgrey" />
                <h3 className="text-2xl font-emberCondensed">
                    Ajouter une adresse
                </h3>
            </article>
        </Link>
    );
};

export default AddNewAddressItem;
