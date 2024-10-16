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
            <p><strong>Author:</strong> {bookDetails.authors[0]}</p>
            {Object.keys(bookDetails).map((val, k) => {
                    return Array.isArray(bookDetails[val]) ? (<p/>) : (
                        <p><strong>{val}:</strong> {bookDetails[val]}</p>
                    )
                    })
                }
        </div>
    );
};

export default BookDetails;
