
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useAddBookMutation } from "../../../redux/features/api/endpoints/bookApi";



// const AddBookModal = ({ onClose }: { onClose: () => void }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     author: "",
//     price: "",
//     category: "",
//     description: "",
//     quantity: "",
//   cover: "",
//     inStock: false,
//   });

//   const [addBook, { isLoading }] = useAddBookMutation();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         ...formData,
//         price: parseFloat(formData.price),
//         quantity: parseInt(formData.quantity),
//       };
//       console.log(payload)
//       await addBook(payload).unwrap();
//       toast.success("Book added successfully!");
//       onClose();
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (err) {
//       toast.error("Failed to add book");
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//       <div className="bg-white rounded p-6 w-full max-w-lg shadow-lg">
//         <h2 className="text-xl font-semibold mb-4">Add New Book</h2>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input className="input input-bordered w-full" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
//           <input className="input input-bordered w-full" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
//           <input className="input input-bordered w-full" name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
//           <input className="input input-bordered w-full" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
//           <textarea className="textarea textarea-bordered w-full" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
//           <input className="input input-bordered w-full" name="quantity" type="number" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
//           <label className="label cursor-pointer">
//             <span className="label-text">In Stock?</span>
//             <input type="checkbox" name="inStock" className="checkbox" checked={formData.inStock} onChange={handleChange} />
//           </label>
//           <div className="flex justify-end gap-4 pt-2">
//             <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
//             <button className="btn btn-primary" disabled={isLoading}>Add Book</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBookModal;