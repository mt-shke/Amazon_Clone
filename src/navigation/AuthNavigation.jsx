import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomeStack from "./HomeStack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp, signOutFromApp } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../state/AuthContext";
import LoadingPage from "../pages/LoadingPage";
import { getUserFirestoreData } from "../firebase/usersCollection";
import { useEffect } from "react";

const AuthNavigation = () => {
    const auth = getAuth(firebaseApp);
    const { state, dispatch } = useContext(AuthContext);

    onAuthStateChanged(auth, (user) => {
        // No logged user yet
        if (!state.loggedUser) {
            if (!user) {
                return;
            }
            if (user) {
                if (!user.emailVerified) {
                    signOutFromApp();
                    return;
                }
                getUserData(user.uid);
                return;
            }
        }
        // Logged user
        if (state.loggedUser) {
            if (!user) {
                return dispatch({
                    type: "LOGOUT_USER",
                });
            }
            if (state.loggedUser.email === user.email) {
                return;
            }
        }
    });

    const getUserData = async (userUid) => {
        try {
            const data = await getUserFirestoreData(userUid);
            if (!data) {
                return;
            }
            dispatch({
                type: "LOGIN_USER",
                payload: {
                    loggedUser: {
                        ...data,
                        userUid: userUid,
                    },
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="*"
                    element={<HomeStack user={state.loggedUser} />}
                />
                <Route
                    path="/login"
                    element={
                        !!state.loggedUser ? (
                            <>
                                <Navigate to="/" redirect={true} />
                                <LoadingPage />
                            </>
                        ) : (
                            <LoginPage />
                        )
                    }
                />
                <Route
                    path="/register"
                    element={
                        !!state.loggedUser ? (
                            <>
                                <Navigate to="/" redirect={true} />
                                <LoadingPage />
                            </>
                        ) : (
                            <RegisterPage />
                        )
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AuthNavigation;
