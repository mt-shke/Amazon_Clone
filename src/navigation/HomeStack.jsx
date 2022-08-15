import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useUserData from "../hooks/useUserData";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import HomePage from "../pages/HomePage";
import LoadingPage from "../pages/LoadingPage";
import SearchPage from "../pages/SeachPage";
import AccountStack from "./AccountStack";

const HomeStack = ({ user }) => {
    return (
        <>
            <Header user={user} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route
                    path="/account//*"
                    element={
                        user ? (
                            <AccountStack user={user} />
                        ) : (
                            <>
                                <Navigate to="/" redirect={true} />
                                <LoadingPage />
                            </>
                        )
                    }
                />
                <Route path="*" element={<div>Bad route, nothing here</div>} />
            </Routes>
            <Footer />
        </>
    );
};
export default HomeStack;
