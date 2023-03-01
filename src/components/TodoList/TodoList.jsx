import React from 'react';
import './TodoList.scss';

export const TodoList = ({ todos, onOpenTodo, checkTodo }) => (
  <div className='TodoList'>
    <div className='TodoList__header'>
      <div>ID</div>
      <div>TITLE</div>
      <div>DESCRIPTION</div>
      <div>STATUS</div>
    </div>
    {todos.map((todo) => (
      <div
        className='TodoList__todo'
        key={todo.id}
        onClick={() => onOpenTodo(todo.id)}
      >
        <div>{todo.id}</div>
        <div>{todo.title}</div>
        <div>{todo.description}</div>
        <div>
          <input
            type='checkbox'
            checked={todo.status}
            onChange={() => checkTodo(todo.id)}
          />
        </div>
      </div>
    ))}
  </div>
);
