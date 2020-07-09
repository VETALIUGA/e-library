const initialState = {
  booksList: [
    {
      id: 0,
      title: '',
      author: '',
      coverPhotoURL: '',
      isbnNumber: '',
      price: 0,
      language: '',
    },
  ],
  currentBook: {
    id: 0,
    title: '',
    author: '',
    coverPhotoURL: '',
    isbnNumber: '',
    price: 0,
    language: '',
  },
  isCompleted: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKS_FROM_API': {
      return {
        ...state,
        booksList: [
          ...action.payload.booksList,
        ],
      };
    }
    case 'GET_BOOK_FROM_API': {
      return {
        ...state,
        currentBook: action.payload.bookItem,

      };
    }
    case 'GET_BOOK_FROM_API_STARTED': {
      return {
        ...state,
        isCompleted: action.payload.isCompleted,
      };
    }
    case 'GET_BOOK_FROM_API_SUCCESS': {
      return {
        ...state,
        currentBook: action.payload.bookItem,
        isCompleted: action.payload.isCompleted,
      };
    }
    case 'GET_BOOK_FROM_API_FAILURE': {
      return state;
    }
    case 'GET_BOOKS_FROM_API_STARTED': {
      return {
        ...state,
        isCompleted: action.payload.isCompleted,
      };
    }
    case 'GET_BOOKS_FROM_API_SUCCESS': {
      return {
        ...state,
        booksList: action.payload.booksList,
        isCompleted: action.payload.isCompleted,
      };
    }
    case 'GET_BOOKS_FROM_API_FAILURE': {
      return state;
    }
    case 'DELETE_BOOK_FROM_API_STARTED': {
      return {
        ...state,
        isCompleted: action.payload.isCompleted
      }
    }
    case 'DELETE_BOOK_FROM_API_SUCCESS': {
      return {
        ...state,
        isCompleted: action.payload.isCompleted,
      }
    }
    case 'DELETE_BOOK_FROM_API_FAILURE': {
      return state;
    }
    default: {
      return state;
    }
  }
}
