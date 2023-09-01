import { combineReducers } from "redux";
import UserRecducer from "./FetchUser/UserRecducer";
// import { formReducer } from "./LoginReducer";
// import { fakeShopReducer } from "./FakeShop/FakeShopReducer";

const RootReducer = combineReducers({
  userOps: UserRecducer,
});
export default RootReducer;
