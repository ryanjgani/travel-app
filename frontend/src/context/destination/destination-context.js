import React, { useReducer } from "react";
import destinationReducer from "./destinationReducer";
import axios from "axios";

const initialState = {
    destinations: [],
    destinationItem: {},
    error: null,
    loading: true,
};

export const destinationContext = React.createContext(initialState);

export default (props) => {
    const [state, dispatch] = useReducer(destinationReducer, initialState);

    // Actions
    const getAllDestinations = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8000/api/dest"
                // "https://travel-app-mern.herokuapp.com/api/dest"
            );
            dispatch({
                type: "GET_ALL_DESTINATIONS",
                payload: res.data,
            });
        } catch (e) {
            dispatch({
                type: "DESTINATION_ERROR",
                payload: e.response.data.error,
            });
        }
    };

    const getSingleDestination = async (destId) => {
        try {
            const res = await axios.get(
                `http://localhost:8000/api/dest/${destId}`
                // `https://travel-app-mern.herokuapp.com/api/dest/${destId}`
            );
            dispatch({
                type: "GET_SINGLE_DESTINATION",
                payload: res.data,
            });
        } catch (e) {
            dispatch({
                type: "DESTINATION_ERROR",
                payload: e.response.data,
            });
        }
    };

    return (
        <destinationContext.Provider
            value={{
                destinations: state.destinations,
                destinationItem: state.destinationItem,
                error: state.error,
                loading: state.loading,
                getAllDestinations,
                getSingleDestination,
            }}
        >
            {props.children}
        </destinationContext.Provider>
    );
};
