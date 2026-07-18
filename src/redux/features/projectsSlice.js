import { createSlice } from "@reduxjs/toolkit";

const projectsInitialData =
  JSON.parse(localStorage.getItem("projectsData")) || [];
const initialRecentUpdates =
  JSON.parse(localStorage.getItem("recentupdates")) || [];

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    activeTab: "All Projects",
    projectsdata: projectsInitialData,
    recentUpdates: initialRecentUpdates,
  },
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setProjectsData(state, action) {
      state.projectsdata.push(action.payload);
      localStorage.setItem("projectsData", JSON.stringify(state.projectsdata));
    },
    deleteProject(state, action) {
      const updatedProjectList = state.projectsdata.filter((items) => {
        return items.projectid !== action.payload;
      });

      state.projectsdata = updatedProjectList;

      localStorage.setItem("projectsData", JSON.stringify(updatedProjectList));
    },
    setRecentUpdates(state, action) {
      state.recentUpdates.push(action.payload);
      localStorage.setItem(
        "recentupdates",
        JSON.stringify(state.recentUpdates),
      );
    },
    deleteRecentUpdates(state, action) {
      const updatedRU = state.recentUpdates.filter((items) => {
        return items.project.id !== action.payload;
      });
      state.recentUpdates = updatedRU;
      localStorage.setItem("recentupdates", JSON.stringify(updatedRU));
    },
  },
});

export const {
  setActiveTab,
  setProjectsData,
  deleteProject,
  setRecentUpdates,
  deleteRecentUpdates,
} = projectsSlice.actions;
export default projectsSlice.reducer;
