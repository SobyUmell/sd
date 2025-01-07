import { createStore, combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
