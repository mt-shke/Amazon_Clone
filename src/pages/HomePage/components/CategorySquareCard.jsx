import { Link } from "react-router-dom";

const CategorySquareCard = ({ data }) => {
    return (
        <article className="w-full bg-white p-3 font-emberLight">
            <h3 className="text-xl">{data.title}</h3>
            <section className="w-full grid grid-cols-2 grid-rows-2 gap-3 mt-2">
                {data.data.map((elem, index) => (
                    <Link to="" key={elem.title + index}>
                        <article className="w-full h-full flex flex-col justify-between">
                            <div className="w-full h-full grid place-items-center">
                                <img
                                    className="w-full object-fit"
                                    src={elem.imgUrl}
                                    alt={elem.title}
                                />
                            </div>
                            <h3> {elem.title}</h3>
                        </article>
                    </Link>
                ))}
            </section>
            <Link to={data.category ?? ""}>
                <span className="text-blue  mt-3 inline-block">
                    En savoir plus
                </span>
            </Link>
        </article>
    );
};
export default CategorySquareCard;
