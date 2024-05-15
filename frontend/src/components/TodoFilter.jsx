import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const TodoFilter = ({setFilterStatus}) => {

  //State
  const [selectValue, setSelectValue] = useState(true)

  //Functions
  const handleFilter = (event) =>{
    const value = event.target.value === "true";
    setSelectValue(value);
    setFilterStatus(value);
  }
  return (
    <Form.Select className='todo-filter' value={selectValue} onChange={handleFilter}>
        <option value={true}>On going</option>
        <option value={false}>Done</option>
    </Form.Select>
  )
}

export default TodoFilter
