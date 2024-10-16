import React from 'react';
import { useSelector } from 'react-redux';

const BookDetails = () => {

    const bookDetails = useSelector(state => state.books.bookDetails);

    if (!bookDetails?.name) {
        return <p>Select a book to see more details</p>;
    }

    return (
        <div className="book-details">
            <h2>{bookDetails.name}</h2>
            <p><strong>Author:</strong> {bookDetails.authors?.join(', ')}</p>
            <p><strong>Pages:</strong> {bookDetails.numberOfPages}</p>
            <p><strong>ISBN:</strong> {bookDetails.isbn}</p>
        </div>
    );
};

export default BookDetails;