import Link from "next/link";
import RecipesTable from "./RecipesTable";

export default function RecipesPage() {

  return (
    <main>
      <h1>Recipes</h1>
      <p>Browse delicious recipes here.</p>

      <hr></hr>
      <Link href="/">Back to home</Link>

      <RecipesTable/>

    </main>
  );
}