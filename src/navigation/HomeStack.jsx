import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import CategoryPage from "../pages/CategoryPage";
import HomePage from "../pages/HomePage";
import LoadingPage from "../pages/LoadingPage";
import ProductPage from "../pages/ProductPage";
import SearchPage from "../pages/SeachPage";
import AccountStack from "./AccountStack";

const HomeStack = ({ user }) => {
    return (
        <>
            <Header user={user} />
            <main className="w-full max-w-[1520px] relative flex flex-col items-center">
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
                    <Route path="/category//*" element={<CategoryPage />} />
                    <Route path="/product//*" element={<ProductPage />} />

                    <Route
                        path="*"
                        element={<div>Bad route, nothing here</div>}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
};
export default HomeStack;
