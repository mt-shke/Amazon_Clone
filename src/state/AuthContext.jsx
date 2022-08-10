import { createContext, useReducer } from "react";

const initialState = {
    loggedUser: null,
};

// CreateContext
export const AuthContext = createContext({
    state: initialState,
    dispatch: () => {},
});

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                loggedUser: action.payload.loggedUser,
            };
        case "UPDATE_USER":
            return {
                ...state,
                loggedUser: action.payload.loggedUser,
            };
        case "LOGOUT_USER":
            return {
                loggedUser: null,
            };
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
