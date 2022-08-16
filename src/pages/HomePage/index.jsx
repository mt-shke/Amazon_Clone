import { useEffect, useState } from "react";
import {
    collectionsCategory,
    landingBgMobile,
    paymentsCategory,
    primeCategory,
    startupCategory,
} from "../../../data";
import CategoryFullCard from "./components/CategoryFullCard";
import CategorySection from "./components/CategorySection";
import CategorySquareCard from "./components/CategorySquareCard";
import LandingBackgroundMobile from "./components/LandingBackgroundMobile";
import SectionCards from "./components/SectionCards";
import LandingBackground from "./LandingBackground";

const HomePage = () => {
    const [modal, setModal] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setModal(false);
        }, 1500);
    }, []);

    const newArr = new Array(6)
        .fill(true)
        .map((item, index) => <SectionCards key={index} />);

    return (
        <main className="w-full max-w-[1520px] relative flex flex-col gap-2 items-center">
            <div className="hidden sm:hidden flex-col w-full md:flex">
                <LandingBackground />
                <section className="grid grid-rows-2 gap-6 z-10">
                    {newArr}
                </section>
                {modal && <Modal />}
            </div>

            <div className="flex flex-col w-full sm:flex md:hidden gap-2">
                <LandingBackgroundMobile data={landingBgMobile} />
                <CategorySquareCard data={paymentsCategory} />
                <CategoryFullCard data={primeCategory} />
                <CategorySquareCard data={collectionsCategory} />
                <CategoryFullCard data={startupCategory} />
            </div>
        </main>
    );
};
export default HomePage;

const Modal = () => {
    return (
        <>
            <Overlay />
            <div className="fixed grid place-items-center z-50 top-0 left-0 bottom-0 right-0">
                <div className="w-[20%] flex flex-col gap-6 items-center p-6 bg-white rounded-lg">
                    <h3 className="text-darkgrey">Work in progress...</h3>
                    <div className="animate-spin w-10 h-10 border-black border-b-2 rounded-full"></div>
                </div>
            </div>
        </>
    );
};

const Overlay = () => {
    return (
        <div className="fixed z-40 top-0 left-0 bottom-0 right-0 bg-black opacity-50"></div>
    );
};
