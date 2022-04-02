import { createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CartReducer from "./reducers/CartReducer";


const reducers = combineReducers({
     
   carthandle : CartReducer
})

const store = createStore(reducers,composeWithDevTools());


export default store