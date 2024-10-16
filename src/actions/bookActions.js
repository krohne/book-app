// /Users/884476/projects/book-app/src/actions/bookActions.js

// Action Types
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

export const FETCH_BOOK_DETAILS_REQUEST = 'FETCH_BOOK_DETAILS_REQUEST';
export const FETCH_BOOK_DETAILS_SUCCESS = 'FETCH_BOOK_DETAILS_SUCCESS';
export const FETCH_BOOK_DETAILS_FAILURE = 'FETCH_BOOK_DETAILS_FAILURE';

// Action Creators for fetching books
export const fetchBooksRequest = () => ({
    type: FETCH_BOOKS_REQUEST,
});

export const fetchBooks = () => async dispatch => {
    dispatch(fetchBooksRequest());
    try {
        const response = await fetch('https://anapioficeandfire.com/api/books/');
        const data = await response.json();
        dispatch(fetchBooksSuccess(data));
    } catch (error) {
        dispatch(fetchBooksFailure(error));
    }
};

export const fetchBooksSuccess = (books) => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: { books },
});

export const fetchBooksFailure = (error) => ({
    type: FETCH_BOOKS_FAILURE,
    payload: error,
});

// Action Creators for fetching book details
export const fetchBookDetailsRequest = (bookId) => ({
    type: FETCH_BOOK_DETAILS_REQUEST,
    payload: bookId,
});

export const fetchBookDetails = (bookId) => async dispatch => {
    dispatch(fetchBookDetailsRequest(bookId));
    try {
        const response = await fetch(`https://anapioficeandfire.com/api/books/${bookId}`);
        const data = await response.json();
        dispatch(fetchBookDetailsSuccess(data));
    } catch (error) {
        dispatch(fetchBookDetailsFailure(error));
    }
};

export const fetchBookDetailsSuccess = (bookDetails) => ({
    type: FETCH_BOOK_DETAILS_SUCCESS,
    payload: { bookDetails },
});

export const fetchBookDetailsFailure = (error) => ({
    type: FETCH_BOOK_DETAILS_FAILURE,
    payload: error,
});
