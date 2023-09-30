import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const fetchRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const fetchLogIn = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const fetchLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
const fetchRefreshUserProgress = state => {
  state.isRefreshing = true;
};
const fetchRefreshUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const fetchingRefresError = state => {
  state.isRefreshing = false;
};
const fetchingError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const fetchingInProgress = state => {
  state.isLoading = true;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, fetchingInProgress)
      .addCase(register.fulfilled, fetchRegister)
      .addCase(register.rejected, fetchingError)
      .addCase(logIn.pending, fetchingInProgress)
      .addCase(logIn.fulfilled, fetchLogIn)
      .addCase(logIn.rejected, fetchingError)
      .addCase(logOut.pending, fetchingInProgress)
      .addCase(logOut.fulfilled, fetchLogOut)
      .addCase(logOut.rejected, fetchingError)
      .addCase(refreshUser.pending, fetchRefreshUserProgress)
      .addCase(refreshUser.fulfilled, fetchRefreshUser)
      .addCase(refreshUser.rejected, fetchingRefresError);
  },
});
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });

export const authReducer = authSlice.reducer;
