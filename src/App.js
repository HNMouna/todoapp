import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { filterTodo } from './redux/actions/todoActions';

function App() {
  const todos = useSelector(state => state.tasks.todos)
  const filter = useSelector(state => state.filtre)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={()=>dispatch(filterTodo('All'))}>All</button>
      <button onClick={()=>dispatch(filterTodo(true))}>Done</button>
      <button onClick={()=>dispatch(filterTodo(false))}>UnDone</button>
      <TodoList todos={filter==='All'? todos:todos.filter(elm=>elm.isDone===filter)} />
      <hr></hr>
      <br></br>
      <AddTodo />
    </div>
  );
}

export default App;
