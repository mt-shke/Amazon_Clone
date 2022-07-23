import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomeStack from "./HomeStack";

const MainNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeStack />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<div>Bad route, nothing here</div>} />
            </Routes>
        </BrowserRouter>
    );
};
export default MainNavigation;
