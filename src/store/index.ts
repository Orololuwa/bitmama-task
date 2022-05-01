import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import RepoSlice from "./repos/repoSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    repos: RepoSlice,
    user: userSlice
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
