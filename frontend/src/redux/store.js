import { createStore,applyMiddleware,combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { productReducer } from "./data/reducer";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";

//import { cartReducer } from "./Cart/reducer";
const rootReducer=combineReducers({
    data : productReducer,
    login : loginReducer,
    

    
    
})
const store=createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk)
));
export {store}