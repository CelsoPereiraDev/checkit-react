import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function TaskList({
  title,
  tasks,
  removeTask,
  updateTaskChecked,
}) {
  return (
    <section className="tasks-section">
      <h2 className="tasks-section__tittle">{ title }</h2>
      <ul className="tasks-section__list" id="list-todo">
        {
          tasks.map((currentTask) => (
            <li className="tasks-section__item" key={currentTask.id}>
              <label className="tasks-section__item__label">
                <input
                  checked={currentTask.checked}
                  className="tasks-section__item__checkbox"
                  type="checkbox"
                  onChange={() => { updateTaskChecked(currentTask); }}
                />
                <span className="tasks-section__item__text">{currentTask.title}</span>
              </label>
              <button type="button" className="tasks-section__item__remove" onClick={() => { removeTask(currentTask); }}>X</button>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

TaskList.propTypes = {
  removeTask: PropTypes.func.isRequired,
  updateTaskChecked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TaskList;
