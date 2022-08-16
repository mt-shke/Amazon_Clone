import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { getUserFirestoreData } from "../firebase/usersCollection";
import AccountPage from "../pages/Account/AccountPage";
import AddAddressPage from "../pages/Account/AddAddressPage";
import AddProductPage from "../pages/Account/AddProductPage";
import AddressesPage from "../pages/Account/AddressesPage";
import UpdateUserdataPage from "../pages/Account/UpdateUserdataPage";
import DeleteAccountPage from "../pages/DeleteAccountPage";
import { AuthContext } from "../state/AuthContext";

const AccountStack = ({ user }) => {
    const { dispatch } = useContext(AuthContext);

    const fetchUserData = async () => {
        const updatedData = await getUserFirestoreData(user.userUid);
        dispatch({
            type: "UPDATE_USER",
            payload: { loggedUser: { ...user, ...updatedData } },
        });
    };

    return (
        <>
            {!user ? (
                <Navigate to={"/login"} redirect={true} />
            ) : (
                <Routes>
                    <Route
                        path="/"
                        element={
                            <AccountPage
                                user={user}
                                fetchUserData={fetchUserData}
                            />
                        }
                    />
                    <Route
                        path="/addresses/"
                        element={
                            <AddressesPage
                                user={user}
                                fetchUserData={fetchUserData}
                            />
                        }
                    />
                    <Route
                        path="/update-user-data/"
                        element={
                            <UpdateUserdataPage
                                user={user}
                                fetchUserData={fetchUserData}
                            />
                        }
                    />
                    <Route
                        path="/addresses/add-address/"
                        element={
                            <AddAddressPage
                                user={user}
                                fetchUserData={fetchUserData}
                            />
                        }
                    />
                    <Route
                        path="/delete/"
                        element={
                            <DeleteAccountPage
                                user={user}
                                fetchUserData={fetchUserData}
                            />
                        }
                    />
                    <Route
                        path="/add-product/"
                        element={
                            <AddProductPage
                                user={user}
                                fetchUserData={fetchUserData}
                            />
                        }
                    />
                </Routes>
            )}
        </>
    );
};
export default AccountStack;
