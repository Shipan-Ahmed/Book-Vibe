import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BooksCustomContext = createContext();

const BooksContext = ({ children }) => {

    const [wishBooks, setWishBooks] = useState([]);
    const handleAddToWishBooks = (book) => {
        const isAlreadyListed = wishBooks.find((listedBook) => listedBook.bookId === book.bookId);
        if (isAlreadyListed) {
            return toast.error("This book is already in your wishlist.");
        }
        setWishBooks([...wishBooks, book]);
        toast.success(`${book.bookName} added to your wishlist.`);
    }

    // for read list
    const [readBooks, setReadBooks] = useState([]);

    const handleAddToReadBooks = (book) => {
        const isAlreadyListed = readBooks.find((listedBook) => listedBook.bookId === book.bookId);
        if (isAlreadyListed) {
            return toast.error("This book is already in your read list.");
        }
        setReadBooks([...readBooks, book]);
        toast.success(`${book.bookName} added to your read list.`);
    }


    const data = {
        wishBooks,
        setWishBooks,
        handleAddToWishBooks,
        readBooks,
        setReadBooks,
        handleAddToReadBooks

    }

    return (
        <BooksCustomContext.Provider value={data}>
            {children}
        </BooksCustomContext.Provider>
    );
};

export default BooksContext;