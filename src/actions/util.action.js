// import axios from "axios";
// import { ROUTES } from "../constants/routes";
import { UTIL } from "./actiontypes";

export const setLoading = () => (dispatch) => {
    let action = {};
    action.type = UTIL.SET_LOADING;
    dispatch(action);
};
