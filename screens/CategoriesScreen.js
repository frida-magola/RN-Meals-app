import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/Dummy_data";

function CategoriesScreen({ navigation }) {
  function CategoriesRenderItem(itemData) {
    function onPressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler} />;
  }

  return <FlatList key={"#"} data={CATEGORIES} keyExtractor={(item) => "#" + item.id} renderItem={CategoriesRenderItem} numColumns={2} />;
}

export default CategoriesScreen;
