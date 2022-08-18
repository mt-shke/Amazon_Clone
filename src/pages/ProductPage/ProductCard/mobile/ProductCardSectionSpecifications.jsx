import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const ProductCardSectionSpecifications = ({ data }) => {
    const productSpecs = Object.entries(data.specifications).map((elem) => ({
        key: elem[0],
        value: elem[1],
    }));

    return (
        <section className="bg-white">
            {productSpecs.map((item, index) =>
                index >= 1 ? (
                    <React.Fragment key={item.value + index}>
                        <hr className="h-[1px] w-full bg-bg-main" />
                        <Specs detail={item} data={data} />
                    </React.Fragment>
                ) : (
                    <Specs key={item.value + index} detail={item} data={data} />
                )
            )}
        </section>
    );
};

export default ProductCardSectionSpecifications;

const Specs = ({ detail, data }) => (
    <div className="p-3 flex items-center justify-end">
        <div className="flex flex-col w-full">
            <span>{detail.key + " :"}</span>
            <span className="font-emberBold">{detail.value}</span>
        </div>
        {detail.key === "couleur" && (
            <div className="w-10">
                <img src={data.images[0]} alt={data.title} />
            </div>
        )}
        <MdArrowDropDown className="inline mr-0" color="black" size={18} />
    </div>
);
