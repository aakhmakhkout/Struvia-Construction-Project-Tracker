import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice(
    {
        name: "photos",
        initialState: {
            photosData: []
        },
        reducers: {
            setPhotosData(state, action) {
                state.photosData.push(action.payload)
            }
        }
    }
)

export const {setPhotosData} = photoSlice.actions
export default photoSlice.reducer