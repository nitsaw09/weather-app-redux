import logger from "redux-logger"; //allows you to see the state of the app
import thunk from "redux-thunk"; // allows return a function instead of an action
import { applyMiddleware, createStore } from "redux";

import Reducers from "../reducers/reducers";

//--- MIDDLEWARE
const middleware = applyMiddleware(logger, thunk);

//--- STORE
const Store = createStore(Reducers, middleware);

export default Store;
