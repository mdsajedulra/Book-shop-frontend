import { useGetOwnOrdersQuery } from "../../../redux/features/api/endpoints/orderApi";

const UserOrders = () => {
  const { data, isLoading, isError } = useGetOwnOrdersQuery();

  const orders = data?.data || [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">🛒 My Orders</h2>

      {isLoading && <p>Loading My orders...</p>}
      {isError && <p className="text-red-500">Failed to load orders.</p>}

      {!isLoading && orders.length === 0 && (
        <p className="text-gray-500 text-center">You haven’t placed any orders yet.</p>
      )}

      {!isLoading && orders.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-base-200 text-base font-semibold">
                <th>#</th>
                <th>Email</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
                <th>Ordered At</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: any, idx: number) => (
                <tr key={order._id}>
                  <td>{idx + 1}</td>
                  <td>{order.email}</td>
                  <td>{order.quantity}</td>
                  <td>${order.totalPrice}</td>
                  <td>{order.status}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


export default UserOrders;