import React, { useContext, useState } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { RiArrowDownWideFill } from 'react-icons/ri';
import ReadBooks from '../Components/UI/ReadBooks';
import Wishbooks from '../Components/UI/Wishbooks';
import Books from './Books';
import { BooksCustomContext } from '../Components/CustomContext/BooksContext';

const ListedBooks = () => {
    const wishBooks = useContext(BooksCustomContext).wishBooks;
    const readBooks = useContext(BooksCustomContext).readBooks;
    const [clickReadBtn, setClickReadBtn] = useState(false);
    const [clickWishBtn, setClickWishBtn] = useState(false);
    return (
        <section className="max-w-7xl mx-auto space-y-10 my-10">
            <h2 className='text-4xl font-bold text-center my-10'> Books</h2>
            <div className='flex justify-between'>
                <div className='flex justify-start space-x-5'>
                    <button onClick={() => {
                        setClickReadBtn(true);
                        setClickWishBtn(false);
                        { clickReadBtn && <ReadBooks /> };
                    }} className="border border-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Read Books {readBooks.length}
                    </button>
                    <button onClick={() => {
                        setClickWishBtn(true);
                        setClickReadBtn(false);
                        {clickWishBtn && <Wishbooks />}
                    }} className=" border border-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ">
                        Wishlist Books {wishBooks.length}
                    </button>
                </div>
            </div>
           { clickReadBtn && <ReadBooks /> }
            {clickWishBtn && <Wishbooks />}
            {
                (!clickReadBtn && !clickWishBtn) && <div className='flex flex-col justify-center items-center gap-5 my-20'>
                    <FaBookOpen className='text-6xl text-gray-500' />
                    <h2 className='text-2xl font-bold text-gray-500'>Select Read or Wishlist Books</h2>
                </div>
            }
        </section>
    );
};

export default ListedBooks;