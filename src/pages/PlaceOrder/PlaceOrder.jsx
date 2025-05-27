import React from "react";

function PlaceOrder() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Place Your Order</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Cart Totals</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$20</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>$2</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
            <span>Total</span>
            <span>$22</span>
          </div>
            <button
            type="submit"
            className="bg-orange-500 cursor-pointer text-white font-semibold rounded px-6 py-2 hover:bg-orange-600 transition col-span-1 md:col-span-2 mt-4"
          >
              Proceed to Payment
          </button>
        </div>

        <form className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
          <h3 className="text-xl font-semibold col-span-1 md:col-span-2 text-gray-700 mb-2">
            Delivery Information
          </h3>

          <input type="text" placeholder="First Name" className="border rounded px-4 py-2" />
          <input type="text" placeholder="Last Name" className="border rounded px-4 py-2" />
          <input type="email" placeholder="Email" className="border rounded px-4 py-2 col-span-1 md:col-span-2" />
          <input type="text" placeholder="Street" className="border rounded px-4 py-2 col-span-1 md:col-span-2" />
          <input type="text" placeholder="City" className="border rounded px-4 py-2" />
          <input type="text" placeholder="State" className="border rounded px-4 py-2" />
          <input type="text" placeholder="Zip Code" className="border rounded px-4 py-2" />
          <input type="text" placeholder="Country" className="border rounded px-4 py-2" />

        
        </form>
      </div>
    </div>
  );
}

export default PlaceOrder;
