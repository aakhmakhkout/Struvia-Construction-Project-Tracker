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
            },
             deleteAlbum(state, action) {
            const updatedAlbums = state.albumdata.filter((items)=> {
                return items.albumid !== action.payload 
            })

            state.albumdata = updatedAlbums

            localStorage.setItem("albumdata", JSON.stringify(updatedAlbums))
        }
        }
    }
)

export const {setAlbumData, deleteAlbum} = photoSlice.actions
export default photoSlice.reducer