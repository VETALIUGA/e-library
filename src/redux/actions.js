export const getBooksFromApi = (booksList) => {
    return {
        type: 'GET_BOOKS_FROM_API',
        payload: {
            booksList
        }
    }
}