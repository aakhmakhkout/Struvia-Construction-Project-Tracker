import {configureStore} from "@reduxjs/toolkit"
import layoutSlice from "../features/layoutSlice.js"
import authSlice from '../features/authSlice.js'
import dashboardSlice from "../features/dashboardSlice.js"
import punchlistSlice  from "../features/punclistSlice.js"
import projectsSlice  from "../features/projects.js"

export const store = configureStore({
    reducer: {
        layout: layoutSlice,
        auth: authSlice,
        dashboard: dashboardSlice,
        punchlist: punchlistSlice,
        projects: projectsSlice
    }
})