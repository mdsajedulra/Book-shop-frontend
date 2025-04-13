import { MdOutlineDelete, MdOutlineSecurityUpdate } from "react-icons/md";
import {
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} from "../../../redux/features/api/endpoints/orderApi";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { SubmitHandler, useForm } from "react-hook-form";

export type TTransaction = {
  id: string;
  transactionStatus: "Initiated" | "Success" | "Failed";
  bank_status: string;
  date_time: string;
  method: string;
  sp_code: string;
  sp_message: string;
};

export type TOrder = {
  _id: string;
  email: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  status: "Paid" | "Pending" | "Cancelled" | "Completed" | "Shipped";
  transaction: TTransaction;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const OrderListCard = ({ order }: { order: TOrder }) => {
  const { _id, email, productId, quantity, totalPrice, status, transaction } =
    order;
  const [deleteOrder] = useDeleteOrderMutation();
  const [updateOrder] = useUpdateOrderMutation();

  const { register, handleSubmit, reset } = useForm<Partial<TOrder>>({
    defaultValues: {
      email,
      productId,
      quantity,
      totalPrice,
      status,
    },
  });

  const onSubmit: SubmitHandler<Partial<TOrder>> = async (data) => {
    console.log(_id, data);
    const parsedData = {
      ...data,
      quantity: Number(data.quantity),
      totalPrice: Number(data.totalPrice),
      transaction,
    };
    const res = await updateOrder({ id: _id, ...parsedData });
    if (res?.data?.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${productId} successfully updated.`,
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };

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
        const res = await deleteOrder(id).unwrap();
        if (res.success) {
          Swal.fire({
            title: "Deleted!",
            text: `${res?.data?.productId} has been deleted!`,
            icon: "success",
          });
        } else {
          toast.error(`${productId} can't be deleted right now!`);
        }
      }
    });
  };
  return (
    <div className="card bg-neutral text-neutral-content w-full">
      <div className="card-body items-start text-center">
        <h2 className="card-title mx-auto">{productId}</h2>
        <p className="text-sm md:text-base">Email : {email}</p>
        <p className="text-sm md:text-base">TotalPrice : {totalPrice}</p>
        <p className="text-sm md:text-base">Quantity : {quantity}</p>
        <p className="text-sm md:text-base">Status : {status}</p>
        <div className="card-actions justify-end">
          {/* The button to open modal */}
          <label
            htmlFor="my_modal_7"
            className="btn btn-ghost text-yellow-500 border-t-2 border-violet-400"
          >
            Update <MdOutlineSecurityUpdate />
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <div className="hero bg-base-200">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                  <h3 className="text-lg md:text-xl font-semibold text-center">
                    Update Order
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <fieldset className="fieldset">
                      <label className="fieldset-label">Email</label>
                      <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        {...register("email")}
                      />
                      <label className="fieldset-label">ProductId</label>
                      <input
                        type="text"
                        className="input"
                        placeholder="ProductId"
                        {...register("productId")}
                      />
                      <label className="fieldset-label">Quantity</label>
                      <input
                        type="number"
                        className="input"
                        placeholder="Quantity"
                        {...register("quantity", {
                          valueAsNumber: true,
                          min: 1,
                        })}
                      />
                      <label className="fieldset-label">Total Price</label>
                      <input
                        type="number"
                        step="any"
                        className="input"
                        placeholder="Total Price"
                        {...register("totalPrice", {
                          valueAsNumber: true,
                          min: 0,
                        })}
                      />
                      <label className="fieldset-label">Status</label>
                      <select
                        defaultValue="Pick a color"
                        className="select"
                        {...register("status")}
                      >
                        <option disabled={true}>Status</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="shipped">Shipped</option>
                      </select>
                      <button className="btn btn-primary mt-4">
                        Update Order
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost text-red-500 border-t-2 border-violet-400"
          >
            Delete <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderListCard;
