import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: AuthState = {
  isLoggedIn: true,
  loading: false,
  error: false
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginBegin: (state) => {
      state.loading = true;
    },
    loginError: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginSuccess: (state, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.isLoggedIn = action.payload;
      state.error = false;
    },
    logoutBegin: (state) => {
      state.loading = true;
    },
    logoutError: (state) => {
      state.loading = false;
      state.error = true;
    },
    logoutSuccess: (state, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.isLoggedIn = action.payload;
      state.error = false;
    }
  }
});

export const {
  loginBegin,
  loginError,
  loginSuccess,
  logoutBegin,
  logoutError,
  logoutSuccess
} = AuthSlice.actions;

export default AuthSlice.reducer;
