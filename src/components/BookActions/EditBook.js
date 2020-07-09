import React, { useState, useEffect } from 'react';
import './AddBook.scss';
import { connect } from 'react-redux';
import SectionArticle from '../SectionArticle/SectionArticle';

import { getBookFromApi } from '../../redux/actions';
import BookForm from './BookForm';

const EditBook = (props) => {
  let successTimer = null;

  const [isSuccess, setSuccess] = useState(false);
  useEffect(() => {
    clearTimeout(successTimer);
  });
  useEffect(() => {
    props.onGetBookFromApi(props.match.params.bookId);
  }, [props.match.params.bookId]);

  const handleSubmit = async (values, { setSubmitting }) => {
    const editableBookItem = { ...values, id: props.match.params.bookId };
    const url = 'http://192.200.100.181:8081/rest/books';
    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(editableBookItem),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSubmitting(false);
      const json = await response.json();
      if (!json.status) {
        console.log('Form successfully sent with json:', json);
        setSuccess(true);
        successTimer = setTimeout(() => setSuccess(false), 2300);
      } else {
        throw Error;
      }
    } catch (e) {
      console.log('Error', e);
    }
  };

  return (
    <section className="section add-book__section">
      <div className="container add-book__container">
        <SectionArticle title="Edit book" class="add-book" />
        {props.isCompleted
          ? <BookForm submitForm={handleSubmit} bookItem={props.currentBook} /> : ''}
        {isSuccess ? <div className="add-book__msg-success">Successfully</div> : ''}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  currentBook: state.currentBook,
  isCompleted: state.isCompleted,
});

const mapDispatchToProps = (dispatch) => ({
  onGetBookFromApi: (bookId) => dispatch(getBookFromApi(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
