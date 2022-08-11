import { Routes, Route } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import AccountPage from "../pages/Account/AccountPage";
import AddAddressPage from "../pages/Account/AddAddressPage";
import AddressesPage from "../pages/Account/AddressesPage";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SeachPage";

const HomeStack = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/account/addresses" element={<AddressesPage />} />
                <Route
                    path="/account/addresses/add-address"
                    element={<AddAddressPage />}
                />
                {/* <Route path="/register" element={<RegisterPage />} /> */}
                <Route path="*" element={<div>Bad route, nothing here</div>} />
            </Routes>
            <Footer />
        </>
    );
};
export default HomeStack;
