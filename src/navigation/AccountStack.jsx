import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useUserData from "../hooks/useUserData";
import AccountPage from "../pages/Account/AccountPage";
import AddAddressPage from "../pages/Account/AddAddressPage";
import AddressesPage from "../pages/Account/AddressesPage";
import DeleteAccountPage from "../pages/DeleteAccountPage";
import { AuthContext } from "../state/AuthContext";

const AccountStack = ({ user }) => {
    const { dispatch } = useContext(AuthContext);
    const { userData, update } = useUserData(user.userUid);

    useEffect(() => {
        if (!userData) {
            update();
        }

        if (userData) {
            const updatedUser = { ...user, ...userData };
            dispatch({
                type: "UPDATE_USER",
                payload: { loggedUser: updatedUser },
            });
        }
    }, [userData]);

    return (
        <>
            {!user ? (
                <Navigate to={"/login"} redirect={true} />
            ) : (
                <Routes>
                    <Route path="/" element={<AccountPage user={user} />} />
                    <Route
                        path="/addresses/"
                        element={<AddressesPage user={user} />}
                    />
                    <Route
                        path="/addresses/add-address/"
                        element={<AddAddressPage user={user} />}
                    />
                    <Route
                        path="/delete/"
                        element={<DeleteAccountPage user={user} />}
                    />
                </Routes>
            )}
        </>
    );
};
export default AccountStack;
