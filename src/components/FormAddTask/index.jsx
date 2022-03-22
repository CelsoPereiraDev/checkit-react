import './style.css';
import React from 'react';
import PropTypes from 'prop-types';

function FormAddTask({ addTask }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const $form = event.target;
    const formData = new FormData($form);
    const title = formData.get('title');
    const task = {
      title,
      checked: false,
      id: Date.now(),
    };

    addTask(task);
    $form.reset();
  };

  return (
    <form className="form" id="form-tasks" onSubmit={handleFormSubmit}>
      <div className="form__field">
        <label className="form__field__label">New Task</label>
        <input required type="text" name="title" className="form__field__input" />
        <button type="submit" className="form__button">
          Add
        </button>
      </div>
    </form>

  );
}

FormAddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default FormAddTask;
