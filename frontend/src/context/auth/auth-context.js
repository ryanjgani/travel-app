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
                `${process.env.REACT_APP_SERVER_URL}/auth/login/success`,
                // "https://travel-app-mern.herokuapp.com/auth/login/success",
                { withCredentials: true }
            );
            dispatch({
                type: "GET_USER",
                payload: res.data,
            });
        } catch (e) {
            dispatch({
                type: "AUTH_ERROR",
                payload: e,
            });
        }
    };

    const itemIsFavoriteHandler = (destId) => {
        return state.userData.favorites.some((dest) => dest.id === destId);
    };

    const addFavorite = async (destId) => {
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/api/dest/${destId}`,
                // `https://travel-app-mern.herokuapp.com/api/dest/${destId}`,
                { addFavorite: true },
                { withCredentials: true }
            );
            dispatch({
                type: "ADD_FAVORITE",
                payload: res.data,
            });
        } catch (e) {
            dispatch({
                type: "AUTH_ERROR",
                payload: e.response.data,
            });
        }
    };

    const removeFavorite = async (destId) => {
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/api/dest/${destId}`,
                // `https://travel-app-mern.herokuapp.com/api/dest/${destId}`,
                { addFavorite: false },
                { withCredentials: true }
            );
            dispatch({
                type: "REMOVE_FAVORITE",
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
                addFavorite,
                removeFavorite,
                itemIsFavoriteHandler,
            }}
        >
            {props.children}
        </authContext.Provider>
    );
};
