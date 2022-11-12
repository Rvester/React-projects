import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers: {
       addTodo: (state, action) => {
            console.log(state, action)
            //perform a state change
            //with toolkit comes a library called mimer
            state.todos.push(action.payload)
       },
       clearTodos: (state, action) =>{
        state.todos = []
       }
     
       
    } 
})

export const {addTodo, clearTodos} = todoSlice.actions

export default todoSlice.reducer