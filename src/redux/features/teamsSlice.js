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
        },
        removeTeamMember(state, action) {
            const updatedTeamMembers = state.teamsMembers.filter((items)=> {
                return items.UUID !== action.payload
            })
            state.teamsMembers = updatedTeamMembers
            localStorage.setItem("teamMembers", JSON.stringify(updatedTeamMembers))

        }
    }
})

export const {addTeamMember, removeTeamMember} = teamsSlice.actions
export default teamsSlice.reducer