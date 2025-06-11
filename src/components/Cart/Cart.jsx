import { useNavigate } from "react-router-dom";
import { useGetCartItems } from "../../api/cartItem";

function Cart() {
  const navigate = useNavigate();
  const { data: cartItems, isLoading, isError } = useGetCartItems();

  if (isLoading) return <div className="p-6">Loading cart...</div>;
  if (isError)
    return <div className="p-6 text-red-500">Failed to load cart.</div>;

 const subtotal = cartItems?.reduce((sum, item) => sum + item.subtotal, 0) || 0;


  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-orange-100 text-gray-800 text-left">
              <th className="py-3 px-4">Item</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Quantity</th>
              <th className="py-3 px-4">Total</th>
              <th className="py-3 px-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              const imagePath = item.item.image.replace(
                "http://localhost:3000/uploads/items",
                ""
              );

              return (
                <tr key={item.id} className="border-t hover:bg-orange-50">
                  <td className="py-3 px-4">
                    <img
                      src={`http://localhost:3000/uploads/items/${imagePath}`}
                      alt={item.item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-4">{item.item.name}</td>
                  <td className="py-3 px-4">${item.item.price}</td>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td className="py-3 px-4">${item.subtotal}</td>
                  <td className="py-3 px-4">
                    <button className="text-red-500 cursor-pointer hover:underline">
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold mb-2">Cart Totals</h2>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee:</span>
            <span>${deliveryFee}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button
            onClick={() => navigate("/place-order")}
            className="w-full cursor-pointer bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Proceed to Checkout
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md h-full">
          <p className="mb-2 text-gray-700">
            If you have a promo code, enter it below:
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 border border-gray-300 rounded px-4 py-2"
            />
            <button className="bg-gray-800 cursor-pointer text-white px-4 py-2 rounded hover:bg-gray-700 transition">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
