import { Link } from "react-router-dom";

const CategoryFullCard = ({ data }) => {
    return (
        <article className="w-full bg-white p-3 font-emberLight">
            <h3 className="text-xl">{data.title}</h3>
            <Link to="">
                <div className="w-full h-full grid place-items-center mt-2">
                    <img
                        className="w-full object-fit"
                        src={data.imgUrl}
                        alt={data.title}
                    />
                </div>
            </Link>
        </article>
    );
};
export default CategoryFullCard;
