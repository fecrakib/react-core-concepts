import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './todo.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoApp></TodoApp>

  </React.StrictMode>,
)
