import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./ContactSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
