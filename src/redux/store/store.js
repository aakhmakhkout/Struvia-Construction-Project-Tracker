import {configureStore} from "@reduxjs/toolkit"
import layoutSlice from "../features/layoutSlice.js"

export const store = configureStore({
    reducer: {
        layout: layoutSlice
    }
})