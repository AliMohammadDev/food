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
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Orders</h1>

      <div className="space-y-6">
        {data.data.map((order, index) => (
          <div
            key={order.id}
            className="flex flex-col gap-4 p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white"
          >
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-2xl">
                  📦
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Order #{order.id}</h2>
                  <p className="text-sm text-gray-500">
                    For: {order.delivery.firstName} {order.delivery.lastName}
                  </p>
                  <p className="text-sm text-gray-400">
                    Placed on: {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Cart Status: {order.cart.status}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Food Processing"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-600"
                    }`}
                >
                  {order.status}
                </span>
              </div>
            </div>

            {/* Items Summary Section */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm font-medium text-gray-700 mb-2">
                🛒 Items Purchased: <span className="font-bold">{data.length}</span>
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                {data.result.map((item, i) => (
                  <li key={i}>
                    {item.name} × {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
}

export default Order;
