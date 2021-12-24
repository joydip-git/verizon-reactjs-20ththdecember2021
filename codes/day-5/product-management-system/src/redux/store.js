import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./rootreducer";

const loggerMiddleware = createLogger()
export const appStore = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware, thunkMiddleware)
)