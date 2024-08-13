import { createSlice } from "@reduxjs/toolkit";
import { addContactsThunk, delContactThunk, fetchContacts } from "./operations";

const initialState = {
  contacts: [],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(delContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      });
  },
});

export const contactsReducer = slice.reducer;
