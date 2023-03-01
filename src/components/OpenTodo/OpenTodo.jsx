import React from 'react';
import './OpenTodo.scss';

export const OpenTodo = ({ todo, setTodo }) => (
  <div className='OpenTodo'>
    <h1 className='OpenTodo__header'>{todo.title}</h1>
    <div className='OpenTodo__description'>
      <h3>Description:</h3>
      <p>{todo.description}</p>
    </div>
    <div className='OpenTodo__status'>
      <p>Status</p>
      <input
        type='checkbox'
        checked={todo.status}
      />
    </div>
    <button
      type='button'
      onClick={() => setTodo()}
    >
      Close
    </button>
  </div>
);
