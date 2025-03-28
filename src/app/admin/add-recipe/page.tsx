export default async function AddRecipePage() {
    try {
        // const categories = await getAllCategories();

        return (
            <main>
                <div className="container pb-5">
                    <h1 className="text-2xl font-semibold">Manage Recipes</h1>
                    <h2 className="text-1xl ">Add Recipe:</h2>
                    <h2 className="text-1xl ">All Recipes:</h2>
                </div>

                <div>

                    <form className="max-w-md mx-auto mt-3">
                        {/* Category Name */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="category_name"
                                id="category_name"
                                className="peer block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="category_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Category Name
                            </label>
                        </div>

                    </form>

                </div>
                {/* <CategoriesTable categories={categories} /> */}
            </main>
        );

    } catch (error) {
        console.error('Error fetching recipes:', error);
        return (
            <main>
                <h1>Error</h1>
                <p>Unable to fetch recipes. Please try again later.</p>
            </main>
        );
    }
}
