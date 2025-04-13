/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useMakePaymentMutation } from "../redux/features/api/endpoints/paymentApi";
import { useGetBookByIdQuery } from "../redux/features/api/endpoints/bookApi";
import { useAppSelector } from "../redux/hook";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: string;
};

export default function CheckoutPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const user = useAppSelector((state) => state.auth.user);

  const { data: book } = useGetBookByIdQuery(id || "");
  const [makePayment, { isLoading, isSuccess, data, isError, error }] =
    useMakePaymentMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const totalPrice = quantity * (book?.data?.price || 0);

  const finalData = {
    productId: book?.data?._id,
    quantity,
  };

  const onSubmit = async () => {
    // toast.success("test");
    console.log(finalData);
    await makePayment(finalData);
  };

  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });
    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }
    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [isLoading, isSuccess, data, isError, error]);

  if (!book?.data || !user) {
    return <p className="text-center py-10">Invalid access.</p>;
  }

  return (
    <div className="min-h-screen bg-base-200 p-6 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl bg-base-100 shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Checkout Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <div className="space-y-4 flex flex-col">
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone", name: "phone", type: "tel" },
              { label: "Address", name: "address", type: "textarea" },
            ].map(({ label, name, type }) => (
              <div key={name} className="form-control w-full flex flex-col">
                <span className="text-base font-semibold mb-1">{label}</span>
                {type === "textarea" ? (
                  <textarea
                    {...register(name as keyof FormData, { required: true })}
                    placeholder={label}
                    className="textarea textarea-bordered"
                  />
                ) : (
                  <input
                    type={type}
                    {...register(name as keyof FormData, { required: true })}
                    placeholder={label}
                    className="input input-bordered"
                  />
                )}
                {errors[name as keyof FormData] && (
                  <p className="text-red-500 text-sm mt-1">
                    {label} is required
                  </p>
                )}
              </div>
            ))}

            <div className="form-control">
              <label className="label">
                <span className="label-text mb-1">Payment Method</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Shurjopay"
                  {...register("paymentMethod")}
                  className="radio checked:bg-primary"
                  defaultChecked
                />
                <span>Shurjopay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Summary */}
        <div className="border rounded-xl p-4 bg-base-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Product Summary</h3>
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-base-300 rounded-lg overflow-hidden">
              <img
                src={book?.data?.cover}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <div>
              <h4 className="font-bold">{book?.data.title}</h4>
              <p className="text-sm text-gray-500">{book?.data?.description}</p>

              <label className="form-control w-full max-w-xs mt-2">
                <span className="label-text mb-1">Quantity</span>
                <input
                  type="number"
                  min={1}
                  max={book?.data?.quantity}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="input input-bordered"
                />
              </label>

              <p className="text-primary font-bold text-lg mt-2">
                ৳ {totalPrice}
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 text-right mt-4">
          <button type="submit" className="btn btn-primary px-8">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
