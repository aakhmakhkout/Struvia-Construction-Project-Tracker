import { createSlice } from "@reduxjs/toolkit";

export const punchlistSlice = createSlice({
    name: "punchlist",
    initialState: {
        punchListData: [
            {
            id: 1,
            item: "Fix leakage in master bathroom",
            priority: "High",
            time: "June 6"
            }, 
            {
            id: 2,
            item: "Paint touch-up in living room",
            priority: "Medium",
            time: "June 8"
            }, 
            {
            id: 3,
            item: "Replace broken tile in kitchen",
            priority: "Low",
            time: "June 9"
            }, 
            {
            id: 4,
            item: "Fix balcony railing",
            priority: "Medium",
            time: "June 10"
           }, 
        ]
    
    },
    reducers: {
        setPunchListItems(state, action) {
            state.status = action.payload
        }
    }
})

export const {setPunchListItems} = punchlistSlice.actions
export default punchlistSlice.reducer