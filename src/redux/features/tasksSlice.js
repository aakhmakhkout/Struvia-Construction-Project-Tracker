import {createSlice} from "@reduxjs/toolkit"
import { current } from "@reduxjs/toolkit"

const todoInitialData = JSON.parse(localStorage.getItem("todoTasks")) || []
const inProgressInitData = JSON.parse(localStorage.getItem("inProgTasks")) || []
const inReviewData = JSON.parse(localStorage.getItem("inRevTasks")) || []
const completedData = JSON.parse(localStorage.getItem("compTasks")) || []

// console.log(todoInitialData)
export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        todoTasks: todoInitialData,
        inProgressTasks: inProgressInitData,
        inReviewTasks: inReviewData,
        completedTasks: completedData
    },
    reducers: {
        setToDoTask(state, action) {
            state.todoTasks.push(action.payload)
            const updatedToDo = state.todoTasks
            localStorage.setItem("todoTasks", JSON.stringify(updatedToDo))
        },
        setRemoveToDoTask(state, action) {
            const removedTodoData = state.todoTasks.filter((items)=> {
                return items.id !== action.payload
            })
            state.todoTasks = removedTodoData
            localStorage.setItem("todoTasks", JSON.stringify(removedTodoData))        
        },

        setInProgressTask(state, action) {
            const ipTasks = state.todoTasks.find((items)=> {
                return items.id === action.payload
            })
            if(ipTasks) {
                state.inProgressTasks.push(ipTasks)
            }
            localStorage.setItem("inProgTasks", JSON.stringify(state.inProgressTasks))
        },
        setRemoveInProgTask(state, action) {
            const removedInProg = state.inProgressTasks.filter((items)=> {
                return items.id !== action.payload
            })
            state.inProgressTasks = removedInProg
            localStorage.setItem("inProgTasks", JSON.stringify(removedInProg))        
        },

        setInReviewTasks(state, action) {
            const irTasks = state.inProgressTasks.find((items)=> {
                return items.id === action.payload
            })
            if(irTasks) {
                state.inReviewTasks.push(irTasks)
            }
            localStorage.setItem("inRevTasks", JSON.stringify(state.inReviewTasks))
        },
        setRemoveInRevTasks(state, action) {
            const removedIr = state.inReviewTasks.filter((items)=> {
                return items.id !== action.payload
            })
            state.inReviewTasks = removedIr
            localStorage.setItem("inRevTasks", JSON.stringify(removedIr))        
        },

        setCompletedTasks(state, action) {
            const cTasks = state.inReviewTasks.find((items)=> {
                return items.id === action.payload
            })
            if(cTasks) {
                state.completedTasks.push(cTasks)
            }
            localStorage.setItem("compTasks", JSON.stringify(state.completedTasks))
        },
        setRemoveCompTasks(state, action) {
            const removedcomp = state.completedTasks.filter((items)=> {
                return items.id !== action.payload
            })
            state.completedTasks = removedcomp
            localStorage.setItem("compTasks", JSON.stringify(removedcomp))        
        },
    }
})

export const {setToDoTask, setRemoveToDoTask, setInProgressTask, setRemoveInProgTask, setInReviewTasks, setRemoveInRevTasks, setCompletedTasks, setRemoveCompTasks}  = tasksSlice.actions
export default tasksSlice.reducer