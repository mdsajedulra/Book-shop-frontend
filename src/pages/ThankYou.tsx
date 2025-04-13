import { useSearchParams } from "react-router-dom";
import { useVerifyOrderQuery } from "../redux/features/api/endpoints/paymentApi";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

const ThankYou = () => {

  const [searchParams] = useSearchParams();

  const { isLoading, data } = useVerifyOrderQuery( searchParams.get("order_id"),
  {
    refetchOnMountOrArgChange: true,
  })
  const order: OrderData = data?.data?.[0];
  console.log(order);

  // const order = {
  //   orderId: "ORD123456",
  //   name: "Md Sajedul Islam",
  //   email: "sajedul@example.com",
  //   product: "Animation Course",
  //   quantity: 1,
  //   totalPrice: 999,
  //   status: "Paid",
  //   date: "2025-04-12",
  //   paymentMethod: "Surjopay",
  // };

  return (
isLoading? "loading":   <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
<div className="card w-full max-w-2xl shadow-xl bg-base-100">
  <div className="card-body">
    <h2 className=" text-success text-2xl text-center">🎉 Thank You!</h2>
    <p className="text-lg text-center">Your order has been placed successfully.</p>

    <div className="divider">Order Summary</div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
      <div><span className="font-semibold">Order ID:</span> {order?.order_id}</div>
      <div><span className="font-semibold">Date:</span> {order?.date_time}</div>
      <div><span className="font-semibold">Name:</span> {order?.name}</div>
      <div><span className="font-semibold">Email:</span> {order?.email}</div>
      {/* <div><span className="font-semibold">Product:</span> {order.product}</div> */}
      {/* <div><span className="font-semibold">Quantity:</span> {order?.address}</div> */}
      <div><span className="font-semibold">Total Price:</span> ${order?.amount}</div>
      <div><span className="font-semibold">Status:</span> 
        <span className={`ml-1 badge ${order?.bank_status === "Success" ? "badge-success" : "badge-error"}`}>
          {order?.bank_status}
        </span>
      </div>
      <div><span className="font-semibold">Payment Method:</span> {order?.method}</div>
    </div>

    <div className="card-actions justify-end mt-6">
      <button className="btn btn-primary">Go to Dashboard</button>
    </div>
  </div>
</div>
</div>
  );
};

export default ThankYou;
