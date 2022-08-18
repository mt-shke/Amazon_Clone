import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const ProductCardGallery = ({ data }) => {
    const ref = useRef(null);
    const [currentImg, setCurrentImg] = useState(0);
    const [slideDirection, setSlideDirection] = useState("");

    let touchStart;
    const handleTouchStart = (e) => {
        touchStart = e.changedTouches[0].pageX;
    };

    const handleTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].pageX;
        const swipeDistance = touchEnd - touchStart;
        if (swipeDistance >= 150) {
            setCurrentImg((p) => (p === 0 ? data.images.length - 1 : p - 1));
            setSlideDirection((p) => "left");
            setTimeout(() => {
                setSlideDirection("");
            }, 300);
        }
        if (swipeDistance <= -150) {
            setCurrentImg((p) => (p === data.images.length - 1 ? 0 : p + 1));
            setSlideDirection((p) => "right");
            setTimeout(() => {
                setSlideDirection("");
            }, 300);
        }
    };

    useEffect(() => {
        const containerRef = ref.current;
        containerRef.addEventListener("touchstart", handleTouchStart);
        containerRef.addEventListener("touchend", handleTouchEnd);
        return () => [
            containerRef.removeEventListener("touchstart", handleTouchStart),
            containerRef.removeEventListener("touchend", handleTouchEnd),
        ];
    }, []);

    return (
        <section className="flex flex-col items-center">
            <div
                ref={ref}
                className={`w-full aspect-square grid place-items-center overflow-hidden`}
            >
                <SlideImg
                    slideStyle={`animate-slide-${slideDirection}`}
                    src={data.images[currentImg]}
                    alt={data.name}
                />
                <img className="w-full object-fill" />
            </div>
            <div className="flex gap-2 my-4">
                {!!data.images.length &&
                    data.images.map((elem, index) => (
                        <span
                            onClick={() => setCurrentImg(index)}
                            key={index}
                            className={`${
                                index === currentImg
                                    ? "bg-secondary"
                                    : "bg-bg-main"
                            } w-2 aspect-square rounded-full border-[1px] border-secondary`}
                        ></span>
                    ))}
            </div>
        </section>
    );
};

export default ProductCardGallery;

const SlideImg = ({ src, slideStyle, alt }) => {
    return (
        <img
            className={`${slideStyle} w-full object-fill`}
            src={src}
            alt={alt}
        />
    );
};
