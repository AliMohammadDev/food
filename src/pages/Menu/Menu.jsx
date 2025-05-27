import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../../components/FoodItem/FoodItem";

function Menu() {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="px-6 md:px-20 py-10">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
        All Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {food_list.map((item) => (
          <FoodItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
