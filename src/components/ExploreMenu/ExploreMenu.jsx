import { menu_list } from "../../assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="px-4 md:px-10 py-10 flex flex-col gap-8" id="explore-menu">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Explore Our Menu
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings with high-quality food.
        </p>
      </div>

      <div className="flex gap-16 overflow-x-auto scrollbar-hide py-4 px-2">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="flex-shrink-0 flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
            >
              <div
                className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 shadow-md ${
                  isActive ? "border-orange-500" : "border-transparent"
                }`}
              >
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className={`mt-3 text-center font-medium text-sm md:text-base ${
                  isActive ? "text-orange-500" : "text-gray-800"
                }`}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="border-b-2 border-gray-300 w-full"></div>

    </div>
  );
}

export default ExploreMenu;
