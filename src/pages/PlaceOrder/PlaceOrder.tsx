import React from "react";
import { useCheckout, DeliveryInformationInput } from "../../api/checkout";
import { useForm } from "react-hook-form";

function PlaceOrder() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<DeliveryInformationInput>();


  const checkout = useCheckout(
    (data) => {
      window.location.href = data.url;
    },
    (messages) => {
      messages.forEach((msg) => {
        if (msg.includes("firstName")) {
          setError("firstName", { message: msg });
        } else if (msg.includes("lastName")) {
          setError("lastName", { message: msg });
        } else if (msg.includes("email")) {
          setError("emailD", { message: msg });
        } else if (msg.includes("emailD")) {
          setError("emailD", { message: msg });
        } else if (msg.includes("phone")) {
          setError("phone", { message: msg });
        } else if (msg.includes("street")) {
          setError("street", { message: msg });
        } else if (msg.includes("city")) {
          setError("city", { message: msg });
        } else if (msg.includes("state")) {
          setError("state", { message: msg });
        } else if (msg.includes("zipCode")) {
          setError("zipCode", { message: msg });
        } else if (msg.includes("country")) {
          setError("country", { message: msg });
        }
      });
    }
  );

  const onSubmit = (data: DeliveryInformationInput) => {
    checkout.mutate(data);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Place Your Order
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Cart Totals
          </h3>
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
            form="delivery-form"
            className="bg-orange-500 cursor-pointer text-white font-semibold rounded px-6 py-2 hover:bg-orange-600 transition col-span-1 md:col-span-2 mt-4"
          >
            {checkout.isLoading ? "Processing..." : "Proceed to Payment"}
          </button>

        </div>

        <form
          id="delivery-form"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
          <h3 className="text-xl font-semibold col-span-1 md:col-span-2 text-gray-700 mb-2">
            Delivery Information
          </h3>

          <div className="flex flex-col">
            <input {...register("firstName")} type="text" placeholder="First Name" className="border rounded px-4 py-2" />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
          </div>
          <div className="flex flex-col">
            <input {...register("lastName")} type="text" placeholder="Last Name" className="border rounded px-4 py-2" />
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
          </div>
          <div className="flex flex-col col-span-1 md:col-span-2">
            <input {...register("emailD")} type="email" placeholder="Email" className="border rounded px-4 py-2" />
            {errors.emailD && <span className="text-red-500 text-sm">{errors.emailD.message}</span>}
          </div>
          <div className="flex flex-col col-span-1 md:col-span-2">
            <input {...register("street")} type="text" placeholder="Street" className="border rounded px-4 py-2" />
            {errors.street && <span className="text-red-500 text-sm">{errors.street.message}</span>}
          </div>
          <div className="flex flex-col">
            <input {...register("city")} type="text" placeholder="City" className="border rounded px-4 py-2" />
            {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
          </div>
          <div className="flex flex-col">
            <input {...register("state")} type="text" placeholder="State" className="border rounded px-4 py-2" />
            {errors.state && <span className="text-red-500 text-sm">{errors.state.message}</span>}
          </div>
          <div className="flex flex-col">
            <input {...register("zipCode")} type="text" placeholder="Zip Code" className="border rounded px-4 py-2" />
            {errors.zipCode && <span className="text-red-500 text-sm">{errors.zipCode.message}</span>}
          </div>
          <div className="flex flex-col">
            <input {...register("country")} type="text" placeholder="Country" className="border rounded px-4 py-2" />
            {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
          </div>
          <div className="flex flex-col col-span-1 md:col-span-2">
            <input {...register("phone")} type="text" placeholder="Phone" className="border rounded px-4 py-2" />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
          </div>
        </form>


      </div>
    </div>
  );
}

export default PlaceOrder;
