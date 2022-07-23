import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainNavigation from "./navigation/MainNavigation";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
    return (
        <div className="App flex flex-col items-center bg-bg-main font-emberc min-w-[1020px]">
            <MainNavigation />
        </div>
    );
};

export default App;
