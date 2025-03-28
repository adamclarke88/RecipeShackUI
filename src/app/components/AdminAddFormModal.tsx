import { Category } from "@/models/Category";
import { toast } from "react-hot-toast";

interface ModalProps {
    onClose: () => void;
}

export default function AdminAddFormModal({ onClose }: ModalProps) {

    return (
        <div className="fixed inset-0 w-screen overflow-y-auto flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            {/* Background Overlay - Click here to close modal */}
            <div
                className="fixed inset-0 bg-gray-500/75 transition-opacity"
                aria-hidden="true"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                {/* Modal Content */}
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="text-center">
                        <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100">
                            <svg className="size-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <circle cx="12" cy="12" r="10" stroke="green" strokeWidth="1.5" fill="green" />
                                <line x1="12" y1="7" x2="12" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        <div className="mt-3">
                            <h3 className="text-base font-semibold text-gray-900" id="modal-title">Create Category</h3>

                            <form className="max-w-md mx-auto mt-3">
    {/* Category Name */}
    <div className="relative z-0 w-full mb-5 group">
        <input
            type="text"
            name="category_name"
            id="category_name"
            className="peer block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
            placeholder=" "
            required
        />
        <label
            htmlFor="category_name"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:font-medium peer-focus:text-blue-600 peer-focus:-translate-y-6 peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
        >
            Category Name
        </label>
    </div>
</form>

                        </div>
                    </div>
                </div>
                {/* Modal Footer */}
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">
                        Create
                    </button>
                    <button onClick={onClose} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}