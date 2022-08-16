import action from "../../../assets/img/dvd/action.jpg";
import comedie from "../../../assets/img/dvd/comedie.jpg";
import horreur from "../../../assets/img/dvd/horreur.jpg";
import romance from "../../../assets/img/dvd/romance.jpg";

const CategorySection = () => {
    const dvds = [action, comedie, horreur, romance];

    const dvdsData = [
        {
            title: "Action",
            imgUrl: "../../../assets/img/dvd/action.jpg",
        },
        {
            title: "Comedie",
            imgUrl: "../../../assets/img/dvd/comedie.jpg",
        },
        {
            title: "Horreur",
            imgUrl: "../../../assets/img/dvd/horreur.jpg",
        },
        {
            title: "Romance",
            imgUrl: "../../../assets/img/dvd/romance.jpg",
        },
    ];

    return (
        <article className="w-full bg-white p-3">
            <h3 className="text-2xl">DVD</h3>
            <section className="w-full aspect-square grid grid-cols-2 grid-rows-2 gap-3 ">
                {dvdsData.map((elem, index) => (
                    <article
                        key={elem.title + index}
                        className="w-full h-full flex flex-col justify-between"
                    >
                        <div className="w-full h-full grid place-items-center">
                            <img
                                className="object-contain"
                                src={dvds[index]}
                                alt={elem.title}
                            />
                        </div>
                        <h3> {elem.title}</h3>
                    </article>
                ))}
            </section>
        </article>
    );
};
export default CategorySection;
