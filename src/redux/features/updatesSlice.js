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
    setRemoveRecentUpdates(state, action) {
      const updatedData = state.recentupdates.filter((items) => {
        return items.updateId !== action.payload;
      });
      state.recentupdates = updatedData;
      localStorage.setItem("recentUpdates", JSON.stringify(updatedData));
    },
    DeleteAllUpdates(state, action) {
      state.recentupdates = action.payload;
      localStorage.setItem(
        "recentUpdates",
        JSON.stringify(state.recentupdates),
      );
    },
  },
});

export const { setRecentUpdates, setRemoveRecentUpdates, DeleteAllUpdates } =
  updateSlice.actions;
export default updateSlice.reducer;
