import { useEffect, useState } from "react";

const useResponsive = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", setDimension);
        return () => {
            window.removeEventListener("resize", setDimension);
        };
    });

    const setDimension = (e) => {
        setWidth((p) => window.innerWidth);
    };

    const mobile = width < 768;
    const desktop = width >= 768;
    return { mobile, desktop };
};

export default useResponsive;
