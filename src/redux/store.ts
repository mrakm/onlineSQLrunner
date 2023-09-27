import historySlice from "./feature/history";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    querry: historySlice,
  },
});
export default store; 