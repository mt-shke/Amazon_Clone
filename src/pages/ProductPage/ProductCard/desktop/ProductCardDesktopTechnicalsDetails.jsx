import { v4 as uuidv4 } from "uuid";

const ProductCardDesktopTechnicalsDetails = ({ data }) => {
    const detailsArray = Object.entries(data.details.technicalsDetails).map(
        (elem) => ({ key: elem[0], value: elem[1] })
    );
    const firstPart = detailsArray.filter(
        (elem, index) => index < (detailsArray.length - 1) / 2
    );
    const secondPart = detailsArray.filter(
        (elem, index) => index >= (detailsArray.length - 1) / 2
    );

    return (
        <section className="my-8">
            <h2 className="text-4xl font-ember text-center my-6">
                Détails techniques
            </h2>
            <h3 className="text-3xl font-emberCondensed text-center my-2">
                {data.name}
            </h3>

            <div className="flex flex-row gap-6 ">
                <div className="h-fit flex flex-1 flex-col border-[1px] border-bg-main">
                    {firstPart.map((item, index) => (
                        <div
                            key={uuidv4()}
                            className={`${
                                index % 2 === 0 ? "" : "bg-bg-main"
                            } flex w-full border-b-[1px] `}
                        >
                            <div className="w-2/6 px-4 py-2 capitalize font-emberCondensedBold">
                                {item.key}
                            </div>
                            <div className="w-4/6 px-4 py-2">{item.value}</div>
                        </div>
                    ))}
                </div>
                <div className="h-fit flex flex-1 flex-col border-[1px] border-bg-main">
                    {secondPart.map((item, index) => (
                        <div
                            key={uuidv4()}
                            className={`${
                                index % 2 === 0 ? "" : "bg-bg-main"
                            } flex w-full border-b-[1px] border-bg-main`}
                        >
                            <div className="w-2/6 px-4 py-2 capitalize font-emberCondensedBold">
                                {item.key}
                            </div>
                            <div className="w-4/6 px-4 py-2">{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ProductCardDesktopTechnicalsDetails;
