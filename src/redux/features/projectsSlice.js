import {createSlice} from "@reduxjs/toolkit"

const projectsInitialData = JSON.parse(localStorage.getItem("projectsData")) || []

export const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        activeTab: "All Projects",
        projectsdata : projectsInitialData,
    },
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload
        },
        setProjectsData(state, action) {
            state.projectsdata.push(action.payload)
            localStorage.setItem("projectsData", JSON.stringify(state.projectsdata))
            },
           
    }
})

export const {setActiveTab, setProjectsData} = projectsSlice.actions
export default projectsSlice.reducer