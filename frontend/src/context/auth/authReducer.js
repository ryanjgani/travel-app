export default (state, action) => {
    switch (action.type) {
        case "GET_USER":
            return {
                ...state,
                loading: false,
                error: false,
                userData: action.payload.user,
            };
        case "AUTH_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
