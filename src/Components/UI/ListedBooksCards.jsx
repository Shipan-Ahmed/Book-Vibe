import React from 'react';

const ListedBooksCards = ({ book }) => {
    console.log("book in ListedBooksCards component: ", book);
    const { image, bookName, author, tags, publisher, rating, yearOfPublishing, category, totalPages } = book;
    return (
        <div className="bg-gray-800 shadow-md rounded-lg p-4 my-4   flex flex-col md:flex-row  justify-between items-center ">
            <div className='w-full md:w-[300px] flex justify-start items-center flex-1'>
                <img className='mx-auto w-[300px] h-[400px] p-10' src={image} alt={bookName} />
            </div>
            <div className='space-y-10 flex-2'>
                <h2 className='text-2xl font-bold'>{bookName} </h2>
                <p className='text-xl font-semibold'>By: {author} </p>
                <div className='space-x-4'>
                    <span>Tags: </span>
                    {
                        tags.map((tag, ind) => <div key={ind} className="badge text-green-300"> {tag} </div>)
                    }
                    <span> Year of Publishing: {yearOfPublishing} </span>
                </div>
                <div className='space-x-10'>
                    <span>Publisher: {publisher} </span>
                    <span> Total Pages: {totalPages} </span>
                </div>
                <div className='space-x-10'>
                    <span className='bg-sky-800 p-2 rounded-lg'>Category: {category} </span>
                    <span className='bg-yellow-800 p-2 rounded-lg'> Rating: {rating} </span>
                    <span className='bg-green-400 text-white rounded py-2 px-4'>View Details</span>
                </div>
                
            </div>
        </div>
    );
};

export default ListedBooksCards;