import React from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
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
            <tr className="border-t hover:bg-orange-50">
              <td className="py-3 px-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Item"
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="py-3 px-4">Pizza Margherita</td>
              <td className="py-3 px-4">$10</td>
              <td className="py-3 px-4">2</td>
              <td className="py-3 px-4">$20</td>
              <td className="py-3 px-4">
                <button className="text-red-500 hover:underline">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold mb-2">Cart Totals</h2>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>$20</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee:</span>
            <span>$2</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total:</span>
            <span>$22</span>
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
