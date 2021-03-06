import { ADD_TODO } from './todoTypes'
import {v4 as uuid} from 'uuid'
export const AddTodo =(newTodo)=>{

    return {
        type: ADD_TODO,
        payload:{...newTodo,id:uuid(),isDone:false}
    }
}
export const deleteTodo =(id)=>{

    return {
        type: DELETE_TODO,
        payload:id
    }
}
export const toggleTodo =(id)=>{

    return {
        type: TOGGLE_TODO,
        payload:id
    }
}
export const editTodo =(editedTodo)=>{

    return {
        type: EDIT_TODO,
        payload:editedTodo
    }
}
    export const filterTodo =(filter)=>{

        return {
            type: TOGGLE_FILTER,
            payload:filter
        }
}