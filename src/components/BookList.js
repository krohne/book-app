import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, fetchBookDetails } from '../actions/bookActions';

const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books ?? []);

    useEffect(() => {
        // Fetch books when the component is mounted
        dispatch(fetchBooks());
    }, [dispatch]);

    const handleBookClick = (bookId) => {
        dispatch(fetchBookDetails(bookId));
    };

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map( (book, index) => (
                    <li key={book.id} onClick={() => handleBookClick(index+1)}>
                        <h2>{book.name}</h2>
                        <p>by {book.authors?.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
