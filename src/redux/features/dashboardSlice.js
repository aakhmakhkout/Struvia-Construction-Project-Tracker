import { createSlice } from "@reduxjs/toolkit";
import ra1 from "../../assets/rp2.jpg"
import ra2 from "../../assets/ra2.jpg"
import ra3 from "../../assets/ra3.jpg"
import ra4 from "../../assets/ra4.jpg"

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        status: "Pending",
        ProjectName: ["Skyline Villa Project"],
        recentActivites: [
            {
            img: ra1,
            activity: "Bathroom Tiles Installation completed",
            subtitle: "Uploaded by Worker 1",
            time: "2h ago"
            }, 
            {
            img: ra2,
            activity: "Electrical wiring - First floor",
            subtitle: "Completed by worker 3",
            time: "5h ago"
            }, 
            {
            img: ra3,
            activity: "Site inspection done",
            subtitle: "by kaneki",
            time: "1d ago"
            }, 
            {
            img: ra4,
            activity: "Payment of 2,00,000 approved",
            subtitle: "by kaneki to manager",
            time: "2d ago"
            }, 
        ],
        upcomingTasks: [
            {
                task: "Kitchen cabinet installation",
                subtitle: "Assigned to worker 1",
                date: "June 4",
                time: "Tomorrow"
            },
            {
                task: "Paint second coat - Bedroom",
                subtitle: "Assigned to worker 3",
                date: "June 7",
                time: "in 2 days"
            },
            {
                task: "Main door Installation",
                subtitle: "Assigned to worker 4",
                date: "June 9",
                time: "in 5 days"
            },
            {
                task: "Final Cleaning - Ground Floor",
                subtitle: "Assigned to team",
                date: "June 10",
                time: "in 6 days"
            },
        ],
        teamOnSite:[
            {
                img: "pfp",
                name: "Kaneki Ken",
                field: "Contractor",
                isPresent: true
            },
            {
                img: "pfp",
                name: "Isagi Yoichi",
                field: "Electrician",
                isPresent: true
            },
            {
                img: "pfp",
                name: "Nagi Seishiro",
                field: "Plumber",
                isPresent: false
            },
            {
                img: "pfp",
                name: "Eren yeager",
                field: "Painter",
                isPresent: true
            },
        ]
    
    },
    reducers: {
        setStatus(state, action) {
            state.status = action.payload
        },
        setProjects(state, action) {
            state.ProjectName.push(action.payload)
        },
        setRecentActivites(state, action) {

        },
        setUpcomingTasks(state, action) {
                    }
    }
})

export const {setStatus, setProjects} = dashboardSlice.actions
export default dashboardSlice.reducer