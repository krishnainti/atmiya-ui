import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    roles: null,
    profile: null,
    token: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.roles = null;
      state.token = null;
      state.profile = null;
    },
  },
});

export const { setUser, setRoles, setToken, setProfile, clearUser } =
  userSlice.actions;

export default userSlice.reducer;
