import {useState}  from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { RiAddLargeLine } from "react-icons/ri";


const TodoAdd = ({addTodo}) => {

  //States
  const [todo, setTodo] = useState({title : ""});
  
  //Functions
  const handleTodo = (event) => {
    const {name, value} = event.target;
    setTodo({...todo, [name] : value});
  }

  const newTodo = () => {
    addTodo(todo);
    setTodo({title : "", hour: "", date:""});
  }
  
  return (
    <Form inline className='add-todo'>
          <InputGroup>
              <Form.Control
                  placeholder="What will be your nest task?"
                  aria-describedby="basic-addon1"
                  name='title'
                  value={todo.title}
                  onChange={handleTodo}
                  //To add the todo when the user push the 'enter' key
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        newTodo();
                    }
                  }}
              />
              <Form.Control name="hour" type='hour' value={todo.hour} placeholder="00:00" onChange={handleTodo}/>
              <Form.Control name='date' type='date' value={todo.date} onChange={handleTodo}/>

          </InputGroup>
          <Button variant="success" onClick={newTodo}><RiAddLargeLine /></Button>
      </Form>
  )
}

export default TodoAdd
