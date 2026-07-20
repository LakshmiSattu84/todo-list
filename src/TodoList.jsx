import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = React.useState([]);
    const [newTodo, setNewTodo] = React.useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
        const todo = {
            id: todos.length + 1,
            text: newTodo,
            completed: false
        };
        setTodos([...todos, todo]);
        setNewTodo('');
        }
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
        }));
    };

    return (
        <div className="todo-list">
        <h1>Todo List</h1>
        <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className='add-button' onClick={addTodo}>Add Todo</button>
        <ul>
            {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={removeTodo} />
            ))}
        </ul>
        </div>
    );
}

export default TodoList;