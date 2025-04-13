import { MdOutlineDelete, MdOutlineSecurityUpdate } from "react-icons/md";
import { useDeleteProductMutation, useUpdateProductMutation } from "../../../redux/features/api/endpoints/productApi";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";

export type TListProduct = {
  _id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  inStock: boolean;
};

const ProductListCard = ({ product }: { product: TListProduct }) => {
  const { _id, title, author, category, price, inStock } = product;
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<TListProduct>(product);

  // handle update button
  const [updateProduct] = useUpdateProductMutation();

  const handleUpdateClick = () => {
    setFormData(product);
    setShowModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    });
  };

  const handleCancel = () => setShowModal(false);

  const handleUpdate = async () => {
    try {
      const updateData = {
        quantity: formData.quantity,
        inStock: formData.inStock,
      };

      const res = await updateProduct({ id: _id, data: updateData }).unwrap();
      if (res.success) {
        toast.success(res.message || "Product updated successfully!");
      }
      setShowModal(false);
    } catch (error) {
      toast.error("Failed to update product.");
      console.error("Update error:", error);
    }
  };

  // handle delete button

  const [deleteProduct] = useDeleteProductMutation();
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteProduct(id).unwrap();
          if (res.success) {
            toast.success("Product deleted successfully");
          } else {
            toast.error("Failed to delete product");
          }
        } catch (error) {
          toast.error("Delete failed");
          console.error("Delete error:", error);
        }
      }
    });
  };
  return (
    <div className="card bg-base-100 shadow-md max-w-7xl mx-auto">
      <div className="card-body p-4 space-y-4">
        {/* Product Info */}
        <div className="text-left space-y-1">
          <h2 className="card-title text-lg md:text-xl font-semibold">{title}</h2>
          <p className="text-sm md:text-base text-gray-600">Author: {author}</p>
          <p className="text-sm md:text-base text-gray-600">Price: ${price}</p>
          <p className="text-sm md:text-base text-gray-600">Category: {category}</p>
          <p className="text-sm md:text-base text-gray-600">
            Available:{" "}
            <span className={`badge ${inStock ? "badge-success" : "badge-error"} badge-sm`}>
              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </p>
        </div>

        {/* Action Buttons Below Info */}
        <div className="flex flex-col sm:flex-row gap-3 justify-start">
          <button onClick={handleUpdateClick} className="btn btn-outline btn-primary flex items-center gap-1 w-40">
            <MdOutlineSecurityUpdate /> Update
          </button>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline btn-ghost flex items-center gap-1 w-40"
          >
            <MdOutlineDelete /> Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Update Product</h3>
          <p className="py-4">Modal content goes here.</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
      {showModal && (
        <div className="modal modal-open" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold mb-4">Update Product</h3>
            <div className="space-y-3">
              <input name="title" value={formData.title} onChange={handleInputChange} className="input input-bordered w-full" disabled placeholder="Title" />
              <input name="author" value={formData.author} onChange={handleInputChange} className="input input-bordered w-full" disabled placeholder="Author" />
              <input name="category" value={formData.category} onChange={handleInputChange} className="input input-bordered w-full" disabled placeholder="Category" />
              <input name="price" type="number" value={formData.price} onChange={handleInputChange} className="input input-bordered w-full" disabled placeholder="Price" />
              <input name="quantity" type="number" value={formData.quantity} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Quantity" />
              <select name="inStock" value={formData.inStock ? "true" : "false"} onChange={(e) => setFormData({ ...formData, inStock: e.target.value === "true" })} className="select select-bordered w-full">
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
              </select>
            </div>
            <div className="modal-action">
              <button onClick={handleCancel} className="btn">Cancel</button>
              <button onClick={handleUpdate} className="btn btn-primary">Update</button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={handleCancel}></div>
        </div>
      )}
    </div>
  );
};

export default ProductListCard;
