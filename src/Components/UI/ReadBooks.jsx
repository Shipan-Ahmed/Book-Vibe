import React, { useContext, useState } from 'react';
import { BooksCustomContext } from '../CustomContext/BooksContext';
import ListedBooksCards from './ListedBooksCards';
import { ImFilesEmpty } from 'react-icons/im';

const ReadBooks = () => {
    const booksContext = useContext(BooksCustomContext);
    const { readBooks } = booksContext;
    console.log("ReadBooks in ReadBooks component: ", readBooks);



    const [sortCriteria, setSortCriteria] = useState(''); 

    const sortedBooks = [...readBooks].sort((a, b) => {
        if (sortCriteria === 'rating') {
            return a.rating - b.rating; 
        } else if (sortCriteria === 'pages') {
            return a.totalPages - b.totalPages; 
        }
        return 0; 
    });

    return (
        <div>

            <div className="flex justify-center my-8">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white hover:bg-[#1fa308]">
                        Sort By <span>v</span>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => setSortCriteria('rating')}>Rating</a></li>
                        <li><a onClick={() => setSortCriteria('pages')}>Number of pages</a></li>
                    </ul>
                </div>
            </div>

            {sortedBooks && (
                <ul>
                    {sortedBooks.map((book) => <ListedBooksCards key={book.bookId} book={book} /> )}
                </ul>
            )}
            {
                (!sortedBooks || sortedBooks.length === 0) && <div className='flex flex-col justify-center items-center gap-5 my-20'>
                    <p className='text-center text-7xl'><ImFilesEmpty /></p>
                    <h2 className='text-2xl font-bold text-gray-500'>No book are added in read books</h2>
                    <h2 className='text-2xl font-bold text-gray-500'>Please add some books from book list</h2>
                </div>
            }
        </div>
    );
};

export default ReadBooks;