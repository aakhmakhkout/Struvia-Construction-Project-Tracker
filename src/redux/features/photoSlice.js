import { createSlice } from "@reduxjs/toolkit";

const albumInitialData = JSON.parse(localStorage.getItem("albumdata")) || []

const photoSlice = createSlice(
    {
        name: "photos",
        initialState: {
            albumdata: albumInitialData
        },
        reducers: {
            setAlbumData(state, action) {
                state.albumdata.push(action.payload)
                localStorage.setItem("albumdata", JSON.stringify(state.albumdata))
            }
        }
    }
)

export const {setAlbumData} = photoSlice.actions
export default photoSlice.reducer