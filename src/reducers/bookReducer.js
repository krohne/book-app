import { 
    FETCH_BOOKS_REQUEST, 
    FETCH_BOOKS_SUCCESS, 
    FETCH_BOOKS_FAILURE, 
    FETCH_BOOK_DETAILS_REQUEST, 
    FETCH_BOOK_DETAILS_SUCCESS, 
    FETCH_BOOK_DETAILS_FAILURE 
} from '../actions/bookActions';

const initialState = {
    books: [],
    bookDetails: {},
    loading: false,
    error: null,
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload.books,
                loading: false,
            };
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_BOOK_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BOOK_DETAILS_SUCCESS:
            return {
                ...state,
                bookDetails: action.payload.bookDetails,
                loading: false,
            };
        case FETCH_BOOK_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default bookReducer;
