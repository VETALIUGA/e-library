export const getBooksFromApi = () => {
  const url = 'http://192.200.100.181:8081/rest/books';
  return (dispatch) => {
    dispatch(getBooksFromApiStarted());
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(getBooksFromApiSuccess(json)))
      .catch((err) => dispatch(getBooksFromApiFailure(err)));
  };
};

const getBooksFromApiStarted = () => {
  console.log('getting book from api was started');
  return ({
    type: 'GET_BOOKS_FROM_API_STARTED',
    payload: {
      isCompleted: false,
    },
  });
};

const getBooksFromApiSuccess = (booksList) => {
  console.log('book list was returned', booksList);
  return ({
    type: 'GET_BOOKS_FROM_API_SUCCESS',
    payload: {
      booksList,
      isCompleted: true,
    },
  });
};

const getBooksFromApiFailure = (error) => {
  console.log(error);
  return ({
    type: 'GET_BOOKS_FROM_API_FAILURE',
    payload: {
      error,
    },
  });
};

export const getBookFromApi = (bookId) => {
  const url = `http://192.200.100.181:8081/rest/books/${bookId}`;
  return (dispatch) => {
    dispatch(getBookFromApiStarted());
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(getBookFromApiSuccess(json)))
      .catch((err) => dispatch(getBookFromApiFailure(err)));
  };
};

const getBookFromApiStarted = () => {
  console.log('getting book from api was started');
  return ({
    type: 'GET_BOOK_FROM_API_STARTED',
    payload: {
      isCompleted: false,
    },
  });
};

const getBookFromApiSuccess = (bookItem) => {
  console.log('book was returned', bookItem);
  return ({
    type: 'GET_BOOK_FROM_API_SUCCESS',
    payload: {
      bookItem,
      isCompleted: true,
    },
  });
};

const getBookFromApiFailure = (error) => {
  console.log(error);
  return ({
    type: 'GET_BOOK_FROM_API_FAILURE',
    payload: {
      error,
    }
  });
};

export const deleteBookFromApi = (bookId) => {
  const url = `http://192.200.100.181:8081/rest/books/${bookId}`;
  return (dispatch) => {
    dispatch(deleteBookFromApiStarted);
    fetch(url, {
      method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(deleteBookFromApiSuccess(json));
        dispatch(getBooksFromApi());
      })
      .catch((err) => dispatch(deleteBookFromApiFailure(err)));
  }
}

const deleteBookFromApiStarted = () => {
  return ({
    type: "DELETE_BOOK_FROM_API_STARTED",
    payload: {
      isCompleted: false,
    }
  });
};

const deleteBookFromApiSuccess = (bookItem) => {
  console.log('book was deleted', bookItem);
  return ({
    type: 'DELETE_BOOK_FROM_API_SUCCESS',
    payload: {
      bookItem,
      isCompleted: true,
    },
  });
};

const deleteBookFromApiFailure = (error) => {
  console.log(error);
  return ({
    type: 'DELETE_BOOK_FROM_API_FAILURE',
    payload: {
      error,
    }
  });
};

