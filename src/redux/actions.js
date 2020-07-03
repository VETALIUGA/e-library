export const getBooksFromApi = (booksList) => {
    return {
        type: 'GET_BOOKS_FROM_API',
        payload: {
            booksList
        }
    }
}

export const getBookFromApi = (bookItem) => {
    return {
        type: 'GET_BOOK_FROM_API',
        payload: {
            bookItem
        }
    }
}

export const setBookToApi = (bookItem) => {
    return {
        type: 'SET_BOOK_TO_API',
        payload: {
            bookItem
        }
    }
}