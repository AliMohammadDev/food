import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import {
  useAddCartItem,
  useGetCartItems,
  useUpdateCartItem,
} from "../../api/cartItem";
import { useGetProfile } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function FoodItem({ itemId, name, image, description, price }) {
  const { data: cartItems } = useGetCartItems();
  const navigate = useNavigate(); 
  const { data: profile } = useGetProfile();

  const cartItem = cartItems?.find((item) => item.item.id === itemId);

  const itemCount = cartItem?.quantity || 0;

  const { mutate: addItemToCart } = useAddCartItem(() => {
    toast.success("Item added successfully");
  });

  const { mutate: updateCartItem } = useUpdateCartItem(() => {
    toast.success("Item updated successfully");
  });

  const handleAddClick = () => {
    if (!profile) {
      toast.info("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    addItemToCart({
      itemId: itemId,
      quantity: 1,
    });
  };

  const handleRemoveClick = () => {
    if (itemCount > 0) {
      updateCartItem({
        itemId: itemId,
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
      <img
        src={`http://localhost:3000/uploads/items/${image}`}
        alt={name}
        className="w-full h-60 object-cover"
      />

      {!itemCount ? (
        <div className="flex justify-center mt-4">
          <img
            onClick={handleAddClick}
            src={assets.add_icon_white}
            alt="Add"
            className="cursor-pointer w-10 h-10 animate-pulse hover:scale-110 transition duration-300 shadow-lg hover:shadow-orange-300 rounded-full"
          />
        </div>
      ) : (
        <div className="item-counter flex items-center gap-4 bg-white rounded-full shadow px-4 py-2 w-max mt-4 mx-auto">
          <img
            onClick={handleRemoveClick}
            src={assets.remove_icon_red}
            alt="Remove"
            className="cursor-pointer"
          />
          <p className="font-semibold text-gray-800">{itemCount}</p>
          <img
            onClick={handleAddClick}
            src={assets.add_icon_green}
            alt="Add"
            className="cursor-pointer"
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
