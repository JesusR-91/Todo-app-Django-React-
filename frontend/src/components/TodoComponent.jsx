import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

//React-icons imports
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

const TodoComponent = ({todo, deleteTodo, updateTodo, completTodo, filterStatus, completedTodo, nonCompletedTodo}) => {
     
    //States
    const [todoState, setTodoState] = useState({});
    
    // Modal state
    const [show, setShow] = useState(false);

    //Modal functions
    const handleClose = () => setShow(false);
    const handleShow = (todo) => {
        setShow(true);
        //Setting the todoState for the Modal in the moment that we define which element are we editing
        setTodoState(todo);
    }

    //Functions
    const handleTodo = (event) => {
        //Event deconstruction
        const {name, value} = event.target;
        //Set todo
        setTodoState({...todoState,[name] : value});
    };

    //To format hour and date for the view
    const formatHour = (originalHour) => {
        return originalHour.substring(0, 5);
    };

    const formatDate = (originalDate) => {
        const dateObj = new Date(originalDate);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear().toString().slice(-2); 
    
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };

  return (
    <>
        <Card className="todo-item" key={todo.id} >
            <div className='text-container'>
                <InputGroup.Checkbox checked={todo.completed} onChange={() => {completTodo(todo.id)}}/>
                <p>{todo.title}</p>
                <p>{todo.date ? formatDate(todo.date): ""}</p>
                <p>{todo.hour ? formatHour(todo.hour) : ""}</p>
            </div>

            <div className="btn-container">
                <Button variant="primary" onClick={() => handleShow(todo)}><FaEdit /></Button>
                <Button variant="danger" onClick={() => deleteTodo(todo.id)}><RiDeleteBin2Fill/></Button>
            </div>
        </Card>

        <Modal show={show} onHide={handleClose} className="modal">
            <Modal.Header closeButton style={{ backgroundColor: 'lightcyan' }}>
            <Modal.Title>Edit task</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: 'lightcyan' }}>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    placeholder= {todoState.title}
                    autoFocus
                    value={todoState.title}
                    onChange={handleTodo}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            updateTodo(todoState, todo.id);
                            handleClose();
                        }
                    }}
                />
                <Form.Control
                    type="hour"
                    name="hour"
                    placeholder= {todo.hour ? formatHour(todo.hour) : ""}
                    autoFocus
                    value={todoState.hour}
                    onChange={handleTodo}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            updateTodo(todoState, todo.id);
                            handleClose();
                        }
                    }}
                />
                <Form.Control
                    type="date"
                    name="date"
                    placeholder= {todo.date ? formatDate(todo.date): ""}
                    autoFocus
                    value={todoState.date}
                    onChange={handleTodo}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            updateTodo(todoState, todo.id);
                            handleClose();
                        }
                    }}
                />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: 'lightcyan' }}>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={() => {
                updateTodo(todoState, todo.id);
                handleClose();
            }}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default TodoComponent
