'use server';
import { revalidatePath } from "next/cache";

export async function getAllCategories() {
  try {
    const response = await fetch("https://localhost:44347/api/category/getallcategories");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
    }

    return await response.json();
  }
  catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function deleteCategory(id: number) {
  try {
    console.log("Deleting category with ID:", id);
    const response = await fetch(`https://localhost:44347/api/category/deletecategory/${id}`, {
      method: "DELETE",
    });
    revalidatePath("/categories");
    return { success: response.ok };
  }
  catch {
    console.log('test');
  }
}