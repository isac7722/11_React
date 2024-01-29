import { composeWithDevTools } from "@redux-devtools/extension";
import {legacy_createStore, applyMiddleware} from "redux";
import { thunk } from 'redux-thunk';


import rootReducer from "./modules";

// const rootReducer = combineReducers({
//     "action" : (state,{payload}) =>{
//         console.log("payload :", payload);
//         return payload;
//     }
// })

const store =  legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

/* 
    redux 변경 사항입니다
    최신버전 redux 5.0.1에서 composeWithDevTools 사용하려면 아래와 같이 install 하셔야 합니다.
*/