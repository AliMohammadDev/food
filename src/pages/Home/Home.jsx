import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import { useState } from "react";
function Home() {
  const [selectedItems, setSelectedItems] = useState(null);

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
