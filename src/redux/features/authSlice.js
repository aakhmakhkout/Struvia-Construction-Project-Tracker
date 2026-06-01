import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"authentication",
    initialState: {
        role: null
    },
    reducers: {
        getRole(state, action) {
            state.role = action.payload
        }
    }
})

export const {getRole} = authSlice.actions
export default authSlice.reducer