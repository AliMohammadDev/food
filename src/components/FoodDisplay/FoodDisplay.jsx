import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay({ items }) {
  if (!items || items.length === 0) {
    return (
      <div className="px-4 md:px-10 py-10 text-center text-gray-600">
        <h2 className="text-xl font-semibold mb-4">
          Select a category to view items
        </h2>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Selected Category Items
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <FoodItem 
            key={index}
            itemId={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
