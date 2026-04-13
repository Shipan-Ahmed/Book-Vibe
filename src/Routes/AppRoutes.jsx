import { createBrowserRouter, useParams } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import Books from "../Pages/Books";
import ErrorPages from "../Pages/ErrorPages";
import BookDetails from "../Components/UI/BookDetails";
import ListedBooks from "../Pages/ListedBooks";
import CustomizeBarShape from "../Components/CustomizeBarShape";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            // {
            //     path: "/Books",
            //     // loader: ({params}) => fetch(`/public/booksData.json ${params}`),
            //     loader: () => fetch("/public/booksData.json"),
            //     Component: Books
            // },
            {
                path: "/Books/bookDetails/:id",
                loader: () => fetch("/booksData.json"),
                Component: BookDetails
            },
            {
                path: "/listed-books",
                Component: ListedBooks
            },
            {
                path: "/pages-to-read",
                Component: CustomizeBarShape
            }
        ],
        errorElement: <ErrorPages />,
    }
])