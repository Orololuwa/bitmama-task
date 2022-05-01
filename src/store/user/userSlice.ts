import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  data: {} | undefined;
}

const initialState: UserState = {
  data: undefined
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{}>) => {
      state.data = action.payload;
    }
  }
});

export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;
