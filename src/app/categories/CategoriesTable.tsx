// src/app/recipes/RecipeTable.tsx (Client Component)
"use client";

import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { useState } from "react";
import AdminDeleteModal from "../components/AdminDeleteModal";

// Define the structure of a single category
interface Category {
    id: number; // Replace with the actual data type for 'id'
    name: string; // Replace with the actual data type for 'name'
}

// Define the prop structure for the CategoriesTable component
interface CategoriesTableProps {
    categories: Category[]; // Array of Category objects
}

const CategoriesTable = ({ categories }: CategoriesTableProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        initFlowbite(); // Initialize Flowbite components
    }, []);

    return (
        <main>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Category Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {category.name}
                                </th>
                                <td className="px-6 py-4">{category.id}</td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-5">
                                        Add
                                    </a>
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-5">
                                        Edit
                                    </a>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            console.log("Add clicked");
                                            setIsModalOpen(true);
                                        }}
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline pr-5"
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Ensure modal renders */}
            {isModalOpen && <AdminDeleteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </main>
    );
};

export default CategoriesTable;