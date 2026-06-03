import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"authentication",
    initialState: {
        role: null,
        username: ""
    },
    reducers: {
        getRole(state, action) {
            state.role = action.payload
        },
        setUser(state, action) {
            state.username = action.payload
        }
    }
})

export const {getRole, setUser} = authSlice.actions
export default authSlice.reducer