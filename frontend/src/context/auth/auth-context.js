import React, { useReducer } from "react";
import authReducer from "./authReducer";
import axios from "axios";

const initialState = {
    userData: {},
    error: null,
    loading: true,
};

export const authContext = React.createContext(initialState);

export default (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Actions
    const getUser = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8000/auth/login/success",
                { withCredentials: true }
            );
            dispatch({
                type: "GET_USER",
                payload: res.data,
            });
        } catch (e) {
            dispatch({
                type: "AUTH_ERROR",
                payload: e.response.data,
            });
        }
    };

    return (
        <authContext.Provider
            value={{
                userData: state.userData,
                error: state.error,
                loading: state.loading,
                getUser,
            }}
        >
            {props.children}
        </authContext.Provider>
    );
};
