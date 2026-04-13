import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BooksCard = ({book}) => {
    return (
        <Link to={`/Books/bookDetails/${book.bookId}`} className="card  shadow-sm space-y-5 p-4 bg-gray-800">
            <figure className='bg-gray-700 p-4'>
                <img className='mx-auto h-[250px] '
                    src={book.image}
                    alt={book.bookNmae} />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">
                    {
                        book.tags.map((tag, ind) => <div key={ind} className="badge bg-green-500 text-gray-300"> {tag} </div>)
                    }
                </h2>
                <h2 className='text-xl font-bold'> {book.bookName} </h2>
                <p>{book.author} </p>
                <div className="card-actions justify-between border-t border-dotted border-gray-700 pt-5">
                    <div className="badge badge-outline">{book.category} </div>
                    <div className="badge badge-outline"> {book.rating} <FaRegStar /> </div>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;