import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function TaskList({ title }) {
  return (
    <section className="tasks-section">
      <h2 className="tasks-section__tittle">{ title }</h2>
      <ul className="tasks-section__list" id="list-todo">
        <li className="tasks-section__item">
          <label className="tasks-section__item__label">
            <input className="tasks-section__item__checkbox" type="checkbox" />
            <span className="tasks-section__item__text">dale</span>
          </label>
          <button type="button" className="tasks-section__item__remove">X</button>
        </li>
        <li className="tasks-section__item">
          <label className="tasks-section__item__label">
            <input className="tasks-section__item__checkbox" type="checkbox" />
            <span className="tasks-section__item__text">pitbull</span>
          </label>
          <button type="button" className="tasks-section__item__remove">X</button>
        </li>
      </ul>
    </section>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskList;
