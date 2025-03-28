import { Category } from "@/models/Category";
import { deleteCategory } from "../services/categoryService";
import { toast } from "react-hot-toast";

interface ModalProps {
  //isOpen: boolean;
  onClose: () => void;
  selectedCategory: Category | null;
}

export default function Modal({ onClose, selectedCategory }: ModalProps) {
  //if (!isOpen) return null; // Don't render if the modal is not open

  const deleteCategoryHandler = async () => {
    if (!selectedCategory?.id){
      toast.error("Category not found, cannot delete.");
      return;
    }

    const response = await deleteCategory(selectedCategory.id);
    if (response?.success) {
      console.log("Category deleted successfully");
      toast.success("Category deleted successfully");
      onClose();
    }
    else {
      console.log("Error deleting category:");
      //toast.error(`Error: ${response.error}`);
    }
  }
//   const deleteCategoryHandler = async () => {
//     if (!selectedCategory) return;

//     const toastId = toast.loading("Deleting category...");
//     console.log("inside delete handler");

//     try {
//       console.log("inside try just before calling servicve");
//         await deleteCategory(7); // Error will propagate here if `throw` is used in the service
//         toast.success("Category deleted successfully", { id: toastId });
//         onClose(); // Close modal on success
//     } catch (error) {
//         console.error("Error in component:", error);
//         const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
//         toast.error(`Error: ${errorMessage}`, { id: toastId });
//     }
// };
//  const deleteCategoryHandler = async () => {
//   if (!selectedCategory) return;

//   const toastId = toast.loading("Deleting category...");

//   try {
//     const result = await deleteCategory(7);

//     if (result.success) {
//       toast.success("Category deleted successfully", { id: toastId });
//       onClose(); // Close modal after success
//     } else {
//       toast.error(`Error: ${result.error}`, { id: toastId });
//     }
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     toast.error("An unexpected error occurred", { id: toastId });
//   }
// };

  // const deleteCategory = async () => {
  //   try {
  //     const response = await fetch(`https://localhost:44347/api/category/deletecategory/${selectedCategory?.id}`, {
  //       method: "DELETE",
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
  //     }
  //     console.log('Category deleted successfully');
  //     onClose();
  //   } catch (error) {
  //     console.error("Error deleting category:", error);
  //   }
  // }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
          {/* Modal Content */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="text-center">
              <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100">

                <svg className="size-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
              <div className="mt-3">
                <h3 className="text-base font-semibold text-gray-900" id="modal-title">Delete Category</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Are you sure you want to delete <strong>"{selectedCategory?.name}"</strong>. This action cannot be undone.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Footer */}
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button" onClick={deleteCategoryHandler} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">
              Delete
            </button>
            <button onClick={onClose} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
