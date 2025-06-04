import { useGetCategories } from "../../api/category";
import Skeleton from "../Skeleton";

function ExploreMenu() {
  const { data: menu, isLoading, isError } = useGetCategories();

  if (isLoading) return <Skeleton />;
  if (isError) return <div>error happened.</div>;

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

      {isLoading && <p className="text-center">Loading Menu...</p>}
      {isError && (
        <p className="text-center text-red-500">Failed to load Menu...</p>
      )}

      {!isLoading && !isError && menu && menu.length > 0 && (
        <div className="flex gap-16 overflow-x-auto scrollbar-hide py-4 px-2">
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
              >
                <div
                  className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 shadow-md `}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className={`mt-3 text-center font-medium text-sm md:text-base `}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      )}

      <div className="border-b-2 border-gray-300 w-full"></div>
    </div>
  );
}

export default ExploreMenu;
