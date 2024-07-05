import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Todos ({todos}) {
    const [newTodo, setNewTodo] = useState('');
    //
    const addTodo = (e) => {
        e.preventDefault();
        axios.post('/api/todos', { title: newTodo });
        setNewTodo('')
        Inertia.reload({ only: ['todos'] });
    };

    const deleteTodo = (id) => {
        axios.delete(`/api/todos/${id}`);
        Inertia.reload({ only: ['todos'] });
    };

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Todo List</h1>
                <ul className="mb-4">
                    {todos.map(todo => (
                        <li key={todo.id} className="flex justify-between items-center mb-2">
                            <span>{todo.title}</span>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <form onSubmit={addTodo} className="flex items-center">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={e => setNewTodo(e.target.value)}
                        className="border border-gray-300 p-2 flex-grow mr-2 rounded"
                        placeholder="New Todo"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};
