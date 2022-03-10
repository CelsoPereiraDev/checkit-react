import './style.css';
import React from 'react';

function Form() {
  return (
    <form className="form" id="form-tasks">
      <div className="form__field">
        <label className="form__field__label">New Task</label>
        <input required type="text" name="title" className="form__field__input" />
        <button type="submit" className="form__button">Add</button>
      </div>
    </form>

  );
}

export default Form;
