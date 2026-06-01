import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        status: "Pending",
        ProjectName: ["Skyline Villa Project"]
    },
    reducers: {
        setStatus(state, action) {
            state.status = action.payload
        },
        setProjects(state, action) {
            state.ProjectName.push(action.payload)
        }
    }
})

export const {setStatus, setProjects} = dashboardSlice.actions
export default dashboardSlice.reducer