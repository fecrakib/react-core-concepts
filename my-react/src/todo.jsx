import React, { useState } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a new todo"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Todo</button>
            </form>
            <ol>
                {todos.map((todo, index) => (
                    <li key={index}>{todo} <button>Delete</button></li>
                ))}
            </ol>
        </div>
    );
}

export default TodoApp;
 