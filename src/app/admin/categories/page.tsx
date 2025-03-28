import Link from "next/link";
import CategoriesTable from "./CategoriesTable";
import { getAllCategories } from "../../services/categoryService";

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export default async function CategoriesPage() {
    try {
        const categories = await getAllCategories();

        return (
            <main>
                <div className="container pb-5">
                    <h1 className="text-2xl font-semibold">Manage Categories</h1>
                    <h2 className="text-1xl ">All Categories:</h2>
                </div>
                <CategoriesTable categories={categories} />
            </main>
        );

    } catch (error) {
        console.error('Error fetching categories:', error);
        return (
            <main>
                <h1>Error</h1>
                <p>Unable to fetch categories. Please try again later.</p>
            </main>
        );
    }

    // const getAllCategories = await fetch('https://localhost:44347/api/category/getallcategories');
    // const categories = await getAllCategories.json();
    // console.log('Categories: ', categories);

    //   return (
    //     <main>
    //       <h1>Manage Categories</h1>
    //       <h2>All Categories List:</h2>

    //       <hr></hr>

    //       <CategoriesTable categories={categories}/>

    //       <Link href="/">Back to home</Link>

    //     </main>
    //   );


    // method before using service:
    try {
        const getAllCategories = await fetch('https://localhost:44347/api/category/getallcategories');
        if (!getAllCategories.ok) {
            throw new Error(`HTTP error! status: ${getAllCategories.status}, message: ${getAllCategories.statusText}`);
        }
        const categories = await getAllCategories.json();
        console.log('Categories: ', categories);

        return (
            <main>
                <div className="container pb-5">
                    <h1 className="text-2xl font-semibold">Manage Categories</h1>
                    <h2 className="text-1xl ">All Categories:</h2>
                </div>
                <CategoriesTable categories={categories} />
            </main>
        );

    } catch (error) {
        console.error('Error fetching categories:', error);
        return (
            <main>
                <h1>Error</h1>
                <p>Unable to fetch categories. Please try again later.</p>
            </main>
        );
    }
}