import React from 'react';
import Logo from '../Logo';
import './style.css';
import Form from '../Form';
import TaskList from '../TaskList';

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <div className="app__tasks-container">
        <TaskList title="To-do" />
        <TaskList title="Done" />
      </div>
    </div>
  );
}

export default App;
