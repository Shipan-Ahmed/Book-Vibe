import React, { use } from 'react';

import BooksCard from '../Components/UI/BooksCard';

const booksPromises = fetch("/booksData.json").then(res => res.json());

const Books = () => {
    // const books = useLoaderData();
    // console.log(books.length);
    const books = use(booksPromises);
    return (
        <section className="max-w-7xl mx-auto space-y-10 my-10">
            <h2 className='text-3xl font-bold text-center'>Books</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    books.map((book, bookId) => {
                        return (
                           <BooksCard key={bookId} book={book}></BooksCard>
                        )
                    }
                    )
                }
           </div>
        </section>
    );
};

export default Books;