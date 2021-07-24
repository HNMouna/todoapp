import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from './redux/actions/todoActions';

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState(null)
    const dispatch = useDispatch()
    return (
        <div>
            <input placeholder='new Todo' type='text' onChange={(e)=>setNewTodo({description:e.target.value})}></input>
            <button onClick={()=>dispatch(AddTodo(newTodo))}>Add</button>
        </div>
    )
}

export default AddTodo
