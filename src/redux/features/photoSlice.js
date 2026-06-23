import { createSlice } from "@reduxjs/toolkit";

const photosInitData = JSON.parse(localStorage.getItem("photosData")) || []

const photoSlice = createSlice(
    {
        name: "photos",
        initialState: {
            photosData: photosInitData
        },
        reducers: {
            setPhotosData(state, action) {
                state.photosData.push(action.payload)
                localStorage.setItem("photosData", JSON.stringify(state.photosData))
            }
        }
    }
)

export const {setPhotosData} = photoSlice.actions
export default photoSlice.reducer