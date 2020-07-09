import React, { useState, useEffect } from 'react';
import './AddBook.scss';
import { connect } from 'react-redux';
import SectionArticle from '../SectionArticle/SectionArticle';
import BookForm from './BookForm';

// import { setBookToApi } from '../../redux/actions';

const AddBook = (props) => {
  let successTimer = null;

  const [isSuccess, setSuccess] = useState(false);
  useEffect(() => () => {
    clearTimeout(successTimer);
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const url = 'http://192.200.100.181:8081/rest/books';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
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
        <SectionArticle title="Add book" class="add-book" />
        <BookForm
          submitForm={handleSubmit}
          bookItem={props.booksList.find((item) => item.id === +props.match.params.bookId)}
        />
        {isSuccess ? <div className="add-book__msg-success">Successfully</div> : ''}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  booksList: state.booksList,
});

const mapDispatchToProps = (dispatch) => ({
  // onSetBookToApi: (bookItem) => dispatch(setBookToApi(bookItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
