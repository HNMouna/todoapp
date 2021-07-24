import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from './redux/actions/todoActions';
import { useState } from 'react';

const Todo = ({todo}) => {
  const [input, setinput] = useState(todo)
  const dispatch = useDispatch()
    return (
        <div>
          <h1 style={{textDecoration:todo.isDone? 'line-through':'none'}} onClick={()=>dispatch(toggleTodo(todo.id))}>{todo.description}</h1>
          <input value={input.description} onChange={(e)=>setinput({...input,description:e.target.value})} type='text'></input>
          <button onClick={()=>dispatch(deleteTodo(todo.id))}>delete</button>
          <button onClick={()=>dispatch(editTodo(input))}>edit</button>
        </div>
    )
}

export default Todo
