import { useEffect, useState } from 'react';
import './App.css';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import axios from 'axios';

function App() {

  //STATES
  const [todos, setTodos] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);
  const [nonCompletedTodo, setNonCompletedTodo] = useState([]);

  const [filterStatus, setFilterStatus] = useState(true)
  const [reload, setReload] = useState(true);

  //FUNCTIONS

  //Get all todos
  const getTodos = async () =>{
    try {
      //Axios to the backend
      const response = await axios.get("http://localhost:8000/todos");

      //Clean the response
      const todos = response.data;

      // Set Todo State
      setTodos(todos);

      //Filter todos;
      let completed = todos.filter(todo => todo.completed == true);
      let nonCompleted = todos.filter(todo => todo.completed == false);
      setCompletedTodo(completed);
      setNonCompletedTodo(nonCompleted);

    } catch (error) {
      console.log(error);
    }

  }

  //Delete Todo
  const deleteTodo = async (id) =>{
    try {
      await axios.delete("http://localhost:8000/todos/" + id);
      setReload(!reload);

    } catch (error) {
      console.log(error);
    }

  }

  //Add todo
  const addTodo = async (data) => {
    try {
      await axios.post("http://localhost:8000/todos", data);
      setReload(!reload);

    } catch (error) {
      console.log(error);
    }
  }

  //Completed todo
  const completTodo = async (id) => {
    try {
      //Find the chosen todo
      let todo = todos.filter(todo => todo.id == id)[0];
      //Change the status
      todo.completed = !todo.completed;
      //Updated
      await axios.patch("http://localhost:8000/todos/" + id, todo);
      //Reload
      setReload(!reload);  
    } catch (error) {
      console.log(error);
    }
  }

  //Update todo
  const updateTodo = async (data, id) => {
    try {
      await axios.patch("http://localhost:8000/todos/" + id, data);
      setReload(!reload);

    } catch (error) {
      console.log(error);
    }
  }

  //Filter todo
  const filterTodo = (selected) => {
    if(selected){
      console.log(selected);
      let todosFilter = todos.filter(todo => todo.completed == false);
      console.log(todosFilter)
      setTodos(todosFilter);
    } else{
      console.log(selected);
      let todosFilter = todos.filter(todo => todo.completed == true);
      console.log(todosFilter)
      setTodos(todosFilter);
    }
  }

  //Use effect
  useEffect(() =>{
    getTodos();
  }, [reload])


  return (
      <div className="todo-container">
        <TodoAdd addTodo = {addTodo}/>
        <br />
        <TodoFilter filterTodo ={filterTodo} setFilterStatus = {setFilterStatus}/>
        <br />
        <TodoList deleteTodo = {deleteTodo} updateTodo = {updateTodo} completTodo={completTodo} completedTodo={completedTodo} nonCompletedTodo = {nonCompletedTodo} filterStatus={filterStatus} />
      </div>
  )
}

export default App
