const initialState = {
    booksList: [
        {
            id: 0,
            title: '',
            author: '',
            coverPhotoURL: '',
            isbnNumber: 0,
            price: 0,
            language: ''
        }
    ],
    currentBook: {
        id: 0,
        title: '',
        author: '',
        coverPhotoURL: '',
        isbnNumber: 0,
        price: 0,
        language: ''
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_BOOKS_FROM_API': {
            return {
                ...state,
                booksList: [
                    ...action.payload.booksList
                ]
            }
        }
        case 'GET_BOOK_FROM_API' : {
            return {
                ...state,
                currentBook: action.payload.bookItem
                
            }
        }
        default: {
            return state;
        }
    }
}