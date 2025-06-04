import { useGetItems } from "../../api/item";
import Skeleton from "../Skeleton";

function FoodDisplay() {
  const { data: items, isLoading, isError } = useGetItems();

  if (isLoading) return <Skeleton />;
  if (isError) return <div>error happened.</div>;

  return (
    <div className="px-4 md:px-10 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Top Dishes Near You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <FoodItem
            key={index}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
