import {createSlice} from "@reduxjs/toolkit"

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        todoTasks: []
    },
    reducers: {
        setToDoTask(state, action) {
            state.todoTasks.push(action.payload)
        }
    }
})

export const {setToDoTask}  = tasksSlice.actions
export default tasksSlice.reducer