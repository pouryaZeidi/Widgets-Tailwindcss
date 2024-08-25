import React, { useState, ChangeEvent } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, completed: false }
      ]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 
      className="text-xl font-bold bg-yellow-300 flex justify-center rounded-3xl mb-4
      ">To-Do List
      </h2>
      <div className="mb-4">
        <textarea
          value={newTodo}
          onChange={handleChange}
          className="border p-2 w-full bg-yellow-300 resize-none overflow-y-auto"
          placeholder="Add Your Note here"
          style={{ height: '80px', overflowY: 'auto' }}
        />
        <button
          onClick={handleAddTodo}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="list-none p-0">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`flex flex-col items-start justify-between p-2 mb-4 border-b border-gray-300 ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            <span
              onClick={() => handleToggleComplete(todo.id)}
              className="cursor-pointer text-lg w-full"
              style={{ wordBreak: 'break-word' }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
