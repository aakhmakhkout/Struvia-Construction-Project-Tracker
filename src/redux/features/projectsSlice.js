import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../../data/usersData";
import { useSelector } from "react-redux";

const projectsInitialData =
  JSON.parse(localStorage.getItem("projectsData")) || [];

const initialContractorDashboardData =
  JSON.parse(localStorage.getItem("CDdata")) || [];

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    activeTab: "All Projects",
    projectsdata: projectsInitialData,
    contractorDashboardData: initialContractorDashboardData,
  },
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setProjectsData(state, action) {
      state.projectsdata.push(action.payload);
      localStorage.setItem("projectsData", JSON.stringify(state.projectsdata));
    },
    setCDdata(state, action) {},
    deleteProject(state, action) {
      const updatedProjectList = state.projectsdata.filter((items) => {
        return items.projectid !== action.payload;
      });

      state.projectsdata = updatedProjectList;

      localStorage.setItem("projectsData", JSON.stringify(updatedProjectList));
    },
  },
});

export const { setActiveTab, setProjectsData, deleteProject } =
  projectsSlice.actions;
export default projectsSlice.reducer;
