import { createSlice } from "@reduxjs/toolkit";

const initialRecentUpdates =
  JSON.parse(localStorage.getItem("recentUpdates")) || [];

export const updateSlice = createSlice({
  name: "recentUpdates",
  initialState: {
    recentupdates: initialRecentUpdates,
  },
  reducers: {
    setRecentUpdates(state, action) {
      state.recentupdates.push(action.payload);
      localStorage.setItem(
        "recentUpdates",
        JSON.stringify(state.recentupdates),
      );
    },
  },
});

export const { setRecentUpdates } = updateSlice.actions;
export default updateSlice.reducer;
