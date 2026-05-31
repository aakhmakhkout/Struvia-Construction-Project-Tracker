import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
    name: "layout",
    initialState: {
        activeTab : "Dashboard"
    },
   reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload
        }
    }
})

export const {setActiveTab} = layoutSlice.actions
export default layoutSlice.reducer
