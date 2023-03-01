import React from 'react';
import './Header.scss';

export const Header = ({
  title,
  description,
  setTitle,
  setDescription,
  addTodo,
  titleIsEmpty,
  descriptionIsEmpty
}) => {
  return (
    <div className='Header'>
      <form
        className='Header__form'
        onSubmit={(event) => {
          event.preventDefault();
          addTodo();
        }}
      >
        <div className={titleIsEmpty ? 'empty' : undefined}>
          <label>
            <div>Title:</div>
            <input
              type='text'
              name='title'
              placeholder='Enter title'
              className={titleIsEmpty ? 'empty' : undefined}
              value={title}
              onChange={(event) => setTitle(event.target.value.trim())}
            />
          </label>
        </div>
        <div className={descriptionIsEmpty ? 'empty' : undefined}>
          <label>
            <div>Description:</div>
            <input
              type='text'
              name='description'
              placeholder='Enter description'
              className={descriptionIsEmpty ? 'empty' : undefined}
              value={description}
              onChange={(event) => setDescription(event.target.value.trim())}
            />
          </label>
        </div>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};
