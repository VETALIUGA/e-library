const initialState = {
    booksList: [
        {
            id: 0,
            title: '',
            author: '',
            photoUrl: '',
            isbnNumber: 0,
            price: 0,
            language: ''
        }
    ]
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
        default: {
            return state;
        }
    }
}