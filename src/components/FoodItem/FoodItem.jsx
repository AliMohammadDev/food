import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";

function FoodItem({ id, name, image, description, price, category }) {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
      <img src={image} alt={name} className="w-full h-60 object-cover" />

      {!itemCount ? (
        <div className="flex justify-center mt-4">
          <img
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt=""
            className="cursor-pointer w-10 h-10 animate-pulse hover:scale-110 transition duration-300 shadow-lg hover:shadow-orange-300 rounded-full"
          />
        </div>
      ) : (
        <div className="item-counter flex items-center gap-4 bg-white rounded-full shadow px-4 py-2 w-max mt-4 mx-auto">
          <img
            onClick={() => setItemCount((prev) => Math.max(prev - 1, 0))}
            src={assets.remove_icon_red}
            className="cursor-pointer "
          />
          <p className="font-semibold text-gray-800">{itemCount}</p>
          <img
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_green}
            className="cursor-pointer "
          />
        </div>
      )}

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
