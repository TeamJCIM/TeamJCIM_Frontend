import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import ReactThunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { Reducers } from '../reducers';

//redux-persist
import { persistStore, persistReducer } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage
}

const persisted = persistReducer(persistConfig, Reducers)

const enhancer =
    process.env.NODE_ENV === "production"
        ? compose(applyMiddleware())
        : composeWithDevTools(applyMiddleware(ReactThunk, logger));


export const Store = createStore(persisted, enhancer);   // // Store holds the complete state tree of your app

export const persistor = persistStore(Store)