import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    data: {},
  },

  reducers: {
    setRegistrationForm: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    clearRegistrationForm: (state) => {
      state.data = {};
    },
  },
});

export const { setRegistrationForm, clearRegistrationForm } =
  registerSlice.actions;

export default registerSlice.reducer;
