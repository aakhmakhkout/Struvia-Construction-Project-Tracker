import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../../data/usersData";
import { useSelector } from "react-redux";

const projectsInitialData =
  JSON.parse(localStorage.getItem("projectsData")) || [];

const initialnavbarProjectId =
  JSON.parse(localStorage.getItem("NavbarId")) || "empty";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    activeTab: "All Projects",
    projectsdata: projectsInitialData,
    navbarProjectId: initialnavbarProjectId,
  },
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setProjectsData(state, action) {
      state.projectsdata.push(action.payload);
      localStorage.setItem("projectsData", JSON.stringify(state.projectsdata));
    },
    setNavbarProId(state, action) {
      state.navbarProjectId = action.payload;
      localStorage.setItem("NavbarId", JSON.stringify(state.navbarProjectId));
    },
    deleteProject(state, action) {
      const updatedProjectList = state.projectsdata.filter((items) => {
        return items.projectid !== action.payload;
      });

      state.projectsdata = updatedProjectList;

      localStorage.setItem("projectsData", JSON.stringify(updatedProjectList));
    },
  },
});

export const { setActiveTab, setProjectsData, setNavbarProId, deleteProject } =
  projectsSlice.actions;
export default projectsSlice.reducer;
