import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import { useState } from "react";
import { useGetCategories } from "../../api/category";
import { useEffect } from "react";
import Skeleton from "../../components/Skeleton";
function Home() {
  const [selectedItems, setSelectedItems] = useState(null);
  const { data: menu, isLoading, isError } = useGetCategories();

  useEffect(() => {
    if (menu && menu.length > 0) {
      const saladCategory = menu.find(
        (cat) => cat.name.toLowerCase() === "salad"
      );
      if (saladCategory) {
        setSelectedItems(saladCategory.items);
      } else {
        setSelectedItems(menu[0].items);
      }
    }
  }, [menu]);

  if (isLoading) return <Skeleton />;
  if (isError)
    return (
      <div className="text-center text-red-500">Error loading categories</div>
    );

  return (
    <div className="py-4 px-10">
      <Header />
      <ExploreMenu onCategorySelect={(items) => setSelectedItems(items)} />

      <FoodDisplay items={selectedItems} />
      <AppDownload />
    </div>
  );
}

export default Home;
