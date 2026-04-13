import React from 'react';
import { Link } from 'react-router';

const ErrorPages = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">

            <h1 className="text-7xl font-bold text-purple-600">404</h1>

            <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                Oops! Page Not Found
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
                The page you are looking for might have been removed or does not exist.
            </p>

            <Link
                to="/"
                className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
            >
                Go Back Home
            </Link>

        </div>
    );
};

export default ErrorPages;