
import React,{useState} from 'react'

function Todo() {
    const [todos,setTodos] = useState([]);
    const [inputValue,setInputValue] = useState('');

    const handleInput = (event)=>{
        setInputValue(event.target.value);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim() !==''){
            setTodos([...todos,inputValue]);
            setInputValue('');
        }
        
    };
    const handelDelete = (index)=>{
        setTodos(todos.filter((_, i) => i !== index));
        console.log(index)
    
    };
  return (
    <div>
        <h1>Todo List</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter todo' value={inputValue} onChange={handleInput}/>
            <button>Add Todo</button>
        </form>
        <ol>
     {todos.map((todo,index)=>(
        <li key={index}>{todo} {'  '}  <button onClick={()=>handelDelete(index)}>Delete</button></li>
       
     ))}
        </ol>
    </div>
  )
}

export default Todo