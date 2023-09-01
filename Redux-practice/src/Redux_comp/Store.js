import { createStore ,applyMiddleware } from "redux";
// import cakeReducer from "./cakeReducer";
// import  RootReducer  from "../AppStore/LoginStore";
import  RootReducer  from "./RootReducer";
import logger from "redux-logger"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


export const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));
