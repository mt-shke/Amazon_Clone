import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import HomePage from "../pages/HomePage";

const HomeStack = () => {
    return (
        // <BrowserRouter>
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/login" element={<LoginPage />} /> */}
                {/* <Route path="/register" element={<RegisterPage />} /> */}
                <Route path="*" element={<div>Bad route, nothing here</div>} />
            </Routes>
            <Footer />
        </>
        // </BrowserRouter>
    );
};
export default HomeStack;
