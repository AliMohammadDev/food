import { useGetAllOrder } from "../../api/Order";

function Order() {
  const { data, isLoading, isError } = useGetAllOrder();

  if (isLoading) {
    return <div className="text-center py-10">Loading your orders...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500 py-10">Failed to load orders.</div>;
  }

  if (!data?.data?.length) {
    return <div className="text-center py-10">No orders found.</div>;
  }


  return (
    <div className="px-4 py-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      <div className="space-y-4">
        {data.data.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              {/* Placeholder image or icon */}
              <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
                📦
              </div>
              <div>
                <h2 className="font-semibold">Order #{order.id}</h2>
                <p className="text-sm text-gray-500">Cart ID: {order.cart.id}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">Cart Status: {order.cart.status}</p>
              <span
                className={`text-sm font-semibold ${order.status === "Delivered"
                    ? "text-green-600"
                    : order.status === "Food Processing"
                      ? "text-yellow-600"
                      : "text-red-500"
                  }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
