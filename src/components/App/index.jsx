import React from 'react';
import useLocalStorageState from 'use-local-storage-state';
import Logo from '../Logo';
import './style.css';
import TaskList from '../TaskList';
import FormAddTask from '../FormAddTask';

// USE LOCAL STORAGE STATE "https://www.npmjs.com/package/use-local-storage-state"


function App() {
  const [tasks, setTasks] = useLocalStorageState('tasks', {
    defaultValue: [],
  });
  const tasksTodo = tasks.filter((task) => task.checked === false);
  const tasksDone = tasks.filter((task) => task.checked === true);

  const addTask = (task) => {
    // CLONANDO A LISTA
    const newTasks = [...tasks];
    // ADD NOVO ITEM NA LISTA CLONADA
    newTasks.push(task);
    // ATT LISTA PARA USAR A NOVA LISTA COM O ITEM ADD
    setTasks(newTasks);
  };

  const removeTask = (task) => {
    // CLONANDO A LISTA
    const newTasks = [...tasks];
    // REMOVE O ITEM DA LISTA CLONADA
    const taskToRemove = tasks.findIndex((item) => item.id === task.id);
    newTasks.splice(taskToRemove, 1);
    // ATT A LISTA PARA USAR A NOVA LISTA COM O ITEM REMOVIDO
    setTasks(newTasks);
  };

  const updateTaskChecked = (task) => {
    // CLONANDO A LISTA
    const newTasks = [...tasks];
    // ENCONTRA O ITEM A SER ATUALIZADO DENTRO DA LISTA CLONADA
    const tasksToUpdate = newTasks.findIndex((item) => item.id === task.id);
    // ATT PROPRIEDADE "CHECKED" DO ITEM NA LISTA CLINADA PARA SER O INVERSO DO VALOR ATUAL
    newTasks[tasksToUpdate].checked = !newTasks[tasksToUpdate].checked;
    // ATT LISTA PARA USAR A NOVA LISTA COM ITEM ATUALIZADO
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Logo />
      <FormAddTask addTask={addTask} />
      <div className="app__tasks-container">
        <TaskList title="To-do" tasks={tasksTodo} removeTask={removeTask} updateTaskChecked={updateTaskChecked} />
        <TaskList title="Done" tasks={tasksDone} removeTask={removeTask} updateTaskChecked={updateTaskChecked} />
      </div>
    </div>
  );
}

export default App;
