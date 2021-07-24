import { UTIL } from "../actions/actiontypes";

const initialState = {
    loading: 0,
};

const utilReducer = (state = initialState, action) => {
    switch (action.type) {
        case UTIL.SET_LOADING: {
            return { ...state, loading: !state.loading };
        }
        default:
            return state;
    }
};

export default utilReducer;
