import { useGetItems } from "../../api/item";
import FoodItem from "../../components/FoodItem/FoodItem";
import Skeleton from "../../components/Skeleton.tsx";

function Menu() {
  const { data: items, isLoading, isError } = useGetItems();

  if (isLoading) return <Skeleton />;
  if (isError) return <div>error happened.</div>;

  return (
    <div className="px-6 md:px-20 py-10">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
        All Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item) => {
          const image = item.image.replace(
            "http://localhost:3000/uploads/items",
            ""
          );
          return (
            <FoodItem
              key={item.id}
              itemId={item.id}
              name={item.name}
              image={image}
              description={item.description}
              price={item.price}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
