import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "../features/layoutSlice.js";
import authSlice from "../features/authSlice.js";
import dashboardSlice from "../features/dashboardSlice.js";
import punchlistSlice from "../features/punclistSlice.js";
import projectsSlice from "../features/projectsSlice.js";
import tasksSlice from "../features/tasksSlice.js";
import photoSlice from "../features/photoSlice.js";
import teamsSlice from "../features/teamsSlice.js";
import updateSlice from "../features/updatesSlice.js";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    auth: authSlice,
    dashboard: dashboardSlice,
    punchlist: punchlistSlice,
    projects: projectsSlice,
    tasks: tasksSlice,
    photos: photoSlice,
    teams: teamsSlice,
    updates: updateSlice,
  },
});
