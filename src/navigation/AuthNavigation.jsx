import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomeStack from "./HomeStack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp, signOutFromApp } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../state/AuthContext";

const AuthNavigation = () => {
    const auth = getAuth(firebaseApp);
    const { state, dispatch } = useContext(AuthContext);
    console.log("state is", state);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("onAuthStateChanged user is: ", user);
            if (!user.emailVerified) {
                return setTimeout(() => {
                    signOutFromApp();

                    console.log("User Logged out: Email not verified");
                }, 2000);
            }
            console.log("Logged In User now is:", user);

            // dispatch({
            //     type: "LOGIN_USER",
            //     payload: { loggedUser: { email: user.email } },
            // });

            // set user context
        } else {
            console.log("No logged user");
        }
    });

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<HomeStack />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
};
export default AuthNavigation;
