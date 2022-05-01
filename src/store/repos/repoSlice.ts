import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RepoState {
  data: [];
}

const initialState: RepoState = {
  data: []
};

const RepoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setRepo: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
    }
  }
});

export const { setRepo } = RepoSlice.actions;

export default RepoSlice.reducer;
