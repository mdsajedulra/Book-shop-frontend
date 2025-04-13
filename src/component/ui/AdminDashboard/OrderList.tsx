import { MdOutlineDelete, MdOutlineSecurityUpdate } from "react-icons/md";
import { useDeleteOrderMutation } from "../../../redux/features/api/endpoints/orderApi";
import toast from "react-hot-toast";

export type TOrder = {
  _id: string;
  email: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  status: "Pending" | "Completed" | "Cancelled"; // adjust based on actual values
  transaction: {
    id: string;
    transactionStatus: "Initiated" | "Success" | "Failed"; // adjust based on actual values
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const OrderList = ({ order }: { order: TOrder }) => {
  const { _id, email, productId, quantity, totalPrice, status } = order;

  const [deleteOrder] = useDeleteOrderMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteOrder(id).unwrap();
    if (res.status) {
      toast.success(`${res?.data?._id} order has been deleted!`);
    } else {
      toast.error("Order Cannot be deleted right now.");
    }
  };

  return (
    <div className="card bg-neutral text-neutral-content w-full">
      <div className="card-body items-start text-center">
        <h2 className="card-title mx-auto">👤{email}</h2>
        <p className="text-sm md:text-base">Product Id : {productId}</p>
        <p className="text-sm md:text-base">Quantity : {quantity}</p>
        <p className="text-sm md:text-base">Total Price : {totalPrice}</p>
        <p className="text-sm md:text-base">Status : {status}</p>
        <div className="card-actions justify-end">
          {/* The button to open modal */}
          <label
            htmlFor="my_modal_7"
            className="btn btn-ghost text-yellow-500 border-t-2 border-blue-400"
          >
            Update <MdOutlineSecurityUpdate />
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">This modal works with a hidden checkbox!</p>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost text-red-500 border-t-2 border-blue-400"
          >
            Delete <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
