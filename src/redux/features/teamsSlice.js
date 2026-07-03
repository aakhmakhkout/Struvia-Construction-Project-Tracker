import {createSlice} from "@reduxjs/toolkit"

const teamInitData = JSON.parse(localStorage.getItem("teamMembers")) || []

export const teamsSlice = createSlice( {
    name: "teams",
    initialState: {
        teamsMembers : teamInitData
    },
    reducers: {
        addTeamMember(state, action) {
            state.teamsMembers.push(action.payload)
            localStorage.setItem("teamMembers", JSON.stringify(state.teamsMembers))
        }
    }
})

export const {addTeamMember} = teamsSlice.actions
export default teamsSlice.reducer