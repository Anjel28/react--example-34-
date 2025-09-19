import React, { useState } from 'react';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}
const Dairy:React.FC=()=>{
const [todos, setTodos] = useState<Todo[]>([]);


const addTodo = (task: string) => {
  const newTodo: Todo = {
    id: Date.now(),
    task,
    completed: true,
  };
  setTodos(prev => [...prev, newTodo]);
};

return (
  <div>
    <button onClick={() => addTodo('Learn TypeScript')}>Add Task</button>
    {todos.map(todo => (
      <div key={todo.id}>
        <span>{todo.task}</span> - <strong>{todo.completed ? 'Done' : 'Pending'}</strong>
      </div>
    ))}
  </div>
);
}

export default Dairy;