import React from "react";
import { assets } from "../../assets/assets";

function FoodItem({ id, name, image, description, price, category }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg text-gray-800">{name}</p>
          <img src={assets.rating_starts} alt="rating" className="h-4" />
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <p className="text-orange-500 font-bold">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
