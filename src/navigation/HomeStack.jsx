import { Routes, Route } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SeachPage";

const HomeStack = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                {/* <Route path="/register" element={<RegisterPage />} /> */}
                <Route path="*" element={<div>Bad route, nothing here</div>} />
            </Routes>
            <Footer />
        </>
    );
};
export default HomeStack;


