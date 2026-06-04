import {createSlice} from "@reduxjs/toolkit"

export const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        activeTab: "All Projects"
    },
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload
        }
    }
})

export const {setActiveTab} = projectsSlice.actions
export default projectsSlice.reducer