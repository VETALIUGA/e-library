import React from 'react';

const BookFormItem = (props) => (
  <div className="add-book__form-item">
    <label
      htmlFor={props.name}
      className="label add-book__form-label"
    >
      {props.name}
    </label>
    <span className="add-book__form-error">{props.errors}</span>
    <input
      className="input add-book__form-input"
      type="text"
      name={props.name}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      id={props.value}
      defaultValue={props.value}
    />
  </div>
);

export default BookFormItem;
