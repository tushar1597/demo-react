import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

let middlewares = [];
middlewares.push(thunk);

if (process.env.NODE_ENV === "development") {
    const { createLogger } = require("redux-logger");

    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
}

const appMiddleware = applyMiddleware(...middlewares);

export default createStore(reducer, appMiddleware);
