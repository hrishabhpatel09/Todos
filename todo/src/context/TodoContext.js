import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo:"This is First Trial Todo",
            completed: false
        }
    ],
    addTodo: (Todo) =>{},
    updateTodo:(id,Todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo= ()=>{
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider