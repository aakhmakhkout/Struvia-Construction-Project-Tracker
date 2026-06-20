import { createSlice } from "@reduxjs/toolkit";

const UserRole = JSON.parse(localStorage.getItem("role")) || ""
const UserName = JSON.parse(localStorage.getItem("username")) || ""

const authSlice = createSlice({
    name:"authentication",
    initialState: {
        role: UserRole,
        username: UserName
    },
    reducers: {
        getRole(state, action) {
            state.role = action.payload
            localStorage.setItem("role", JSON.stringify(state.role))
        },
        setUser(state, action) {
            state.username = action.payload
            localStorage.setItem("username", JSON.stringify(state.username))
        }
    }
})

export const {getRole, setUser} = authSlice.actions
export default authSlice.reducer