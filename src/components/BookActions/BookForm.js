import React from 'react';
import { Formik } from 'formik';
import BookFormItem from './BookFormItem';

const BookForm = (props) => {
  return (
    <Formik
      initialValues={
                props.bookItem ?
                {
                  title: props.bookItem.title,
                  author: props.bookItem.author,
                  coverPhotoURL: props.bookItem.coverPhotoURL,
                  isbnNumber: props.bookItem.isbnNumber,
                  price: props.bookItem.price,
                  language: props.bookItem.language,
                } : {
                  title: '',
                  author: '',
                  coverPhotoURL: '',
                  isbnNumber: '',
                  price: '',
                  language: '',
                }
            }
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        }
        if (!values.author) {
          errors.author = 'Required';
        }
        if (!(values.isbnNumber.toString().length === 10)) {
          errors.isbnNumber = 'Should have 10 digits';
        }
        if (
          !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/.test(values.coverPhotoURL)
        ) {
          errors.coverPhotoURL = 'Invalid URL';
        }
        if (!values.price) {
          errors.price = 'Required';
        }
        if (!values.language) {
          errors.language = 'Required';
        }
        return errors;
      }}
      onSubmit={props.submitForm}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
      }) => (
        <form onSubmit={handleSubmit} className="add-book__form">
          {Object.entries(values).map((item, index) => (
            <BookFormItem
              key={index}
              name={item[0]}
              value={item[1]}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors[item[0]] && touched[item[0]] && errors[item[0]]}
            />
          ))}
          <button className={`add-book__form-submit ${isValid ? '' : 'add-book__form-submit--disabled'}`} type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default BookForm;
