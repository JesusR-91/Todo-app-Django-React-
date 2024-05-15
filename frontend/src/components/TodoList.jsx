import TodoComponent from './TodoComponent';

const TodoList = ({ deleteTodo, updateTodo, completTodo, filterStatus, completedTodo, nonCompletedTodo}) => {

  return (
    <div className='todo-list'>

        {filterStatus ? nonCompletedTodo.length > 0 ? nonCompletedTodo.map(todo => {
            
            return (
                <TodoComponent key={todo.id} todo = {todo} deleteTodo = {deleteTodo} updateTodo = {updateTodo} completTodo={completTodo} completedTodo={completedTodo} nonCompletedTodo = {nonCompletedTodo} filterStatus={filterStatus}/>
            )
        }): <p>Add something to your list!</p>
        : completedTodo.length > 0 ? completedTodo.map(todo => {
            
            return (
                <TodoComponent key={todo.id} todo = {todo} deleteTodo = {deleteTodo} updateTodo = {updateTodo} completTodo={completTodo} completedTodo={completedTodo} nonCompletedTodo = {nonCompletedTodo} filterStatus={filterStatus}/>
            )
            }): <p>Add something to your list!</p>}

    </div>
  )
} 

export default TodoList
