export default (state, action) => {
    switch (action.type) {
        case "GET_ALL_DESTINATIONS":
            return {
                ...state,
                loading: false,
                error: false,
                destinations: action.payload,
            };
        case "GET_SINGLE_DESTINATION":
            return {
                ...state,
                loading: false,
                error: false,
                destinationItem: action.payload,
            };
        case "DESTINATION_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
