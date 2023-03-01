import React, { useState } from 'react';
import './App.scss';
import { Header} from './components/Header';
import { TodoList } from './components/TodoList';
import { OpenTodo } from './components/OpenTodo';

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [titleIsEmpty, setTitleStatus] = useState(false);
  const [descriptionIsEmpty, setDescriptionStatus] = useState(false);
  const [todo, setTodo] = useState();

  const addTodo = () => {
    setTitle((prev) => prev.trim());
    setDescription((prev) => prev.trim());

    if (title.length === 0) {
      setTitleStatus(true);
    } else {
      setTitleStatus(false);
    }

    if (description.length === 0) {
      setDescriptionStatus(true);
    } else {
      setDescriptionStatus(false);
    }

    if (title.length === 0 || description.length === 0) {
      return;
    }

    const newId = (todos.length + 1).toString() + '.';

    setTodos(() => [
      ...todos,
      {
        id: newId,
        title,
        description,
        status: false,
      },
    ]);

    setTitle('');
    setDescription('');
  };
  
  const checkTodo = (id) => {
    setTodo();

    let newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onOpenTodo = (id) => {
    setTodo({});

    const newTodo = todos.find(todo => todo.id === id);

    setTodo(newTodo);
  };

  return (
    <section className='App'>
      <header className='App__header'>
        <Header
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          addTodo={addTodo}
          titleIsEmpty={titleIsEmpty}
          descriptionIsEmpty={descriptionIsEmpty}
        />
      </header>

      <main className='App__main'>
        <TodoList todos={todos} checkTodo={checkTodo} onOpenTodo={onOpenTodo} />
      </main>

      {todo && <OpenTodo todo={todo} setTodo={setTodo} />}
    </section>
  );
};

export default App;
