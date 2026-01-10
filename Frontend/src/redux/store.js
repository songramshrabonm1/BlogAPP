import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/feature/user/userSlice' ; 

export default configureStore({
  reducer: { user :  userReducer },
});