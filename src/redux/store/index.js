import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import ReactThunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { Reducers } from '../reducers';


const enhancer =
    process.env.NODE_ENV === "production"
        ? compose(applyMiddleware())
        : composeWithDevTools(applyMiddleware(ReactThunk, logger));


export const Store = createStore(Reducers, enhancer);   // // Store holds the complete state tree of your app