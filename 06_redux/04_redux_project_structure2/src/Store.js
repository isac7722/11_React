import { legacy_createStore as createStore } from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk as ReduxThunk } from "redux-thunk";
import logger from "redux-logger";


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
    
)


export default store;

