import Link from "next/link";

export default function Home() {

  const welcome = "Welcome to RecipeShack!!";
  const description = "Find and share amazing recipes.";

  return (

    <main>
      <div className="container pb-5">
        <h1 className="text-2xl font-semibold">{welcome}</h1>
        <h2 className="text-1xl ">{description}</h2>
      </div>

      <p>Browse recipes here:
        <Link href="/recipes">
          <span className="text-red-500">Recipes!!</span>
        </Link></p>

    </main>

  );
}
