import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BooksCustomContext } from '../CustomContext/BooksContext';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    // console.log(books);
    // console.log("id: ", id);
    const book = books.find((book) => book.bookId == (id));
    const { image, bookName, author, category, review, tags, rating, totalPages, publisher, yearOfPublishing } = book;


    const booksContext = useContext(BooksCustomContext);
    const {  handleAddToReadBooks, handleAddToWishBooks } = booksContext;
    // console.log( "wishBooks: ", wishBooks);
    // console.log(handleAddToWishBooks);

    return (
        <section className='max-w-7xl mx-auto my-10 bg-gray-800 rounded-xl p-2'>
       
            <div className="card flex justify-between items-center lg:card-side  shadow-sm ">
                <figure className='w-full flex justify-center items-center  flex-1'>
                    <img
                        src={image}
                        alt="Album"
                        className='mx-auto w-[300px] h-[450px] '/>
                </figure>
                <div className="card-body p-4 flex-1 gap-4">
                    <h2 className="card-title text-3xl font-bold">{bookName} </h2>
                    <p className='text-semibold text-xl' > By: {author} </p>
                    <p className='text-semibold text-xl' >{category} </p>
                    <p className=' text-sm '>{review} </p>
                    <h2>
                        {
                            tags.map((tag, ind) => <div key={ind} className="badge bg-green-500 text-gray-300"> {tag} </div>)
                        }
                    </h2>
                    <div className='space-y-5'>
                        <p className='flex gap-x-20 items-center'><span>Number of pages:</span> <span className='font-bold'>{totalPages}</span> </p>
                        <p className='flex gap-x-32 items-center'><span>Publisher: </span><span className='font-bold'>{publisher}</span> </p>
                        <p className='flex gap-x-18 items-center'><span>Year of Publishing:</span> <span className='font-bold'>{yearOfPublishing}</span> </p>
                        <p className='flex gap-x-36 items-center'><span >Rating: </span> <span className='font-bold'>{rating} </span></p>
                    </div>
                    <div className="card-actions justify-start gap-2">
                        <button  className="btn btn-primary" onClick={() => handleAddToReadBooks(book)} >Mark as Read</button>
                        <button className="btn btn-primary" onClick={() => handleAddToWishBooks(book)}> Add as Wishlist</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;