import { useRef } from "react";
import { useState } from "react";

const ProductCardDesktopGallery = ({ data }) => {
    const ref = useRef(null);
    const [currentImg, setCurrentImg] = useState(0);

    const handleImageWithDot = (index) => {
        if (currentImg === index) return;
        setCurrentImg((p) => index);
    };

    return (
        <section className="flex-auto min-w-[360px] flex flex-row items-start gap-1 mt-8 mt-4">
            <div className="flex flex-col justify-start h-full gap-2 ">
                {!!data.images.length &&
                    data.images.map((elem, index) => (
                        <div
                            className={`w-12 border-[1px] border-gray-400 ${
                                index === currentImg && "galleryBoxShadow"
                            }`}
                            onMouseOver={() => handleImageWithDot(index)}
                            key={index}
                        >
                            <img
                                src={elem}
                                alt={data.name}
                                className="object-contain w-full"
                            />
                        </div>
                    ))}
            </div>
            <div
                ref={ref}
                className={`w-full max-h-[400px] aspect-square grid place-items-center overflow-hidden`}
            >
                <SlideImg src={data.images[currentImg]} alt={data.name} />
            </div>
        </section>
    );
};

export default ProductCardDesktopGallery;

const SlideImg = ({ src, alt }) => {
    return (
        <img
            className={`w-full max-w-[400px] object-fill`}
            src={src}
            alt={alt}
        />
    );
};
